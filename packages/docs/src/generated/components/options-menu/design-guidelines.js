import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Options menu",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/options-menu/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/options-menu/options-menu.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`options menu`}
      </strong>
      {` is similar to a dropdown, but provides a way to select among a set of optional settings rather than trigger an action.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsOptionsMenuDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
