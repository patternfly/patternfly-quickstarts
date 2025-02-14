import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { parse } from 'marked';
import { useForceRender } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import './_markdown-view.scss';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const DOMPurify = require('dompurify');

// const tableTags = ['table', 'thead', 'tbody', 'tr', 'th', 'td'];

type ShowdownExtension = {
  type: string;
  regex?: RegExp;
  replace?: (...args: any[]) => string;
};

export const markdownConvert = async (markdown: string, extensions?: ShowdownExtension[]) => {
  DOMPurify.addHook('beforeSanitizeElements', function(node) {
    // nodeType 1 = element type

    // transform anchor tags
    if (node.nodeType === 1 && node.nodeName.toLowerCase() === 'a') {
      node.setAttribute('rel', 'noopener noreferrer');
      return node;
    }

    // add PF class to ul and ol lists
    if (
      node.nodeType === 1 &&
      (node.nodeName.toLowerCase() === 'ul' || node.nodeName.toLowerCase() === 'ol')
    ) {
      node.setAttribute('class', 'pf-c-list');
      return node;
    }
  });

  // Add a hook to make all links open a new window
  DOMPurify.addHook('afterSanitizeAttributes', function(node) {
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

  // Replace code fences with non markdown formatting relates tokens so that marked doesn't try to parse them as code spans
  const markdownWithSubstitutedCodeFences = markdown.replace(/```/g, '@@@');
  const parsedMarkdown = await parse(markdownWithSubstitutedCodeFences);
  // Swap the temporary tokens back to code fences before we run the extensions
  let md = parsedMarkdown.replace(/@@@/g, '```');

  if (extensions) {
    // Convert code spans back to md format before we run the custom extension regexes
    md = md.replace(/<code>(.*)<\/code>/g, '`$1`');

    extensions.forEach(({ regex, replace }) => {
      if (regex) {
        md = md.replace(regex, replace);
      }
    });

    // Convert any remaining backticks back into code spans
    md = md.replace(/`(.*)`/g, '<code>$1</code>');
  }
  return DOMPurify.sanitize(md);
};

type SyncMarkdownProps = {
  content?: string;
  emptyMsg?: string;
  exactHeight?: boolean;
  /* truncateContent?: boolean; */
  extensions?: ShowdownExtension[];
  renderExtension?: (contentDocument: HTMLDocument, rootSelector: string) => React.ReactNode;
  inline?: boolean;
  className?: string;
};

type InnerSyncMarkdownProps = Pick<SyncMarkdownProps, 'renderExtension' | 'exactHeight'> & {
  markup: string;
  isEmpty: boolean;
  className?: string;
};

export const SyncMarkdownView: React.FC<SyncMarkdownProps> = ({
  // truncateContent,
  content,
  emptyMsg,
  extensions,
  renderExtension,
  exactHeight,
  inline,
  className,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const [markup, setMarkup] = React.useState<string>('');

  React.useEffect(() => {
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

const uniqueId = (function() {
  let num = 0;
  return function(prefix) {
    const prefixStr = String(prefix) || '';
    num += 1;
    return prefixStr + num;
  };
})();

type RenderExtensionProps = {
  renderExtension: (contentDocument: HTMLDocument, rootSelector: string) => React.ReactNode;
  selector: string;
  markup: string;
  docContext?: HTMLDocument;
};

const RenderExtension: React.FC<RenderExtensionProps> = ({
  renderExtension,
  selector,
  markup,
  docContext,
}) => {
  const forceRender = useForceRender();
  const markupRef = React.useRef<string>(null);
  const shouldRenderExtension = React.useCallback(() => {
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
  React.useEffect(() => {
    if (renderExtension) {
      forceRender();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markup]);
  return (
    <>{shouldRenderExtension() ? renderExtension?.(docContext ?? document, selector) : null}</>
  );
};

const InlineMarkdownView: React.FC<InnerSyncMarkdownProps> = ({
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const id = React.useMemo(() => uniqueId('markdown'), []);
  return (
    <div className={css('pfext-markdown-view', { 'is-empty': isEmpty }, className)} id={id}>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      {renderExtension && (
        <RenderExtension renderExtension={renderExtension} selector={`#${id}`} markup={markup} />
      )}
    </div>
  );
};

const IFrameMarkdownView: React.FC<InnerSyncMarkdownProps> = ({
  exactHeight,
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const [frame, setFrame] = React.useState<HTMLIFrameElement>();
  const [loaded, setLoaded] = React.useState(false);
  const updateTimeoutHandle = React.useRef<number>();

  const updateDimensions = React.useCallback(() => {
    if (!frame?.contentWindow?.document.body.firstChild) {
      return;
    }
    frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight}px`;

    // Let the new height take effect, then reset again once we recompute
    // @ts-ignore
    updateTimeoutHandle.current = setTimeout(() => {
      if (exactHeight) {
        frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight}px`;
      } else {
        // Increase by 15px for the case where a horizontal scrollbar might appear
        frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight +
          15}px`;
      }
    });
  }, [frame, exactHeight]);

  React.useEffect(
    () => () => {
      clearTimeout(updateTimeoutHandle.current);
    },
    [],
  );

  const onLoad = React.useCallback(() => {
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
    font-family: var(--pf-global--FontFamily--sans-serif);
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
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        srcDoc={contents}
        style={{ border: '0px', display: 'block', width: '100%', height: '0' }}
        ref={(r) => setFrame(r)}
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
