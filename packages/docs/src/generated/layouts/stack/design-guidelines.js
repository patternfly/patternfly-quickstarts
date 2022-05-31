import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Stack",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/stack/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/stack.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`Stack`}
      </strong>
      {` layout to position items vertically in a container, with one item filling the available vertical space.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsStackDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
