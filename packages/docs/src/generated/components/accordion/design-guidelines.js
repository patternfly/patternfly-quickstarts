import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport35 from '../../../content/design-guidelines/components/accordion/./img/single_expand_a.png';
import srcImport36 from '../../../content/design-guidelines/components/accordion/./img/single_expand_b.png';
import srcImport37 from '../../../content/design-guidelines/components/accordion/./img/multi_expand.png';
const pageData = {
  "id": "Accordion",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/accordion/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/accordion/accordion.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`accordion`}
      </strong>
      {` is an interactive container that expands and collapses to hide or reveal the nested content. It takes advantage of progressive disclosure to help reduce page scrolling by allowing users to choose to show or hide more detailed information as needed.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Accordions are one of many ways to handle large amounts of content. They are useful when you have a large amount of content, but limited space, with the header title giving an overview of the content that is hidden underneath it. Users can click or tap on the collapsed accordion to expand the content area and view additional details. Due to their high interaction cost, we recommend that you use them sparingly when you need an additional layer of structure to your content.`}
    </p>
    <AutoLinkHeader {...{"id":"single-expand-behavior","size":"h2","className":"ws-title ws-h2"}}>
      {`Single expand behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This pattern is used to bring focus to a single row at a time. It is ideal for content that is mutually exclusive and does not need to be shown all at once. Whenever a new row is expanded, the previous one closes. Another benefit of this is real-estate management.`}
    </p>
    <AutoLinkHeader {...{"id":"use-case","size":"h3","className":"ws-title ws-h3"}}>
      {`Use case`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Depending on the content, it can be useful to only expose users to one section at a time. This is particularly useful when working with forms. By default the first row is always open with all the others closed. Users can choose to close all rows, but only one can be opened at once.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h3","className":"ws-title ws-h3"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This variant is mostly used with navigation and sub-navigation.`}
    </p>
    <img src={srcImport35} width={srcImport35.width} height={srcImport35.height} {...{"alt":"Accordion single expand behavior","className":"ws-img"}}>
    </img>
    <img src={srcImport36} width={srcImport36.width} height={srcImport36.height} {...{"alt":"Accordion single expand behavior","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Header:`}
        </strong>
        {` Interactive link that expands or collapses to reveal the nested content.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Summary descriptions of the nested content.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content panel:`}
        </strong>
        {` Area that holds the information associated with the header.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"multiple-expand-behavior","size":"h2","className":"ws-title ws-h2"}}>
      {`Multiple expand behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This pattern gives users the ability to open multiple rows at a time. It keeps the content always available and each row expands or closes per user interaction.`}
    </p>
    <AutoLinkHeader {...{"id":"use-case-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Use case`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The accordion is used not only to help shorten the page length, but also provides a grouping structure with a summary headline for each section. Users can still choose to expand all rows to display the additional information.`}
    </p>
    <AutoLinkHeader {...{"id":"examples-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Some common use cases include using an accordion in the FAQ section and product comparison.`}
    </p>
    <img src={srcImport37} width={srcImport37.width} height={srcImport37.height} {...{"alt":"Accordion multi-expand behavior","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"accessibility","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When implementing this component, consider the following guidance to ensure that it is `}
            <a href="https://www.section508.gov/">{`508 compliant`}</a>
      {`.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Use unique and descriptive labels for each header bar. This allows both sighted users and those with assitive technologies to quickly scan through the content, without having to expand individual panels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid adding complex interaction to the accordion. This can often cause loops or traps that prevent users from efficiently navigating the content using a keyboard.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ComponentsAccordionDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
