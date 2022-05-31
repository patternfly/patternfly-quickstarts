import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Text area",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/text-area/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/text-area/text-area.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`text area`}
      </strong>
      {` component is used for entering a paragraph of text that is longer than one line.
Text areas are commonly used in `}
      <PatternflyThemeLink {...{"to":"/components/form"}}>
        {`forms`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTextAreaDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
