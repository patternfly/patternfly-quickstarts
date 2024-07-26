import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionContent,
} from '@patternfly/react-core';
import { renderToStaticMarkup } from 'react-dom/server';
import { removeTemplateWhitespace } from './utils';
import { ACCORDION_MARKDOWN_BUTTON_ID, ACCORDION_MARKDOWN_CONTENT_ID } from './const';

const useAccordionShowdownExtension = () =>
  React.useMemo(
    () => ({
      type: 'lang',
      regex: /\[(.+)]{{(accordion) ("(.*?)")}}/g,
      replace: (
        _text: string,
        accordionContent: string,
        _command: string,
        accordionHeading: string,
      ): string => {
        const accordionId = String(accordionHeading).replace(/\s/g, '-');

        return removeTemplateWhitespace(
          renderToStaticMarkup(
            <>
              <Accordion asDefinitionList>
                <AccordionItem isExpanded={false}>
                  <AccordionToggle id={`${ACCORDION_MARKDOWN_BUTTON_ID}-${accordionId}`}>
                    {accordionHeading}
                  </AccordionToggle>
                  <AccordionContent id={`${ACCORDION_MARKDOWN_CONTENT_ID}-${accordionId}`}>
                    {accordionContent}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>,
          ),
        );
      },
    }),
    [],
  );

export default useAccordionShowdownExtension;
