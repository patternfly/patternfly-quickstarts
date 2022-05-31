import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Flex",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/flex/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/flex.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <strong>
        {`Flex`}
      </strong>
      {` layout is a tool to build your own custom layout that builds-in the PatternFly spacer and breakpoint systems. This enables developers to create a custom layout that can have consistent spacing and change responsively with other PatternFly layouts and components.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsFlexDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
