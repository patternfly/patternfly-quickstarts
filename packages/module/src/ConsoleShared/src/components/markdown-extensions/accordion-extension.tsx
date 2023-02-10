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
import './showdown-extension.scss';

const useAccordionShowdownExtension = () => {
  return React.useMemo(
    () => ({
      type: 'lang',
      regex: /\[(.+)]{{(accordion) ("(.*?)")}}/g,
      replace: (
        _text: string,
        accordionContent: string,
        _command: string,
        accordionHeading: string,
      ): string => {
        const accordionId = new String(accordionHeading).replace(/\s/g, '-');

        return removeTemplateWhitespace(
          renderToStaticMarkup(
            <Accordion asDefinitionList>
              <AccordionItem>
                <AccordionToggle
                  isExpanded={false}
                  id={`${ACCORDION_MARKDOWN_BUTTON_ID}-${accordionId}`}
                >
                  {accordionHeading}
                </AccordionToggle>
                <AccordionContent
                  id={`${ACCORDION_MARKDOWN_CONTENT_ID}-${accordionId}`}
                  isHidden={!false}
                >
                  {accordionContent}
                </AccordionContent>
              </AccordionItem>
            </Accordion>,
          ),
        );
      },
    }),
    [],
  );
};

export default useAccordionShowdownExtension;
