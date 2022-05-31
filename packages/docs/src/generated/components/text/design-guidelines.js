import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Text",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/text/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/text/text.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`text`}
      </strong>
      {` component can wrap any static HTML content you want to place on your page to provide correct formatting when using standard HTML tags.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Text can be used anywhere in your designs and can take on different formats. Read `}
      <PatternflyThemeLink {...{"to":"/guidelines/typography"}}>
        {`PatternFly’s typography page`}
      </PatternflyThemeLink>
      {` for more guidelines on how to use text in your UIs, and the different styles available.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTextDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
