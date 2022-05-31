import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Tab content",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/tab-content/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/tab-content/tab-content.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`tab content`}
      </strong>
      {` component should be used with the `}
      <PatternflyThemeLink {...{"to":"/components/tabs"}}>
        {`tabs component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTabContentDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
