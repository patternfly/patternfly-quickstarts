import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Simple list",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/simple-list/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/simple-list/simple-list.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`simple list`}
      </strong>
      {` provides a list of selectable items that can be shown within a page. Each item is described by a text label. The list may be divided into logical sections by introducing group headers.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsSimpleListDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
