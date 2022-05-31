import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport67 from '../../../content/design-guidelines/components/breadcrumb/./img/breadcrumb.png';
import srcImport68 from '../../../content/design-guidelines/components/breadcrumb/./img/placement.png';
const pageData = {
  "id": "Breadcrumb",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/breadcrumb/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/breadcrumb/breadcrumb.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`breadcrumb`}
      </strong>
      {` provides page context to help users navigate more efficiently and understand where they are in the application hierarchy.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <img src={srcImport67} height={srcImport67.height * 990 / srcImport67.width} {...{"alt":"Example of breadcrumbs","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use breadcrumbs in addition to your global navigation to display a user's location in the application.`}
    </p>
    <AutoLinkHeader {...{"id":"guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`Guidelines`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use breadcrumbs when the primary global navigation items are not always exposed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Never use breadcrumbs as a replacement for global navigation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Breadcrumbs in PatternFly are intended to show the location of a page in the site hierarchy, and are `}
        <strong>
          {`not intended to map the user's path through the application`}
        </strong>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"placement","size":"h3","className":"ws-title ws-h3"}}>
      {`Placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Breadcrumbs should be placed underneath the masthead, at the top of the page. There should be 16px of padding both between the breadcrumb and the masthead, and between the breadcrumbs and anything that comes below.`}
    </p>
    <img src={srcImport68} height={srcImport68.height * 825 / srcImport68.width} {...{"alt":"Placement of breadcrumbs and padding","width":"825","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsBreadcrumbDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
