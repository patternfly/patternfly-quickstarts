import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Grid",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/grid/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/grid.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`Grid`}
      </strong>
      {` to layout content on a fixed-size 12 column grid.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsGridDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
