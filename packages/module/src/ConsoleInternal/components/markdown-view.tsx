import { FC, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { css } from '@patternfly/react-styles';
import { marked } from 'marked';
import { useForceRender } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const DOMPurify = require('dompurify');

// const tableTags = ['table', 'thead', 'tbody', 'tr', 'th', 'td'];

interface ShowdownExtension {
  type: string;
  regex?: RegExp;
  replace?: (...args: any[]) => string;
}

export const markdownConvert = async (markdown: string, extensions?: ShowdownExtension[]) => {
  DOMPurify.addHook('beforeSanitizeElements', function (node) {
    // nodeType 1 = element type

    // transform anchor tags
    if (node.nodeType === 1 && node.nodeName.toLowerCase() === 'a') {
      node.setAttribute('rel', 'noopener noreferrer');
      return node;
    }

    // add PF content classes to standard elements (details blocks get handled separately)
    if (node.nodeType === 1) {
      const contentElements = [
        'ul',
        'ol',
        'p',
        'li',
        'hr',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'pre',
        'dl',
        'dt',
        'dd',
        'table',
      ];
      if (contentElements.includes(node.nodeName.toLowerCase())) {
        // don't overwrite elements already being styled by PatternFly
        if (!node.getAttribute('class')?.includes('pf-v6-c-')) {
          node.setAttribute('class', `pf-v6-c-content--${node.nodeName.toLowerCase()}`);
          return node;
        }
      }
    }
  });

  // Add a hook to make all links open a new window
  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
      node.setAttribute('target', '_blank');
    }
    // set non-HTML/MathML links to xlink:show=new
    if (
      !node.hasAttribute('target') &&
      (node.hasAttribute('xlink:href') || node.hasAttribute('href'))
    ) {
      node.setAttribute('xlink:show', 'new');
    }
  });

  const reverseString = (str: string) => str.split('').reverse().join('');

  // replace code fences that end in a double curly brace (which are used by our custom md extensions) with non
  // markdown formatting related tokens so that marked doesn't try to parse them as code spans
  //
  // we want to reverse the string before we do the substitution so that we only match the opening code fence which
  // corresponds to the closing code fence with the double curly brace
  const reversedMarkdown = reverseString(markdown);
  const reverseMarkdownWithSubstitutedCodeFences = reversedMarkdown.replace(
    /{{```((.|\n)*?)```/g,
    '{{@@@$1@@@',
  );
  const markdownWithSubstitutedCodeFences = reverseString(reverseMarkdownWithSubstitutedCodeFences);

  // Fix malformed HTML entities early in the process
  let preprocessedMarkdown = markdownWithSubstitutedCodeFences;
  preprocessedMarkdown = preprocessedMarkdown
    .replace(/&nbsp([^;])/g, '&nbsp;$1')
    .replace(/&amp;nbsp;/g, '&nbsp;');
  preprocessedMarkdown = preprocessedMarkdown.replace(/&nbsp(?![;])/g, '&nbsp;');

  // Process content in segments to ensure markdown parsing continues after HTML blocks
  const htmlBlockRegex =
    /(<(?:details|div|section|article)[^>]*>[\s\S]*?<\/(?:details|div|section|article)>)/g;

  let parsedMarkdown = '';

  // Check if there are any HTML blocks
  if (htmlBlockRegex.test(preprocessedMarkdown)) {
    // Reset regex for actual processing
    htmlBlockRegex.lastIndex = 0;

    let lastIndex = 0;
    let match;

    while ((match = htmlBlockRegex.exec(preprocessedMarkdown)) !== null) {
      // Process markdown before the HTML block
      const markdownBefore = preprocessedMarkdown.slice(lastIndex, match.index).trim();
      if (markdownBefore) {
        const parsed = await marked.parse(markdownBefore);
        parsedMarkdown += parsed;
      }

      // Process the HTML block: parse markdown content inside while preserving HTML structure
      let htmlBlock = match[1];

      // Find and process markdown content inside HTML tags
      const contentRegex = />(\s*[\s\S]*?)\s*</g;
      const contentMatches = [];
      let contentMatch;

      while ((contentMatch = contentRegex.exec(htmlBlock)) !== null) {
        const content = contentMatch[1];
        // Only process content that has markdown formatting but no extension syntax
        if (
          content.trim() &&
          !content.includes('{{') &&
          (content.includes('**') || content.includes('- ') || content.includes('\n'))
        ) {
          // This looks like markdown content without extensions - parse it as block content
          const parsedContent = await marked.parse(content.trim());
          // Remove wrapping <p> tags if they exist since we're inside HTML already
          const cleanedContent = parsedContent.replace(/^<p[^>]*>([\s\S]*)<\/p>[\s]*$/g, '$1');
          contentMatches.push({
            original: contentMatch[0],
            replacement: `>${cleanedContent}<`,
          });
        }
      }

      // Apply the content replacements
      contentMatches.forEach(({ original, replacement }) => {
        htmlBlock = htmlBlock.replace(original, replacement);
      });

      // Apply extensions (like admonitions) to the processed HTML block
      if (extensions) {
        extensions.forEach(({ regex, replace }) => {
          if (regex) {
            htmlBlock = htmlBlock.replace(regex, replace);
          }
        });
      }

      parsedMarkdown += htmlBlock;
      lastIndex = htmlBlockRegex.lastIndex;
    }

    // Process any remaining markdown after the last HTML block
    const markdownAfter = preprocessedMarkdown.slice(lastIndex).trim();
    if (markdownAfter) {
      const parsed = await marked.parse(markdownAfter);
      parsedMarkdown += parsed;
    }
  } else {
    // No HTML blocks found, process normally
    parsedMarkdown = await marked.parse(preprocessedMarkdown);
  }
  // Swap the temporary tokens back to code fences before we run the extensions
  let md = parsedMarkdown.replace(/@@@/g, '```');

  if (extensions) {
    // Convert code spans back to md format before we run the custom extension regexes
    md = md.replace(/<code>(.*)<\/code>/g, '`$1`');

    extensions.forEach(({ regex, replace }, _index) => {
      if (regex) {
        md = md.replace(regex, replace);
      }
    });

    // Convert any remaining backticks back into code spans
    md = md.replace(/`(.*)`/g, '<code>$1</code>');
  }

  return DOMPurify.sanitize(md);
};

interface SyncMarkdownProps {
  content?: string;
  emptyMsg?: string;
  exactHeight?: boolean;
  extensions?: ShowdownExtension[];
  renderExtension?: (contentDocument: Document, rootSelector: string) => React.ReactNode;
  inline?: boolean;
  className?: string;
}

type InnerSyncMarkdownProps = Pick<SyncMarkdownProps, 'renderExtension' | 'exactHeight'> & {
  markup: string;
  isEmpty: boolean;
  className?: string;
};

export const SyncMarkdownView: FC<SyncMarkdownProps> = ({
  content,
  emptyMsg,
  extensions,
  renderExtension,
  exactHeight,
  inline,
  className,
}) => {
  const { getResource } = useContext<QuickStartContextValues>(QuickStartContext);
  const [markup, setMarkup] = useState<string>('');

  useEffect(() => {
    async function getMd() {
      const md = await markdownConvert(
        content || emptyMsg || getResource('Not available'),
        extensions,
      );
      setMarkup(md);
    }
    getMd();
  }, [content, emptyMsg, getResource, extensions]);
  const innerProps: InnerSyncMarkdownProps = {
    renderExtension: extensions?.length > 0 ? renderExtension : undefined,
    exactHeight,
    markup,
    isEmpty: !content,
    className,
  };
  return inline ? <InlineMarkdownView {...innerProps} /> : <IFrameMarkdownView {...innerProps} />;
};

const uniqueId = (function () {
  let num = 0;
  return function (prefix) {
    const prefixStr = String(prefix) || '';
    num += 1;
    return prefixStr + num;
  };
})();

interface RenderExtensionProps {
  renderExtension: (contentDocument: Document, rootSelector: string) => React.ReactNode;
  selector: string;
  markup: string;
  docContext?: Document;
}

const RenderExtension: React.FC<RenderExtensionProps> = ({
  renderExtension,
  selector,
  markup,
  docContext,
}) => {
  const forceRender = useForceRender();
  const markupRef = useRef<string>(null);
  const shouldRenderExtension = useCallback(() => {
    if (markupRef.current === markup) {
      return true;
    }
    markupRef.current = markup;
    return false;
  }, [markup]);
  /**
   * During a render cycle in which markup changes, renderExtension receives an old copy of document
   * because react is still updating the dom using `dangerouslySetInnerHTML` with latest markdown markup
   * which causes the component rendered by renderExtension to receive old copy of document
   * use forceRender to delay the rendering of extension by one render cycle
   */
  useEffect(() => {
    if (renderExtension) {
      forceRender();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markup]);
  return (
    <>{shouldRenderExtension() ? renderExtension?.(docContext ?? document, selector) : null}</>
  );
};

const InlineMarkdownView: FC<InnerSyncMarkdownProps> = ({
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const id = useMemo(() => uniqueId('markdown'), []);
  return (
    <div className={css({ 'is-empty': isEmpty } as any, className)} id={id}>
      <div
        style={{ marginBlockEnd: 'var(--pf-t-global--spacer--md)' }}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      {renderExtension && (
        <RenderExtension renderExtension={renderExtension} selector={`#${id}`} markup={markup} />
      )}
    </div>
  );
};

const IFrameMarkdownView: FC<InnerSyncMarkdownProps> = ({
  exactHeight,
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const [frame, setFrame] = useState<HTMLIFrameElement>();
  const [loaded, setLoaded] = useState(false);
  const updateTimeoutHandle = useRef<NodeJS.Timeout>(null);

  const updateDimensions = useCallback(() => {
    if (!frame?.contentWindow?.document.body.firstChild) {
      return;
    }
    frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight}px`;

    // Let the new height take effect, then reset again once we recompute
    updateTimeoutHandle.current = setTimeout(() => {
      if (exactHeight) {
        frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight}px`;
      } else {
        // Increase by 15px for the case where a horizontal scrollbar might appear
        frame.style.height = `${
          frame.contentWindow.document.body.firstElementChild.scrollHeight + 15
        }px`;
      }
    });
  }, [frame, exactHeight]);

  useEffect(
    () => () => {
      clearTimeout(updateTimeoutHandle.current);
    },
    [],
  );

  const onLoad = useCallback(() => {
    updateDimensions();
    setLoaded(true);
  }, [updateDimensions]);

  // Find the app's stylesheets and inject them into the frame to ensure consistent styling.
  const filteredLinks = Array.from(document.getElementsByTagName('link')).filter((l) =>
    l.href.includes('app-bundle'),
  );

  const linkRefs = filteredLinks.reduce(
    (refs, link) => `${refs}
    <link rel="stylesheet" href="${link.href}">`,
    '',
  );

  const contents = `
  ${linkRefs}
  <style type="text/css">
  body {
    background-color: transparent !important;
    color: ${isEmpty ? '#999' : '#333'};
    font-family: var(--pf-t--global--font--family--body);
    min-width: auto !important;
  }
  table {
    display: block;
    margin-bottom: 11.5px;
    overflow-x: auto;
  }
  td,
  th {
    border-bottom: 1px solid #ededed;
    padding: 10px;
    vertical-align: top;
  }
  th {
    padding-top: 0;
  }
  </style>
  <body class="pf-m-redhat-font"><div style="overflow-y: auto;">${markup}</div></body>`;
  return (
    <>
      <iframe
        title="Markdown content preview"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        srcDoc={contents}
        style={{ border: '0px', display: 'block', width: '100%', height: '0' }}
        ref={(r) => {
          setFrame(r);
        }}
        onLoad={() => onLoad()}
        className={className}
      />
      {loaded && frame && renderExtension && (
        <RenderExtension
          markup={markup}
          selector={''}
          renderExtension={renderExtension}
          docContext={frame.contentDocument}
        />
      )}
    </>
  );
};
