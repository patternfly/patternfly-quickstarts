import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport249 from '../../../content/design-guidelines/components/jump-link/./img/jump-elements.png';
import srcImport250 from '../../../content/design-guidelines/components/jump-link/./img/jump-horizontal.png';
import srcImport251 from '../../../content/design-guidelines/components/jump-link/./img/jump-vertical.png';
import srcImport252 from '../../../content/design-guidelines/components/jump-link/./img/jump-subsection.png';
import srcImport253 from '../../../content/design-guidelines/components/jump-link/./img/jump-mobile.png';
const pageData = {
  "id": "Jump links",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/jump-links/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/jump-link/jump-link.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Jump links`}
      </strong>
      {` allow users to navigate to sections within a page.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Jump links provide a way to navigate through section headings on a page without scrolling. The highlighted active section changes as the user scrolls to the next section.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport249} height={srcImport249.height * 249 / srcImport249.width} {...{"alt":"Elements of a jump link","width":"249","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Active section:`}
          </strong>
          {` current section of the page the user is on.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Inactive section:`}
          </strong>
          {` other sections of the page that the user is not currently on. Clicking on an inactive section will bring the user to the selected section and make the section active.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Jump links can be displayed either horizontally or vertically. They can include optional subsections.`}
    </p>
    <AutoLinkHeader {...{"id":"horizontal-jump-links","size":"h3","className":"ws-title ws-h3"}}>
      {`Horizontal jump links`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As the user scrolls down the page, the active sections are highlighted from left to right. A jump link can be displayed left aligned or center aligned and with an optional label.`}
    </p>
    <img src={srcImport250} height={srcImport250.height * 800 / srcImport250.width} {...{"alt":"Example of horizontal jump link","width":"800","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"vertical-jump-links","size":"h3","className":"ws-title ws-h3"}}>
      {`Vertical jump links`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As the user scrolls down the page, the active sections are highlighted from top to bottom.`}
    </p>
    <img src={srcImport251} height={srcImport251.height * 800 / srcImport251.width} {...{"alt":"Example of vertical jump link","width":"800","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"jump-links-with-subsections","size":"h3","className":"ws-title ws-h3"}}>
      {`Jump links with subsections`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If the page has subsections, they are shown as indented jump links under the parent section. Subsections can be individually selected.`}
    </p>
    <img src={srcImport252} height={srcImport252.height * 800 / srcImport252.width} {...{"alt":"Example of jump links with subsections","width":"800","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"jump-links-on-mobile","size":"h3","className":"ws-title ws-h3"}}>
      {`Jump links on mobile`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`On smaller screen sizes, jump links collapse into an expandable component that is shown above the content. This component can be expanded to display the jump links.`}
    </p>
    <img src={srcImport253} height={srcImport253.height * 800 / srcImport253.width} {...{"alt":"Example jump link in a mobile format","width":"800","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsJumpLinksDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
