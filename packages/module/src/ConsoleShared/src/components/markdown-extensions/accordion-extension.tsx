import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionContent,
} from '@patternfly/react-core';
import { renderToStaticMarkup } from 'react-dom/server';
import { removeTemplateWhitespace } from './utils';
//import { useEventListener } from '../../hooks';
import './showdown-extension.scss';

const useAccordionShowdownExtension = () => {
  //const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  //const [expanded, setExpanded] = React.useState('def-list-toggle1');
  const [expanded, setExpanded] = React.useState(false);
  const elementId = React.useRef('');

  React.useEffect(() => {
    const element = document.getElementById(elementId.current);
    const handleClick = () => {
      const newExpanded = !expanded;
      setExpanded(newExpanded);
    };

    if (element) {
      element.addEventListener('click', handleClick);

      return () => {
        element.removeEventListener('click', handleClick);
      };
    }
    // useEventListener(
    //   element,
    //   'click',
    //   React.useCallback(() => {
    //     expanded.current = !expanded.current;
    //   }, [expanded]),
    // );
  }, [elementId]);

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
        elementId.current = `toggle-${accordionHeading}`;
        const accordion = (
          <Accordion asDefinitionList>
            <AccordionItem>
              <AccordionToggle isExpanded={expanded} id={elementId.current}>
                Item one
              </AccordionToggle>
              <AccordionContent id="def-list-expand1" isHidden={expanded}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
        return removeTemplateWhitespace(renderToStaticMarkup(accordion));
      },
    }),
    [expanded],
  );
};

export default useAccordionShowdownExtension;
