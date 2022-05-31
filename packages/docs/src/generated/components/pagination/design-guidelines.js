import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport326 from '../../../content/design-guidelines/components/pagination/./img/full-page.png';
import srcImport327 from '../../../content/design-guidelines/components/pagination/./img/full-pagination.png';
import srcImport328 from '../../../content/design-guidelines/components/pagination/./img/mobile-pagination.png';
import srcImport329 from '../../../content/design-guidelines/components/pagination/./img/compact-pagination.png';
import srcImport330 from '../../../content/design-guidelines/components/pagination/./img/indeterminate-pagination.png';
const pageData = {
  "id": "Pagination",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/pagination/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/pagination/pagination.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`pagination`}
      </strong>
      {` component gives users more navigational capability on pages with content views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Add pagination above and below content views so that users can easily navigate as they read through listed items on a page.`}
    </p>
    <img src={srcImport326} width={srcImport326.width} height={srcImport326.height} {...{"alt":"Example of pagination on full page table","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Top pagination:`}
      </strong>
      {` Always right-align pagination in the top toolbar, above content views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Bottom pagination:`}
      </strong>
      {` Right-align pagination below content views, too. If you want the bottom pagination to be sticky so it does not scroll off the page when the content is taller that the viewport, place the pagination in a footer page section and apply the `}
      <code {...{"className":"ws-code"}}>
        {`pf-m-sticky-bottom`}
      </code>
      {` modifier section to create a sticky page footer.`}
    </p>
    <AutoLinkHeader {...{"id":"full-pagination","size":"h2","className":"ws-title ws-h2"}}>
      {`Full pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use full pagination unless you're restricted to a narrow workspace, then use `}
            <a href="#compact-pagination">{`compact pagination`}</a>
      {`. Full pagination occupies more toolbar territory, so you'll have limited room for other items like bulk selectors, buttons, filters, or input fields.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines#overflow-menu"}}>
        {`Overflow menus`}
      </PatternflyThemeLink>
      {` allow you to incorporate these toolbar actions using less horizontal space. Toolbar actions automatically form into an overflow menu at specific breaking points. Learn how to customize these breakpoints in our `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
        {`Toolbar`}
      </PatternflyThemeLink>
      {` documentation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Desktop and mobile views connect with the same breakpoint specifications. On mobile, full pagination condenses to an item count. As a toolbar item, you can add and keep the item count in two ways: in both desktop and mobile views, or just in mobile view.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Desktop full pagination in toolbar`}
    </p>
    <img src={srcImport327} width={srcImport327.width} height={srcImport327.height} {...{"alt":"Example of full pagination","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` Allows the user to select the item count (number of listed items) per page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Full pager:`}
      </strong>
      {` Supplies all necessary pagination options including page-back and page-forward, page-first and page-last, and a manual option to type in a desired page number.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Mobile full pagination in toolbar`}
    </p>
    <img src={srcImport328} height={srcImport328.height * 375 / srcImport328.width} {...{"alt":"Example of pagination on mobile table view","width":"375","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` At this screen size, the top toolbar only shows the item count to indicate items currently in view. It hides all other pagination controls.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Full pager:`}
      </strong>
      {` Supplies the same pagination options as the desktop full pager, but in the bottom toolbar.`}
    </p>
    <AutoLinkHeader {...{"id":"compact-pagination","size":"h2","className":"ws-title ws-h2"}}>
      {`Compact pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Compact pagination fits more actions into top toolbars with limited space. Choose this compact variation when your top toolbar contains many items or looks overcrowded. As with full pagination, the compact variation condenses to an item count for mobile views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Desktop compact pagination in toolbar`}
    </p>
    <img src={srcImport329} width={srcImport329.width} height={srcImport329.height} {...{"alt":"Example of compact pagination","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` Allows the user to select the item count (number of listed items) per page, as seen in full pagination.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Compact pager:`}
      </strong>
      {` Supplies the user with page-back and page-next controls only.`}
    </p>
    <AutoLinkHeader {...{"id":"indeterminate-pagination","size":"h2","className":"ws-title ws-h2"}}>
      {`Indeterminate pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use indeterminate pagination if it’s difficult to calculate the total number of items or page count upfront. In these cases, you may use “many” instead of the usual page count that would appear.`}
    </p>
    <img src={srcImport330} height={srcImport330.height * 446 / srcImport330.width} {...{"alt":"Indeterminate pagination","width":"446","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The text indicator provides the user with a control that displays indeterminate page count or items.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsPaginationDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
