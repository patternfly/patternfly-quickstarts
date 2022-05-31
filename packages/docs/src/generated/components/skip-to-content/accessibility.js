import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Skip to content",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/skip-to-content/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/skip-to-content/skip-to-content.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`skip to content`}
      </strong>
      {` is a component that allows screen reader and keyboard users to bypass navigation rather than tabbing through it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to find the skip to content using `}
      <strong>
        {`Tab`}
      </strong>
      {` at the start of a page with navigation. They should be able to select the skip to content using `}
      <strong>
        {`Enter`}
      </strong>
      {`. A skip to content does not trap tab focus. It is the first tabbable element on a page, but can be tabbed past and into the navigation of a page if the user prefers.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should also be able to navigate to skip to content using `}
      <strong>
        {`Tab`}
      </strong>
      {` and select it to skip past the navigation of a page.`}
    </p>
    <AutoLinkHeader {...{"id":"to-make-skip-to-content-accessible","size":"h2","className":"ws-title ws-h2"}}>
      {`To make skip to content accessible:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Ensure that the skip to content href is properly linked to the main content of the page. You may have to add context to the href if there are any query parameters in the URL.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you're using the page component with the skip to content, we add a tabindex="-1" for you. If you are using the skip to content on its own, give the target of the skip to content link a tabindex of -1. Some browsers require this attribute to make this component work consistently.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsSkipToContentAccessibilityDocs';
Component.pageData = pageData;

export default Component;
