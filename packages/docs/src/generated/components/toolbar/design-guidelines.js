import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport417 from '../../../content/design-guidelines/components/toolbar/./img/toolbar-spacing.png';
import srcImport418 from '../../../content/design-guidelines/components/toolbar/./img/bulk-selector.png';
import srcImport419 from '../../../content/design-guidelines/components/toolbar/./img/filter-group.png';
import srcImport420 from '../../../content/design-guidelines/components/toolbar/./img/search-filter.png';
import srcImport421 from '../../../content/design-guidelines/components/toolbar/./img/toolbar-multiple-filters.png';
import srcImport422 from '../../../content/design-guidelines/components/toolbar/./img/icon-button-group.png';
import srcImport423 from '../../../content/design-guidelines/components/toolbar/./img/button-group.png';
import srcImport424 from '../../../content/design-guidelines/components/toolbar/./img/overflow-menu.png';
import srcImport425 from '../../../content/design-guidelines/components/toolbar/./img/pagination.png';
import srcImport426 from '../../../content/design-guidelines/components/toolbar/./img/toggle-group.png';
import srcImport427 from '../../../content/design-guidelines/components/toolbar/./img/toolbar-with-divider.png';
import srcImport428 from '../../../content/design-guidelines/components/toolbar/./img/basic-toolbar-items.png';
import srcImport429 from '../../../content/design-guidelines/components/toolbar/./img/basic-toolbar-pagination.png';
import srcImport430 from '../../../content/design-guidelines/components/toolbar/./img/basic-toolbar-icons.png';
import srcImport431 from '../../../content/design-guidelines/components/toolbar/./img/custom-toolbar.png';
import srcImport432 from '../../../content/design-guidelines/components/toolbar/./img/toolbar-layout-cardview.png';
import srcImport433 from '../../../content/design-guidelines/components/toolbar/./img/toolbar-layout.png';
import srcImport434 from '../../../content/design-guidelines/components/toolbar/./img/toolbar-filters-mobile.png';
const pageData = {
  "id": "Toolbar",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/toolbar/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/toolbar/toolbar.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`toolbar`}
      </strong>
      {` allows a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The PatternFly Toolbar component is a flexible layout system that accommodates a variety of configurations that can be adapted to your specific needs.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A toolbar is a container for holding a variety of elements (toolbar items and groups) that are used to manipulate a set of data. All items should be centered vertically within a toolbar.`}
    </p>
    <img src={srcImport417} width={srcImport417.width} height={srcImport417.height} {...{"alt":"basic toolbar with 16px spacing","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Toolbar items are individual components that can be placed inside of a toolbar. Often, it makes sense to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width. The default spacing between items and groups is 16px, but this can be modified, if required. The following are some toolbar items and groups that come with special spacing considerations.`}
    </p>
    <AutoLinkHeader {...{"id":"bulk-selector","size":"h3","className":"ws-title ws-h3"}}>
      {`Bulk selector`}
    </AutoLinkHeader>
    <img src={srcImport418} height={srcImport418.height * 218 / srcImport418.width} {...{"alt":"bulk selector item","width":"218","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A bulk selector can be added when you want to give users the ability to select multiple items within a page. Besides allowing the user to select and deselect all items on a page, other application specific options can be added in the dropdown. Bulk selection allows the user to select or deselect all items on a page and provide an indeterminate state that notifies the user when only some items are selected. Bulk selectors should always be the left-most element in a toolbar and has a 24px spacer to its right.`}
    </p>
    <AutoLinkHeader {...{"id":"filter-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Filter group`}
    </AutoLinkHeader>
    <img src={srcImport419} height={srcImport419.height * 355 / srcImport419.width} {...{"alt":"filter group","width":"355","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A filter group combines multiple select filters into a single group. See `}
      <PatternflyThemeLink {...{"to":"/guidelines/filters"}}>
        {`filters`}
      </PatternflyThemeLink>
      {` for more information about using filter groups.`}
    </p>
    <AutoLinkHeader {...{"id":"search-filter","size":"h3","className":"ws-title ws-h3"}}>
      {`Search filter`}
    </AutoLinkHeader>
    <img src={srcImport420} height={srcImport420.height * 355 / srcImport420.width} {...{"alt":"search filter","width":"355","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A search filter is intended to be used with a filter group as shown below when you want to include a single search field together with one or more select filters. It includes an 8px spacer to the right of the item to enforce association with other filters. See the `}
      <PatternflyThemeLink {...{"to":"/guidelines/filters"}}>
        {`filters`}
      </PatternflyThemeLink>
      {` documentation for more information about using search filters.`}
    </p>
    <img src={srcImport421} width={srcImport421.width} height={srcImport421.height} {...{"alt":"toolbar with a search filter and filter group","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"icon-button-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Icon button group`}
    </AutoLinkHeader>
    <img src={srcImport422} height={srcImport422.height * 303 / srcImport422.width} {...{"alt":"icon button group","width":"303","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Actions or settings that are represented by icons can be added in an icon button group.`}
    </p>
    <AutoLinkHeader {...{"id":"button-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Button group`}
    </AutoLinkHeader>
    <img src={srcImport423} height={srcImport423.height * 205 / srcImport423.width} {...{"alt":"button group","width":"205","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Any global actions that apply to selected data items are included left-aligned following filter and icon buttons. No more than two items should be exposed as buttons. If you have more than two items, use an `}
      <PatternflyThemeLink {...{"to":"#overflow-menu"}}>
        {`overflow menu`}
      </PatternflyThemeLink>
      {` component to save space.`}
    </p>
    <AutoLinkHeader {...{"id":"overflow-menu","size":"h3","className":"ws-title ws-h3"}}>
      {`Overflow menu`}
    </AutoLinkHeader>
    <img src={srcImport424} height={srcImport424.height * 357 / srcImport424.width} {...{"alt":"button group","width":"357","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`An overflow menu is a component that can be used in a toolbar (or elsewhere) to group a number of actions that should be collapsed into a kebab at a certain breakpoint. In the toolbar, the overflow menu will commonly be used to group a set of actions that are intended to collapse into the kebab at smaller viewport sizes.`}
    </p>
    <AutoLinkHeader {...{"id":"pagination","size":"h3","className":"ws-title ws-h3"}}>
      {`Pagination`}
    </AutoLinkHeader>
    <img src={srcImport425} height={srcImport425.height * 432 / srcImport425.width} {...{"alt":"pagination","width":"432","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When pagination is supported, a pagination component will be included. Pagination will always be right aligned in the toolbar. If pagination is not used, substitute the item count for pagination control. For example, report “17 items” to represent the total number of items or “10 of 17 items” to indicate that 10 items were returned as the result of a filter event.`}
    </p>
    <AutoLinkHeader {...{"id":"toolbar-toggle-groups","size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar toggle groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/html#toggle-group"}}>
        {`toolbar toggle group`}
      </PatternflyThemeLink>
      {` can be used when you want to collapse a set of items into an overlay panel at a certain breakpoint for mobile applications. This allows complex toolbars with multiple items and groups of items to be responsive. A toolbar toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel that can be toggled by clicking the filter icon.`}
    </p>
    <img src={srcImport426} height={srcImport426.height * 514 / srcImport426.width} {...{"alt":"toolbar with filters hidden in a toggle group","width":"514","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Note: this should not be confused with the `}
      <PatternflyThemeLink {...{"to":"/components/toggle-group"}}>
        {`toggle group component`}
      </PatternflyThemeLink>
      {` that is used for selecting between options on a page.`}
    </p>
    <AutoLinkHeader {...{"id":"vertical-dividers","size":"h3","className":"ws-title ws-h3"}}>
      {`Vertical dividers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you have a large toolbar containing many groups of items, use a vertical divider to further separate the groups visually.`}
    </p>
    <img src={srcImport427} width={srcImport427.width} height={srcImport427.height} {...{"alt":"toolbar with divider","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly toolbar is designed to be very flexible and allow a variety of combinations of items and groups as outlined above. When laying out your toolbar, be sure to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Align bulk selection as the left-most element, if used.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Align filters and global actions to the right of bulk selection, if used.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Align pagination as the right-most element, if used.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Align the item count as the right-most element, if pagination isn't used.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"examples","size":"h3","className":"ws-title ws-h3"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Basic toolbar`}
      </strong>
      {`
`}
      <img src={srcImport428} width={srcImport428.width} height={srcImport428.height} {...{"alt":"toolbar with standard items","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The basic toolbar is sufficient for most cases. The example above shows the toolbar with default spacing. It includes the following elements:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Bulk selector:`}
        </strong>
        {` The bulk selector supports selection of multiple items in a list, table, or card grid. It is always the leftmost item.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter:`}
        </strong>
        {` The example shows an attribute-value filter, but any supported filter can be used here. See `}
        <PatternflyThemeLink {...{"to":"/guidelines/filters"}}>
          {`filters`}
        </PatternflyThemeLink>
        {` usage guidelines for more information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow menu:`}
        </strong>
        {` In this example an overflow menu is used to hold global actions. But a simple button group could also be used here if you have two or less actions.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Item count`}
        </strong>
        {`: When a filter is applied, the item count will be updated to represent the filtered subset of items. For example, “10 of 17 items.” The item count should be the right-most element.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Toolbar with pagination`}
      </strong>
      {`
`}
      <img src={srcImport429} width={srcImport429.width} height={srcImport429.height} {...{"alt":"basic toolbar with pagination","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`When pagination is used, the pagination component replaces the item count. It should be the right-most element. Here, the toolbar is shown with both full and compact pagination options. Compact pagination consumes less horizontal space and is the recommended choice unless your application requires more precise control over paging options (like the ability to navigate to a specific page).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Toolbar with an icon group`}
      </strong>
      {`
`}
      <img src={srcImport430} width={srcImport430.width} height={srcImport430.height} {...{"alt":"basic toolbar with an icon group","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`To save space, you may represent some actions as icons. Use an icon group to provide the proper spacing between icons. Here, sort and export actions are represented as icons. The icon group should always be placed after the filters and before any global actions represented by buttons, if they exist.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Custom toolbar`}
      </strong>
      {`
`}
      <img src={srcImport431} width={srcImport431.width} height={srcImport431.height} {...{"alt":"custom toolbar layout","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The Toolbar component is extremely flexible and you can create custom toolbar layouts by working with items, groups, and spacers. Here, a custom toolbar with three labeled filters is created by paring a text label and a Select component. Items are spaced by 16px by default but here the spacing to the right of each Select filter has been modified to 24px to help better group each filter with its related label.`}
    </p>
    <AutoLinkHeader {...{"id":"placement-in-a-page","size":"h3","className":"ws-title ws-h3"}}>
      {`Placement in a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The toolbar should live as close to possible to the content it controls. For a card view or similar views, the toolbar should be placed inside of the page header. This arrangement is also recommended if the user may switch between views (e.g. view as cards or as a list). You may optionally apply the `}
      <code {...{"className":"ws-code"}}>
        {`pf-m-sticky-top`}
      </code>
      {` modifier to the header section to create a sticky toolbar and prevent it from scrolling off the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport432} width={srcImport432.width} height={srcImport432.height} {...{"alt":"toolbar in page header","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`For list and table views that are placed inside of an enclosing card, the toolbar should always be placed inside the card and above the data set to which it applies.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport433} width={srcImport433.width} height={srcImport433.height} {...{"alt":"layout","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Toolbars should stretch to the width of the enclosing container, with the elements aligned in a horizontal row. There should be no spacers on the left and right edges of the toolbar as the toolbar provides its own padding.`}
    </p>
    <AutoLinkHeader {...{"id":"the-toolbar-on-mobile","size":"h2","className":"ws-title ws-h2"}}>
      {`The toolbar on mobile`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The toolbar adapts to smaller viewport sizes by collapsing or hiding elements that take significant space, including filters and actions. On mobile devices, when used, pagination will be available from the footer, only. When designing toolbars to be responsive:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Place filter controls in a `}
        <PatternflyThemeLink {...{"to":"#toggle-groups"}}>
          {`toggle group`}
        </PatternflyThemeLink>
        {` so they will be hidden in a collapsible panel at mobile breakpoints.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use an `}
        <PatternflyThemeLink {...{"to":"#overflow-menu"}}>
          {`overflow menu`}
        </PatternflyThemeLink>
        {` to collapse actions into a kabob menu.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The following is an example of a complex toolbar optimized for mobile.`}
    </p>
    <img src={srcImport434} width={srcImport434.width} height={srcImport434.height} {...{"alt":"toolbar with filters and actions hidden on mobile","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Here, the search filter and filter group containing three drop-down filters are placed in a toggle group that collapsed when the screen shrinks to mobile size. The two action buttons are part of an overflow menu that collapses to a single kabob menu. The bulk selector and sort icon button are implemented as toolbar items that remain visible at all breakpoints.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsToolbarDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
