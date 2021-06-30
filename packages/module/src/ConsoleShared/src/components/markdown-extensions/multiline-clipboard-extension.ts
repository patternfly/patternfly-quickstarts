import { MARKDOWN_COPY_BUTTON_ID, MARKDOWN_SNIPPET_ID } from './const';
import { QuickStartContext, QuickStartContextValues } from '@quickstarts/utils/quick-start-context';
import { useContext, useMemo } from 'react';

import './showdown-extension.scss';

const useMultilineCopyClipboardShowdownExtension = () => {
  const { getResource } = useContext<QuickStartContextValues>(QuickStartContext);
  return useMemo(
    () => ({
      type: 'lang',
      regex: /```[\n]((.*?\n)+)```{{copy}}/g,
      replace: (
        text: string,
        group: string,
        subgroup: string,
        groupType: string,
        groupId: string,
      ): string => {
        if (!group || !subgroup || !groupType || !groupId) return text;
        return `<div class="pf-c-code-block">
              <div class="pf-c-code-block__header">
                <div class="pf-c-code-block__actions">
                  <div class="pf-c-code-block__actions-item">
                    <button class="pf-c-button pf-m-plain" type="button" aria-label="${getResource(
                      'Copy to clipboard',
                    )}" ${MARKDOWN_COPY_BUTTON_ID}="${groupType}">
                      <i class="fas fa-copy" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="pf-c-code-block__content">
                <pre class="pf-c-code-block__pre ocs-code-block__pre">
                  <code class="pf-c-code-block__code" 
                    ${MARKDOWN_SNIPPET_ID}="${groupType}">${group}</code>
                </pre>
              </div>
            </div>`;
      },
    }),
    [getResource],
  );
};

export default useMultilineCopyClipboardShowdownExtension;
