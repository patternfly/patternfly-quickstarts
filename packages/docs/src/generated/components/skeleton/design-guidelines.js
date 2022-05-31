import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Skeleton",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/skeleton/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/skeleton/skeleton.md"
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
      <PatternflyThemeLink {...{"to":"/components/progress/react"}}>
        {`progress bar`}
      </PatternflyThemeLink>
      {` in place of a skeleton.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Skeleton loading should be progressive –– it should load static text first, followed by variable elements of the UI.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-a-skeleton-vs.-a-loading-spinner","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use a skeleton vs. a loading spinner`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Show a skeleton when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You know what the populated data is going to look like (even if it results in an empty state).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Show a `}
        <PatternflyThemeLink {...{"to":"/components/spinner/react"}}>
          {`spinner`}
        </PatternflyThemeLink>
        {` when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You do not know what the populated data may look like. For example, if you are loading a form (as they are not all structured the same).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When it is likely it will fail or show an empty state while waiting for actions to complete.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsSkeletonDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
