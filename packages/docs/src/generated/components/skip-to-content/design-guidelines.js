import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Skip to content",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/skip-to-content/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/skip-to-content/skip-to-content.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`skip to content`}
      </strong>
      {` component allows screen reader and keyboard users to bypass navigation rather than tabbing through it.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsSkipToContentDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
