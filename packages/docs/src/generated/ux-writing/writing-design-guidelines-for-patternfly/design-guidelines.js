import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport467 from '../../../content/design-guidelines/content/./img/desguidelines1.png';
import srcImport468 from '../../../content/design-guidelines/content/./img/desguidelines2.png';
import srcImport469 from '../../../content/design-guidelines/content/./img/desguidelines3.png';
const pageData = {
  "id": "Writing design guidelines for PatternFly",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/writing-design-guidelines-for-patternfly/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/writing-design-documentation.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Design guidelines walk through building design patterns with PatternFly. This page focuses on how to write clear and consistent design documentation. To learn how to contribute design guidelines, see our `}
      <PatternflyThemeLink {...{"to":"/contribute/design-guidelines/"}}>
        {`contribution guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"content-architecture","size":"h2","className":"ws-title ws-h2"}}>
      {`Content architecture`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use headings, hierarchy, formatting, and lists to organize your design guidelines into digestible sections.`}
    </p>
    <AutoLinkHeader {...{"id":"headings","size":"h3","className":"ws-title ws-h3"}}>
      {`Headings`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use headings to divide your content into topic-specific sections for easy navigation. Effective headings are:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Structured around users' main goals.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Front-loaded with descriptors for easy scanning.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Attentive to parallel structure.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Written in sentence case.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Headings should cascade levels without skipping––always progress from level to level, H1 to H2 to H3. Put your headings in H2 and subheadings in H3. If more sections appear beneath your subheading, style them in H4.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport467} width={srcImport467.width} height={srcImport467.height} {...{"alt":"An example of how different headings cascade in design documentation. We removed the body copy between them for easy comparison between levels. It reads: \"Menu (H1), Vertical navigation (H2), When to use (H3).\"","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"formatting","size":"h2","className":"ws-title ws-h2"}}>
      {`Formatting`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"capitalization","size":"h3","className":"ws-title ws-h3"}}>
      {`Capitalization`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/capitalization/"}}>
        {`capitalization style guidelines`}
      </PatternflyThemeLink>
      {` outline best practices for capitalization across PatternFly.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Always write headings in sentence case. Write component names in lowercase.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`"Usage guidelines for card views"`}
    </p>
    <AutoLinkHeader {...{"id":"bolds-and-italics","size":"h3","className":"ws-title ws-h3"}}>
      {`Bolds and italics`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Bold`}
      </strong>
      {` component names when you first introduce them.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: A `}
      <strong>
        {`card`}
      </strong>
      {` is a square or rectangle container of related information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Italicize`}
      </em>
      {` words for emphasis, but do so sparingly.`}
    </p>
    <AutoLinkHeader {...{"id":"lists","size":"h3","className":"ws-title ws-h3"}}>
      {`Lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Lists package long, complex content into shorter, scannable sections. Use lists to introduce use cases, exceptions, and procedures.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When building lists, follow these best practices:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use bullets by default. Only use numbers if the order of items is important, like in a callout list.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Introduce your list with a clause or phrase that describes the information it shares.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Start each item with a capital letter.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`End list items with a period if they're sentences, or if they form a full sentence when combined with the clause/phrase that introduces the list.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Maintain parallel structure. Start every list item with the same part of speech. (Each item of this list starts with a verb.)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"images","size":"h2","className":"ws-title ws-h2"}}>
      {`Images`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Design documentation includes images to contextualize elements in a UI and demonstrate them in action. All images should include alt text for accessibility.`}
    </p>
    <AutoLinkHeader {...{"id":"annotations","size":"h3","className":"ws-title ws-h3"}}>
      {`Annotations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Callouts demonstrate your design in action by highlighting specific areas in an image.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use numbered callouts to call out multiple areas in your image, then use a corresponding numbered list to explain each one.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport468} width={srcImport468.width} height={srcImport468.height} {...{"alt":"Two callouts highlight multiple items on a toolbar.","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` Allows the user to select the item count (number of listed items) per page, as seen in full pagination`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Compact pager:`}
      </strong>
      {` Supplies the user with page-back and page-next controls only`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Avoid using a callout to highlight a single item, unless you're pointing out a small part of a large view, or the item isn't clearly shown in your image. Use a blank, unnumbered callout to mark the area, then bold it in your explanation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport469} width={srcImport469.width} height={srcImport469.height} {...{"alt":"#A single callout highlights the login button on a large screen.","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Always write your `}
      <strong>
        {`login button`}
      </strong>
      {` as two words: "Log in."`}
    </p>
    <AutoLinkHeader {...{"id":"style-voice-and-tone","size":"h2","className":"ws-title ws-h2"}}>
      {`Style, voice, and tone`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly's documentation is friendly and instructional. Learn more about voice in our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/brand-voice-and-tone/"}}>
        {`brand voice and tone section`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When writing design guidelines, use:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Present tense.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Second-person point of view ("you").`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Active voice, unless you're using passive voice for emphasis.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Direct language and sentence structure.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Full words to introduce examples, instead of their abbreviations ("for example" instead of "e.g."), as seen on our `}
        <PatternflyThemeLink {...{"to":"/ux-writing/terminology/"}}>
          {`terms list`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Descriptive language instead of directional language (up, down, left, right) to refer to elements in your document.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Descriptive hyperlinks (not "click here").`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`If you're linking to other PatternFly pages, use relative URLs instead of full URLs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Relative URL: /components/tooltip/design-guidelines
Full URL: `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/tooltip/design-guidelines"}}>
        {`https://www.patternfly.org/v4/components/tooltip/design-guidelines`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"design-guidelines-template","size":"h2","className":"ws-title ws-h2"}}>
      {`Design guidelines template`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use this template as a guide to structure your document. Depending on your content, you might have different sections and headings.`}
    </p>
    <AutoLinkHeader {...{"id":"design-guideline-name","size":"h3","className":"ws-title ws-h3"}}>
      {`Design guideline name`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Title your page with your component or pattern name. Begin with a short 1-2 sentence description or definition of the design problem, topic, or function addressed in your document.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`"`}
      <strong>
        {`Pagination`}
      </strong>
      {` splits data across multiple pages, typically within a table, list, or card view. If you use infinite scrolling, you don't need to use pagination."`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h3","className":"ws-title ws-h3"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Introduce your component and the primary elements that compose it. List them and include explanatory copy for each one.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Inform your readers about how and when to use this component or pattern. Include an explanation of the problems it solves along with the variations and best practices PatternFly users should be aware of when applying it in their designs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This section might have subheadings that give further details about using your component in context.`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h3","className":"ws-title ws-h3"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Provide guidance for writing content that might appear in your component or pattern. This content section, if applicable, demonstrates how general terminology and wording best practices carry over to component-specific guidelines.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Content guidance includes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Editorial guidelines for labeling and message text.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Length restrictions and what to do when text overflows.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Localization considerations.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'UxWritingWritingDesignGuidelinesForPatternflyDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
