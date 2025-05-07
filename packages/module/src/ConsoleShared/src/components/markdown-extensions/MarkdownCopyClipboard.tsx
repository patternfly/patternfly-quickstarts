import { FC, useCallback, useContext, useMemo, useState } from 'react';
import { Tooltip } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '@quickstarts/utils/quick-start-context';
import { useEventListener } from '../../hooks';
import { MARKDOWN_COPY_BUTTON_ID, MARKDOWN_SNIPPET_ID } from './const';

interface CopyClipboardProps {
  element: HTMLElement;
  rootSelector: string;
  docContext: Document;
}

export const CopyClipboard: FC<CopyClipboardProps> = ({ element, rootSelector, docContext }) => {
  const { getResource } = useContext<QuickStartContextValues>(QuickStartContext);
  const [showSuccessContent, setShowSuccessContent] = useState<boolean>(false);
  const textToCopy = useMemo(() => {
    const copyTextId = element.getAttribute(MARKDOWN_COPY_BUTTON_ID);
    return (
      docContext.querySelector(
        `${rootSelector} [${MARKDOWN_SNIPPET_ID}="${copyTextId}"]`,
      ) as HTMLElement
    )?.innerText;
  }, [element, docContext, rootSelector]);

  useEventListener(
    element,
    'click',
    useCallback(() => {
      navigator.clipboard
        .writeText(textToCopy.trim())
        .then(() => {
          setShowSuccessContent(true);
        })
        .catch(() => {});
    }, [textToCopy]),
  );

  useEventListener(
    element,
    'mouseleave',
    useCallback(() => {
      setShowSuccessContent(false);
    }, []),
  );

  return showSuccessContent ? (
    <Tooltip
      key="after-copy"
      isVisible
      triggerRef={() => element as HTMLElement}
      content={getResource('Successfully copied to clipboard!')}
      className="pfext-quick-start__base"
    />
  ) : (
    <Tooltip
      key="before-copy"
      triggerRef={() => element as HTMLElement}
      content={getResource('Copy to clipboard')}
      className="pfext-quick-start__base"
    />
  );
};

interface MarkdownCopyClipboardProps {
  docContext: Document;
  rootSelector: string;
}

const MarkdownCopyClipboard: FC<MarkdownCopyClipboardProps> = ({ docContext, rootSelector }) => {
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
