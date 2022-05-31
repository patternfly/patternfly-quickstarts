import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Title",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/title/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/title/title.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`title`}
      </strong>
      {` component applies top and bottom margins, font-weight, font-size, and line-height to titles. The most common usage for a title is to define headings within a page. For more information about the relationship between title component sizes and HTML heading levels, see the `}
      <PatternflyThemeLink {...{"to":"/guidelines/typography#customizing-heading-levels"}}>
        {`Typography guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTitleDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
