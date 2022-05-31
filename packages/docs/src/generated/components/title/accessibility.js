import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Title",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/title/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/title/title.md"
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
      {` component applies top and bottom margins, font-weight, font-size, and line-height to titles.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should not be able to reach a title using `}
      <strong>
        {`Tab`}
      </strong>
      {`, as titles are not interactive.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the title and read its text. Titles should be clear, descriptive, and make sense out of context (such as when a screen reader navigates by headings).`}
    </p>
    <AutoLinkHeader {...{"id":"to-make-title-accessible","size":"h2","className":"ws-title ws-h2"}}>
      {`To make title accessible:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Choose appropriate headings to indicate sections and subsections of content rather than choosing heading levels for their formatting. A common practice is to use a single `}
        <strong>
          {`h1`}
        </strong>
        {` for the primary headline or logo on a page, `}
        <strong>
          {`h2`}
        </strong>
        {`s to designate major sections, and `}
        <strong>
          {`h3`}
        </strong>
        {`s for supporting subsections.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsTitleAccessibilityDocs';
Component.pageData = pageData;

export default Component;
