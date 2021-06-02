import * as React from 'react';
import cx from 'classnames';
import _includes from 'lodash-es/includes';
import _reduce from 'lodash-es/reduce';
import _truncate from 'lodash-es/truncate';
import _uniqueId from 'lodash-es/uniqueId';
import { Converter } from 'showdown';
import { useTranslation } from 'react-i18next';

import './_markdown-view.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DOMPurify = require('dompurify');

const tableTags = ['table', 'thead', 'tbody', 'tr', 'th', 'td'];

type ShowdownExtension = {
  type: string;
  regex?: RegExp;
  replace?: (...args: any[]) => string;
};

export const markdownConvert = (markdown, extensions?: ShowdownExtension[]) => {
  const converter = new Converter({
    tables: true,
    openLinksInNewWindow: true,
    strikethrough: true,
    emoji: true,
  });

  extensions && converter.addExtension(extensions);

  // add hook to transform anchor tags
  DOMPurify.addHook('beforeSanitizeElements', function (node) {
    // nodeType 1 = element type
    if (node.nodeType === 1 && node.nodeName.toLowerCase() === 'a') {
      node.setAttribute('rel', 'noopener noreferrer');
      return node;
    }
  });

  return DOMPurify.sanitize(converter.makeHtml(markdown), {
    ALLOWED_TAGS: [
      'b',
      'i',
      'strike',
      's',
      'del',
      'em',
      'strong',
      'a',
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'ul',
      'ol',
      'li',
      'code',
      'pre',
      'button',
      ...tableTags,
      'div',
      'img',
      'span',
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'src', 'alt', 'id'],
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|didact):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
};

type SyncMarkdownProps = {
  content?: string;
  emptyMsg?: string;
  exactHeight?: boolean;
  truncateContent?: boolean;
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
  truncateContent,
  content,
  emptyMsg,
  extensions,
  renderExtension,
  exactHeight,
  inline,
  className,
}) => {
  const { t } = useTranslation();
  const markup = React.useMemo(() => {
    const truncatedContent = truncateContent
      ? _truncate(content, {
          length: 256,
          separator: ' ',
          omission: '\u2026',
        })
      : content;
    return markdownConvert(truncatedContent || emptyMsg || t('Not available'), extensions);
  }, [content, emptyMsg, extensions, t, truncateContent]);
  const innerProps: InnerSyncMarkdownProps = {
    renderExtension: extensions?.length > 0 ? renderExtension : undefined,
    exactHeight,
    markup,
    isEmpty: !content,
    className
  };
  return inline ? <InlineMarkdownView {...innerProps} /> : <IFrameMarkdownView {...innerProps} />;
};

const InlineMarkdownView: React.FC<InnerSyncMarkdownProps> = ({
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const id = React.useMemo(() => _uniqueId('markdown'), []);
  return (
    <div className={cx('co-markdown-view', { ['is-empty']: isEmpty }, className)} id={id}>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      {renderExtension && renderExtension(document, `#${id}`)}
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
        frame.style.height = `${
          frame.contentWindow.document.body.firstElementChild.scrollHeight + 15
        }px`;
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
    _includes(l.href, 'app-bundle'),
  );

  const linkRefs = _reduce(
    filteredLinks,
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
      {loaded && frame && renderExtension && renderExtension(frame.contentDocument, '')}
    </>
  );
};
