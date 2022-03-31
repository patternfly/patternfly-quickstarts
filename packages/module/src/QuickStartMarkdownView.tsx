import * as React from 'react';
import { SyncMarkdownView } from '@console/internal/components/markdown-view';
import {
  MarkdownCopyClipboard,
  MarkdownHighlightExtension,
  useInlineCopyClipboardShowdownExtension,
  useMultilineCopyClipboardShowdownExtension,
  useAdmonitionShowdownExtension,
  useCodeShowdownExtension,
} from '@console/shared';
import { HIGHLIGHT_REGEXP } from '@console/shared/src/components/markdown-highlight-extension/highlight-consts';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';

export const removeParagraphWrap = (markdown: string) => markdown.replace(/^<p>|<\/p>$/g, '');

type QuickStartMarkdownViewProps = {
  content: string;
  exactHeight?: boolean;
  className?: string;
};

const QuickStartMarkdownView: React.FC<QuickStartMarkdownViewProps> = ({
  content,
  exactHeight,
  className,
}) => {
  const { markdown } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const inlineCopyClipboardShowdownExtension = useInlineCopyClipboardShowdownExtension();
  const multilineCopyClipboardShowdownExtension = useMultilineCopyClipboardShowdownExtension();
  const admonitionShowdownExtension = useAdmonitionShowdownExtension();
  const codeShowdownExtension = useCodeShowdownExtension();
  return (
    <SyncMarkdownView
      inline
      content={content}
      exactHeight={exactHeight}
      extensions={[
        {
          type: 'lang',
          regex: HIGHLIGHT_REGEXP,
          replace: (text: string, linkLabel: string, linkType: string, linkId: string): string => {
            if (!linkLabel || !linkType || !linkId) {
              return text;
            }
            return `<button class="pf-c-button pf-m-inline pf-m-link" data-highlight="${linkId}">${linkLabel}</button>`;
          },
        },
        {
          type: 'output',
          filter: function(text) {
            // check HTML for patterns like: <em>Status: unknown</em>{#extension-requirement-status}
            // and replace with <em id="extension-requirement-status">Status: unknown</em>
            return text.replace(/<em>(.*)<\/em>{#(.*)}/g, '<em id="$2">$1</em>');
          },
        },
        inlineCopyClipboardShowdownExtension,
        multilineCopyClipboardShowdownExtension,
        admonitionShowdownExtension,
        codeShowdownExtension,
        ...(markdown ? markdown.extensions : []),
      ]}
      renderExtension={(docContext, rootSelector) => (
        <>
          <MarkdownHighlightExtension docContext={docContext} rootSelector={rootSelector} />
          <MarkdownCopyClipboard docContext={docContext} rootSelector={rootSelector} />
          {markdown &&
            markdown.renderExtension &&
            markdown.renderExtension(docContext, rootSelector)}
        </>
      )}
      className={className}
    />
  );
};
export default QuickStartMarkdownView;
