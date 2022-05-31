import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Brand",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/brand/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/brand/brand.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`brand`}
      </strong>
      {` is used to place a product logotype on a screen.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsBrandDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
