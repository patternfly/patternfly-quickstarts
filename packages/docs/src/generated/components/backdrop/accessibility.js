import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Backdrop",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/backdrop/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/backdrop/backdrop.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`backdrop`}
      </strong>
      {` is used to screen the main content of a page when a modal overlay is opened. It prevents the user from doing other work on the page until the modal is dismissed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should not be able to interact with or navigate to the backdrop, as they must address the modal overlay until the modal is dismissed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should also not be able to interact with the backdrop for the same reasons.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility-application","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility application:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`If using just a Backdrop component rather than PatternFly's Modal, you must trap focus inside of the modal and disable any functionality outside of it. This can be done with a FocusTrap or any alternative means of disabling all of the content behind the Backdrop.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsBackdropAccessibilityDocs';
Component.pageData = pageData;

export default Component;
