import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport1 from '../../content/contribute/develop/./developer-flowchart.png';
const pageData = {
  "id": "Develop",
  "section": "contribute",
  "source": "pages-contribute",
  "slug": "/contribute/develop",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/contribute/develop/develop.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"ways-to-contribute","size":"h2","className":"ws-title ws-h2"}}>
      {`Ways to contribute`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As a developer, here are some of the contributions you can make:`}
    </p>
    <AutoLinkHeader {...{"id":"pick-up-an-existing-htmlcss-issue","size":"h3","className":"ws-title ws-h3"}}>
      {`Pick up an existing HTML/CSS issue`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Pick an open issue in the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues"}}>
        {`patternfly repo`}
      </PatternflyThemeLink>
      {` and make a comment that you would like to contribute`}
    </p>
    <AutoLinkHeader {...{"id":"pick-up-an-existing-react-issue","size":"h3","className":"ws-title ws-h3"}}>
      {`Pick up an existing React issue`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Pick an open issue in the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues"}}>
        {`patternfly-react repo`}
      </PatternflyThemeLink>
      {` and make a comment that you would like to contribute`}
    </p>
    <AutoLinkHeader {...{"id":"file-a-bug","size":"h3","className":"ws-title ws-h3"}}>
      {`File a bug`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`View the documentation for the component`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Search open issues in the `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues"}}>
          {`patternfly`}
        </PatternflyThemeLink>
        {` and `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues"}}>
          {`patternfly-react`}
        </PatternflyThemeLink>
        {` repos to see if a related issue exists already`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the bug is present in only the React implementation, create a bug in the `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/issues"}}>
          {`patternfly-react repo`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the bug can be seen on both the React and HTML/CSS side, it should be created on the `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/issues"}}>
          {`patternfly repo`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Mention which project the bug was noticed in and if there is a deadline that the fix is needed for`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"detailed-contribution-instructions","size":"h2","className":"ws-title ws-h2"}}>
      {`Detailed contribution instructions`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly#guidelines-for-css-development"}}>
          {`Core contribution guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/blob/main/CONTRIBUTING.md#contribution-process"}}>
          {`React contribution guidelines`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"lifecycle","size":"h2","className":"ws-title ws-h2"}}>
      {`Lifecycle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport1} width={srcImport1.width} height={srcImport1.height} {...{"alt":"Development contribution lifecycle flowchart","className":"ws-img"}}>
      </img>
    </p>
  </React.Fragment>
);
Component.displayName = 'ContributeDevelopDocs';
Component.pageData = pageData;

export default Component;
