import { useMemo } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionContent,
} from '@patternfly/react-core';
import { renderToStaticMarkup } from 'react-dom/server';
import { removeTemplateWhitespace } from './utils';
import { ACCORDION_MARKDOWN_BUTTON_ID, ACCORDION_MARKDOWN_CONTENT_ID } from './const';
import { marked } from 'marked';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const DOMPurify = require('dompurify');

const useAccordionShowdownExtension = () =>
  useMemo(
    () => ({
      type: 'lang',
      regex: /\[(.+)]{{(accordion) (&quot;(.*?)&quot;)}}/g,
      replace: (
        _text: string,
        accordionContent: string,
        _command: string,
        _quotedHeading: string,
        accordionHeading: string,
      ): string => {
        const accordionId = String(accordionHeading).replace(/\s/g, '-');

        // Process accordion content with markdown
        const processedContent = marked.parseInline(accordionContent);
        const sanitizedContent = DOMPurify.sanitize(processedContent);

        return removeTemplateWhitespace(
          renderToStaticMarkup(
            <Accordion>
              <AccordionItem>
                <AccordionToggle id={`${ACCORDION_MARKDOWN_BUTTON_ID}-${accordionId}`}>
                  {accordionHeading}
                </AccordionToggle>
                <AccordionContent id={`${ACCORDION_MARKDOWN_CONTENT_ID}-${accordionId}`} hidden>
                  <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>,
          ),
        );
      },
    }),
    [],
  );

export default useAccordionShowdownExtension;
