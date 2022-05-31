import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Skeleton",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/skeleton/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/skeleton/skeleton.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`skeleton`}
      </strong>
      {` is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/progress"}}>
        {`progress bar`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For sighted users, they are able to see that there is loading content and no other action is needed until loading completes. Likewise, there is nothing that needs to be added for keyboard users.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For users who rely on assistive technology, skeleton’s visual representation of a loading state won’t be accessible without additional labeling.`}
    </p>
    <br/>
    <ins>
      <strong>
        {`To make skeleton accessible:`}
      </strong>
</ins>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Add the `}
        <code {...{"className":"ws-code"}}>
          {`screenreaderText`}
        </code>
        {` prop and add a message for assistive technology (Example: `}
        <code {...{"className":"ws-code"}}>
          {`screenreaderText=”Loading contents”`}
        </code>
        {`).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If multiple skeletons exist on a screen, you likely only need to add the `}
        <code {...{"className":"ws-code"}}>
          {`screenreaderText`}
        </code>
        {` prop to one of them.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsSkeletonAccessibilityDocs';
Component.pageData = pageData;

export default Component;
