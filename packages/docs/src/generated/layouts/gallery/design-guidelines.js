import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Gallery",
  "section": "layouts",
  "source": "design-guidelines",
  "slug": "/layouts/gallery/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/layouts/gallery.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`Gallery`}
      </strong>
      {` layout to arrange content in a responsive grid. Content will wrap responsively to create uniform rows and columns.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'LayoutsGalleryDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
