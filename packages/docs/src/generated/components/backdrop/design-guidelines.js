import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Backdrop",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/backdrop/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/backdrop/backdrop.md"
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
  </React.Fragment>
);
Component.displayName = 'ComponentsBackdropDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
