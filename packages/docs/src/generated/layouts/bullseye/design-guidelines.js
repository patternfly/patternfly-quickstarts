import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Bullseye",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/bullseye/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/bullseye.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`Bullseye`}
      </strong>
      {` layout to center content, both vertically and horizontally within a container.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsBullseyeDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
