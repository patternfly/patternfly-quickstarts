import * as React from 'react';
import { QuickStartContext, QuickStartContextValues } from '@quickstarts/utils/quick-start-context';
import { MARKDOWN_COPY_BUTTON_ID, MARKDOWN_SNIPPET_ID } from './const';
import { removeTemplateWhitespace } from './utils';
import { renderToStaticMarkup } from 'react-dom/server';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';

const useInlineCopyClipboardShowdownExtension = () => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return React.useMemo(
    () => ({
      type: 'lang',
      regex: /`([^`](.*?)[^`])`{{copy}}/g,
      replace: (text: string, group: string, _: string, groupId: number): string => {
        if (!group || isNaN(groupId)) {
          return text;
        }
        return removeTemplateWhitespace(
          `<span class="pf-v6-c-clipboard-copy pf-m-inline">
              <span class="pf-v6-c-clipboard-copy__text" ${MARKDOWN_SNIPPET_ID}="${groupId}">${group}</span>
              <span class="pf-v6-c-clipboard-copy__actions">
                <span class="pf-v6-c-clipboard-copy__actions-item">
                  <button class="pf-v6-c-button pf-m-plain" aria-label="${getResource(
                    'Copy to clipboard',
                  )}" ${MARKDOWN_COPY_BUTTON_ID}="${groupId}">
                    ${renderToStaticMarkup(<CopyIcon />)}
                  </button>
                </span>
              </span>
            </span>`,
        );
      },
    }),
    [getResource],
  );
};

export default useInlineCopyClipboardShowdownExtension;
