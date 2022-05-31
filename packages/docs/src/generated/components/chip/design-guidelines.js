import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/chip/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/chip/chip.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`chip`}
      </strong>
      {` is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsChipDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
