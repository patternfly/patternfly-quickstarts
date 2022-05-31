import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport324 from '../../../content/design-guidelines/components/page/./img/page-vertical-nav.png';
import srcImport325 from '../../../content/design-guidelines/components/page/./img/page-horizontal-nav.png';
const pageData = {
  "id": "Page",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/page/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/page/page.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <strong>
        {`page`}
      </strong>
      {` component is used to define the basic layout of a page with either vertical or horizontal navigation.`}
    </p>
    <AutoLinkHeader {...{"id":"basic-layouts","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic layouts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly includes a flexible layout system for defining pages. Page layouts are defined using page sections as explained below. While the layout system is flexible, you should adhere to the guidelines for common elements like the masthead and page header to maintain consistency across applications.`}
    </p>
    <AutoLinkHeader {...{"id":"page-sections","size":"h3","className":"ws-title ws-h3"}}>
      {`Page sections`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Page sections allow you to define areas on a page to group content. The header, body, and footer on a page are examples of page sections. Page sections have 24px padding on left and right edges or no padding to allow the contents to extend to the edge of a page. At screen sizes smaller than 1200px, the left/right padding is reduced to 16px to create a tighter layout. Page sections can also be made sticky such that they will remain visible at the top or bottom of the viewport when the page scrolls. This is useful for creating sticky headers, footers, or other elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The basic layout of a page differs depending on whether your application uses vertical or horizontal primary navigation as illustrated below.`}
    </p>
    <AutoLinkHeader {...{"id":"page-with-vertical-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Page with vertical navigation`}
    </AutoLinkHeader>
    <img src={srcImport324} height={srcImport324.height * 832 / srcImport324.width} {...{"alt":"page with vertical navigation","width":"832","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Masthead:`}
      </strong>
      {` The masthead provides a consistent header for every page in your application. See the `}
      <PatternflyThemeLink {...{"to":"/components/masthead/design-guidelines"}}>
        {`masthead design guidelines`}
      </PatternflyThemeLink>
      {` for more details.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Navigation:`}
      </strong>
      {` This is your primary navigation. It should be consistent across pages. See the `}
      <PatternflyThemeLink {...{"to":"/components/navigation/design-guidelines"}}>
        {`navigation design guidelines`}
      </PatternflyThemeLink>
      {` for more information about navigation options and usage.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3. Breadcrumb (optional):`}
      </strong>
      {` When breadcrumbs are included, they should be the topmost element in the header section. When breadcrumbs are included on a page, the top padding is reduced from 24px to 16px. See the `}
      <PatternflyThemeLink {...{"to":"/components/breadcrumb/design-guidelines"}}>
        {`breadcrumb design guidelines`}
      </PatternflyThemeLink>
      {` for more information about breadcrumb usage.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`4. Page header:`}
      </strong>
      {` All pages should have a header section. The height of the header will vary to fit the content. We recommend keeping information in the header area brief to consume as little space as possible. The page header should contain the page title to help orient the user and an optional description to describe the contents of the page. You may optionally apply the `}
      <code {...{"className":"ws-code"}}>
        {`pf-m-sticky-top`}
      </code>
      {` modifier to the header section to create a sticky page header and prevent its content from scrolling off the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`5. Body section:`}
      </strong>
      {` Your main page content goes here. The body section can have a light gray `}
      <code {...{"className":"ws-code"}}>
        {`--pf-global--BackgroundColor--200`}
      </code>
      {` or white background depending on the content it will contain. The default padding all around the page body should be 24px in all directions.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`6. Footer section (optional):`}
      </strong>
      {` You can optionally define a footer section for a page. You may optionally apply the `}
      <code {...{"className":"ws-code"}}>
        {`pf-m-sticky-bottom`}
      </code>
      {` modifier to the footer section to create a sticky page footer and prevent its content from scrolling off the page.`}
    </p>
    <AutoLinkHeader {...{"id":"page-with-horizontal-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Page with horizontal navigation`}
    </AutoLinkHeader>
    <img src={srcImport325} height={srcImport325.height * 832 / srcImport325.width} {...{"alt":"page with horizontal navigation","width":"832","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When using a horizontal primary navigation, the left-hand sidebar is removed and the navigation is placed inline with other masthead elements. All other page elements remain the same.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsPageDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
