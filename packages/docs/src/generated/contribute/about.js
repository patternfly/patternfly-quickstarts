import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport0 from '../../content/contribute/about/./about-flowchart.png';
const pageData = {
  "id": "About",
  "section": "contribute",
  "source": "pages-contribute",
  "slug": "/contribute/about",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/contribute/about/about.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly open source community depends on contributions to help our design system grow and evolve. We encourage everyone, regardless of background, to make suggestions for enhancements, contribute new design patterns and ideas, help identify bugs in code, and more. With your help, we can stay on top of the latest and greatest implementation solutions.`}
    </p>
    <AutoLinkHeader {...{"id":"patternfly-on-github","size":"h2","className":"ws-title ws-h2"}}>
      {`PatternFly on GitHub`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly has a few repos you can contribute to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly"}}>
          {`patternfly`}
        </PatternflyThemeLink>
        {`: For core HTML and CSS contributions. All component contributions should start in Core.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react"}}>
          {`patternfly-react`}
        </PatternflyThemeLink>
        {`: For React contributions.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org"}}>
          {`patternfly-org`}
        </PatternflyThemeLink>
        {`: For PatternFly website content and design documentation contributions.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"requesting-new-features-and-enhancements","size":"h2","className":"ws-title ws-h2"}}>
      {`Requesting new features and enhancements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly is built on the needs of our community of stakeholders. To request a new feature or an enhancement to an existing feature, the first step is to open a new issue in the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design/issues"}}>
        {`patternfly-design repo`}
      </PatternflyThemeLink>
      {`. Your issue should include the following:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Requirements`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use cases`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Preliminary designs (if available)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Project timelines (dates needed, etc.)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly team will review and prioritize your issue, taking into account scope and technical constraints. If accepted, your feature request will be placed on the `}
      <PatternflyThemeLink {...{"to":"https://github.com/orgs/patternfly/projects/4?fullscreen=true"}}>
        {`PatternFly feature roadmap`}
      </PatternflyThemeLink>
      {` and queued to the PatternFly design backlog. After this, the PatternFly design team will work with you to create a design proposal and facilitate reviews.`}
    </p>
    <AutoLinkHeader {...{"id":"patternfly-feature-lifecycle","size":"h3","className":"ws-title ws-h3"}}>
      {`PatternFly feature lifecycle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport0} width={srcImport0.width} height={srcImport0.height} {...{"alt":"Contribution guide","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"get-help","size":"h2","className":"ws-title ws-h2"}}>
      {`Get help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you run into trouble and need support, the PatternFly team is here to help. Simply go to the `}
      <PatternflyThemeLink {...{"to":"https://forum.patternfly.org/c/support"}}>
        {`PatternFly forum`}
      </PatternflyThemeLink>
      {` and add a new topic to get in touch with us. We'll always do our best to answer your questions and connect you with the right people quickly.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ContributeAboutDocs';
Component.pageData = pageData;

export default Component;
