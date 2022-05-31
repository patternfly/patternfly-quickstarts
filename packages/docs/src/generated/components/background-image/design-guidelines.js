import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Background image",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/background-image/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/background-image/background-image.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`background image`}
      </strong>
      {` allows you to place an image in the background of your page or area of a page.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsBackgroundImageDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
