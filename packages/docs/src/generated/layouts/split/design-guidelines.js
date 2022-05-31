import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Split",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/split/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/split.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`Split`}
      </strong>
      {` layout to position items horizontally in a container, with one item filling the remaining horizontal space as the viewport is resized.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsSplitDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
