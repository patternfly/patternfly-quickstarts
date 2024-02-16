import * as React from 'react';
import { useEventListener } from '../../hooks';
import { ACCORDION_MARKDOWN_BUTTON_ID, ACCORDION_MARKDOWN_CONTENT_ID } from './const';

interface AccordionShowdownComponentProps {
  buttonElement: HTMLElement;
  contentElement: HTMLElement;
}

const AccordionShowdownHandler: React.FC<AccordionShowdownComponentProps> = ({
  buttonElement,
  contentElement,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleClick = () => {
    const expandedModifier = 'pf-m-expanded';

    buttonElement.className = `pf-v5-c-accordion__toggle ${!expanded ? expandedModifier : ''}`;
    contentElement.hidden = expanded;
    contentElement.className = `pf-v5-c-accordion__expanded-content ${
      !expanded ? expandedModifier : ''
    }`;
    setExpanded(!expanded);
  };

  useEventListener(buttonElement, 'click', handleClick);

  return <></>;
};

interface accordionRenderExtensionProps {
  docContext: Document;
}

const AccordionRenderExtension: React.FC<accordionRenderExtensionProps> = ({ docContext }) => {
  const buttonElements = docContext.querySelectorAll(`[id ^= ${ACCORDION_MARKDOWN_BUTTON_ID}]`);
  const contentElements = docContext.querySelectorAll(`[id ^= ${ACCORDION_MARKDOWN_CONTENT_ID}]`);

  return buttonElements.length > 0 ? (
    <>
      {Array.from(buttonElements).map((elm) => {
        const content = Array.from(contentElements).find((elm2) => {
          const elmId = elm.id.split(ACCORDION_MARKDOWN_BUTTON_ID)[1];
          const elm2Id = elm2.id.split(ACCORDION_MARKDOWN_CONTENT_ID)[1];
          return elmId === elm2Id;
        });
        return (
          <AccordionShowdownHandler
            key={elm.id.split(ACCORDION_MARKDOWN_BUTTON_ID)[1]}
            buttonElement={elm as HTMLElement}
            contentElement={content as HTMLElement}
          />
        );
      })}
    </>
  ) : null;
};

export default AccordionRenderExtension;
