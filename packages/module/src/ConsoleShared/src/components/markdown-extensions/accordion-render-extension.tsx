import { FC, useState } from 'react';
import { useEventListener } from '../../hooks';
import { ACCORDION_MARKDOWN_BUTTON_ID, ACCORDION_MARKDOWN_CONTENT_ID } from './const';

interface AccordionShowdownComponentProps {
  buttonElement: HTMLElement;
  contentElement: HTMLElement;
}

const AccordionShowdownHandler: FC<AccordionShowdownComponentProps> = ({
  buttonElement,
  contentElement,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    const newExpanded = !expanded;
    const expandedModifier = 'pf-m-expanded';

    // Find the accordion item element (parent of the button)
    const accordionItem = buttonElement.closest('.pf-v6-c-accordion__item');

    // Update button - both visual state and aria-expanded
    buttonElement.className = `pf-v6-c-accordion__toggle ${newExpanded ? expandedModifier : ''}`;
    buttonElement.setAttribute('aria-expanded', newExpanded.toString());

    // Update content - both visual state and hidden attribute
    contentElement.hidden = !newExpanded;
    contentElement.className = `pf-v6-c-accordion__expandable-content ${
      newExpanded ? expandedModifier : ''
    }`;

    // Update accordion item
    if (accordionItem) {
      accordionItem.className = `pf-v6-c-accordion__item ${newExpanded ? expandedModifier : ''}`;
    }

    setExpanded(newExpanded);
  };

  useEventListener(buttonElement, 'click', handleClick);

  return <></>;
};

interface accordionRenderExtensionProps {
  docContext: Document;
}

const AccordionRenderExtension: FC<accordionRenderExtensionProps> = ({ docContext }) => {
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
