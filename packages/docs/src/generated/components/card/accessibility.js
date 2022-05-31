import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Card",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/card/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/card/card.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`card`}
      </strong>
      {` is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Basic cards will have native keyboard interaction with `}
      <strong>
        {`Tab`}
      </strong>
      {` navigating between interactive elements and `}
      <strong>
        {`Shift + Tab`}
      </strong>
      {` navigating backwards. Any elements inside a card will follow their usual accessibility expectations.`}
    </p>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`In general, the card component already has accessibility built in. However, variants that will need additional considerations are:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Expandable variant:`}
          </strong>
          {` for expandable variants it’s important to add additional details for screen reader users to understand this interaction.
Add:`}
        </p>
        <Example {...{"code":"toggleButtonProps=({\n    id: ‘toggleId’, \n    ‘aria-label’: ‘toggleLabel’, \n    ‘aria-labelledby’: ‘titleId toggleId’, \n    ‘aria-expanded’: this.state.isExpanded\n  )}"}}>
        </Example>
        <p {...{"className":"ws-p"}}>
          {`Note in this example that the `}
          <code {...{"className":"ws-code"}}>
            {`aria-labelledby`}
          </code>
          {` is a combination of the id on the `}
          <code {...{"className":"ws-code"}}>
            {`CardTitle`}
          </code>
          {` and the id on the toggle button. This will then combine the card title and the toggle button's label (this is the `}
          <code {...{"className":"ws-code"}}>
            {`aria-label`}
          </code>
          {` with text defining the toggle button, like "Details") and create something like "Header Details, collapsed, button" for the screen reader user. These are highly recommended for accessibility.`}
        </p>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsCardAccessibilityDocs';
Component.pageData = pageData;

export default Component;
