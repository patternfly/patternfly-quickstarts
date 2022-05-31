import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Level",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/level/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/level.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`Level`}
      </strong>
      {` layout to evenly distribute content horizontally within a container.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsLevelDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
