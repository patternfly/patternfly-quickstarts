import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionContent,
} from '@patternfly/react-core';
import { renderToStaticMarkup } from 'react-dom/server';
import { removeTemplateWhitespace } from './utils';
import { useEventListener } from '../../hooks';
import './showdown-extension.scss';

type accordionShowdownComponentProps = {
  elementId: string;
};

export const accordionShowdownComponent: React.FunctionComponent<accordionShowdownComponentProps> = ({
  elementId,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
  };

  React.useEffect(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener('click', handleClick);
      return () => {
        element.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <Accordion asDefinitionList>
      <AccordionItem>
        <AccordionToggle isExpanded={expanded} id={elementId}>
          Item one
        </AccordionToggle>
        <AccordionContent id="def-list-expand1" isHidden={!expanded}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const useAccordionShowdownExtension = () => {
  return React.useMemo(
    () => ({
      type: 'lang',
      regex: /\[(.+)]{{(accordion) ("(.*?)")}}/g,
      replace: (
        _text: string,
        _accordionContent: string,
        _command: string,
        accordionHeading: string,
      ): string => {
        const accordion = accordionShowdownComponent({ elementId: accordionHeading });
        return removeTemplateWhitespace(renderToStaticMarkup(accordion));
      },
    }),
    [],
  );
};

export default useAccordionShowdownExtension;
