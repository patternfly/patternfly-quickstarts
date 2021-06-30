import * as React from 'react';
import { MARKDOWN_COPY_BUTTON_ID, MARKDOWN_SNIPPET_ID } from './const';
import { QuickStartContext, QuickStartContextValues } from '@quickstarts/utils/quick-start-context';
import { Tooltip } from '@patternfly/react-core';
import { useEventListener } from '../../hooks';

type CopyClipboardProps = {
  element: HTMLElement;
  rootSelector: string;
  docContext: HTMLDocument;
};

export const CopyClipboard: React.FC<CopyClipboardProps> = ({
  element,
  rootSelector,
  docContext,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const [showSuccessContent, setShowSuccessContent] = React.useState<boolean>(false);
  const textToCopy = React.useMemo(() => {
    const copyTextId = element.getAttribute(MARKDOWN_COPY_BUTTON_ID);
    return (docContext.querySelector(
      `${rootSelector} [${MARKDOWN_SNIPPET_ID}="${copyTextId}"]`,
    ) as HTMLElement).innerText;
  }, [element, docContext, rootSelector]);

  useEventListener(
    element,
    'click',
    React.useCallback(() => {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setShowSuccessContent(true);
        })
        .catch(() => {});
    }, [textToCopy]),
  );

  useEventListener(
    element,
    'mouseleave',
    React.useCallback(() => {
      setShowSuccessContent(false);
    }, []),
  );

  return showSuccessContent ? (
    <Tooltip
      key="after-copy"
      isVisible
      reference={() => element as HTMLElement}
      content={getResource('Successfully copied to clipboard!')}
    />
  ) : (
    <Tooltip
        key="before-copy"
        reference={() => element as HTMLElement}
        content={getResource('Copy to clipboard')}
      />
  );
};

type MarkdownCopyClipboardProps = {
  docContext: HTMLDocument;
  rootSelector: string;
};

const MarkdownCopyClipboard: React.FC<MarkdownCopyClipboardProps> = ({
  docContext,
  rootSelector,
}) => {
  const elements = docContext.querySelectorAll(`${rootSelector} [${MARKDOWN_COPY_BUTTON_ID}]`);
  return elements.length > 0 ? (
    <>
      {Array.from(elements).map((elm) => {
        const attributeValue = elm.getAttribute(MARKDOWN_COPY_BUTTON_ID);
        return (
          <CopyClipboard
            key={attributeValue}
            element={elm as HTMLElement}
            rootSelector={rootSelector}
            docContext={docContext}
          />
        );
      })}
    </>
  ) : null;
};

export default MarkdownCopyClipboard;
