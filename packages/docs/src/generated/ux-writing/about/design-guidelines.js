import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "About",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/about/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/about.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Welcome to the PatternFly content style guide: a place for UX professionals like you to learn about designing with words.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The words in a user interface, commonly referred to as "UX copy" or "microcopy," are just as important as the components or layouts. UX copy is another element of design, and it can drive better UX decisions and guide users to succeed.`}
    </p>
    <blockquote {...{"className":"ws-blockquote"}}>
      <p {...{"className":"ws-p"}}>
        {`I’ve come to believe that language is one of the most powerful design tools we have.`}
      </p>
    </blockquote>
    <p {...{"className":"ws-p"}}>
      <em>
        {`— `}
        <PatternflyThemeLink {...{"to":"https://open.nytimes.com/to-design-better-products-consider-the-language-f17b923f8bae"}}>
          {`n.k. feinberg, New York Times`}
        </PatternflyThemeLink>
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Anyone involved in UX—researchers, designers, developers, content strategists, and more—can use this guide for building better product experiences with content design and strategy.`}
    </p>
    <AutoLinkHeader {...{"id":"style-guide-goal","size":"h2","className":"ws-title ws-h2"}}>
      {`Style guide goal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As a PatternFly community, our goal with this style guide is to help UX professionals:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Create clarity and consistency across products and applications.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Make products sound more conversational and human.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use written content to create unified, on-brand experiences for all users.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`With that said, we recognize that the `}
      <em>
        {`PatternFly`}
      </em>
      {` way is not the `}
      <em>
        {`only`}
      </em>
      {` way. This guide isn’t meant to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Overrule another style guide.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide a complete list of all writing rules across all channels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Serve as hard requirements that everyone must follow.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"additional-resources","size":"h2","className":"ws-title ws-h2"}}>
      {`Additional resources`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <em>
        {`In cases where advice differs, default to PatternFly if you’re writing for Red Hat interfaces.`}
      </em>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For component-specific microcopy guidance, see the component's `}
        <PatternflyThemeLink {...{"to":"/components/about-modal/design-guidelines"}}>
          {`design guidelines`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For microcopy guidance that’s not included in this guide, see `}
        <PatternflyThemeLink {...{"to":"https://www.carbondesignsystem.com/guidelines/content/overview"}}>
          {`IBM Carbon’s UX content guidelines`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For Red Hat product terminology and documentation standards, see `}
        <PatternflyThemeLink {...{"to":"https://redhat-documentation.github.io/supplementary-style-guide/#introduction"}}>
          {`Red Hat's supplementary style guide for Red Hat product documentation`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For additional terminology guidance, use `}
        <PatternflyThemeLink {...{"to":"https://www.merriam-webster.com/"}}>
          {`Merriam-Webster’s online dictionary`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"contribute","size":"h2","className":"ws-title ws-h2"}}>
      {`Contribute`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In true Flyer fashion, we keep this style guide open. Contribute your ideas through `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org/pulls"}}>
        {`GitHub`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'UxWritingAboutDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
