/* eslint-disable max-len */
import * as React from 'react';
import { QuickStartContext, QuickStartContextValues } from '@quickstarts/utils/quick-start-context';
import { MARKDOWN_COPY_BUTTON_ID, MARKDOWN_SNIPPET_ID } from './const';
import { renderToStaticMarkup } from 'react-dom/server';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';

const useMultilineCopyClipboardShowdownExtension = () => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return React.useMemo(
    () => ({
      type: 'lang',
      regex: /```[\n]\s*((((?!```).)*?\n)+)\s*```{{copy}}/g,
      replace: (text: string, group: string, _1: string, _2: string, groupId: number): string => {
        if (!group || isNaN(groupId)) {
          return text;
        }
        return `<div class="pf-v6-c-code-block">
              <div class="pf-v6-c-code-block__header">
                <div class="pf-v6-c-code-block__actions">
                  <div class="pf-v6-c-code-block__actions-item">
                    <button class="pf-v6-c-button pf-m-plain" type="button" aria-label="${getResource(
                      'Copy to clipboard',
                    )}" ${MARKDOWN_COPY_BUTTON_ID}="${groupId}">
                      ${renderToStaticMarkup(<CopyIcon />)}
                    </button>
                  </div>
                </div>
              </div>
              <div class="pf-v6-c-code-block__content">
                <pre class="pf-v6-c-code-block__pre pfext-code-block__pre"><code class="pf-v6-c-code-block__code"${MARKDOWN_SNIPPET_ID}="${groupId}">${group.trim()}</code></pre>
              </div>
            </div>`;
      },
    }),
    [getResource],
  );
};

export default useMultilineCopyClipboardShowdownExtension;
