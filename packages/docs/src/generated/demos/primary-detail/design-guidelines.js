import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport501 from '../../../content/design-guidelines/demos/primary-detail/./img/floating-drawer.png';
import srcImport502 from '../../../content/design-guidelines/demos/primary-detail/./img/primary-detail-card-view.png';
import srcImport503 from '../../../content/design-guidelines/demos/primary-detail/./img/primary-detail-card-data-list.png';
import srcImport504 from '../../../content/design-guidelines/demos/primary-detail/./img/card-view-mobile-layout.png';
import srcImport505 from '../../../content/design-guidelines/demos/primary-detail/./img/side-by-side-mobile.png';
import srcImport506 from '../../../content/design-guidelines/demos/primary-detail/./img/primary-detail-bulk-selection.png';
import srcImport507 from '../../../content/design-guidelines/demos/primary-detail/./img/splitter-primary-detail.png';
const pageData = {
  "id": "Primary-detail",
  "section": "demos",
  "source": "design-guidelines",
  "slug": "/demos/primary-detail/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/demos/primary-detail/primary-detail.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`primary-detail layout`}
      </strong>
      {` is an interface that shows a list of items and the corresponding details of the selected item.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A primary component sits in a container on the page, and detail components typically live in a slide-out `}
      <PatternflyThemeLink {...{"to":"/components/drawer/react"}}>
        {`drawer`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport501} height={srcImport501.height * 990 / srcImport501.width} {...{"alt":"floating drawer with overview details","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When the page content has a white background, the drawer can be placed on the same level as the primary content with a divider line. Alternatively, the drawer can be elevated on top of the primary content. We recommend having a title in the drawer that relates back to the selected primary item.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Common primary components:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Data list*`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Data table*`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Card view *`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Simple list/light nav`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`*Any of the above may have associated toolbars. A toolbar can be placed in the card header of a component in the primary, but it may need to be placed in a page header if there is a card view or if there is the ability to switch between views (and/or toggle open and close the details drawer).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Common detail components:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Markdown text form or code editor`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Description list`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Charts or graphs`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Input forms`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Text`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"characteristics-of-a-primary-detail-layout","size":"h2","className":"ws-title ws-h2"}}>
      {`Characteristics of a primary-detail layout`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports a side-by-side view of a primary element on the left and a detail element on the right. The component in the primary pane is used to control the information shown in the details pane.`}
    </p>
    <img src={srcImport502} height={srcImport502.height * 990 / srcImport502.width} {...{"alt":"primary-detail with card view","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Primary-detail containers can begin below a page header. The width of the primary and detail panes can vary based on the amount and type of content they display. Typically the panes are in halves, thirds, or quarters of the view port. The height of the details pane is 100% of the primary container.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A primary-detail layout usually takes up the full page, but it can be placed in a card for certain use cases. We suggest placing a primary-detail layout in a card when you’re using a simple navigation or data list and the details pane is always open. A drop shadow on the details pane is not recommended in this view.`}
    </p>
    <img src={srcImport503} height={srcImport503.height * 990 / srcImport503.width} {...{"alt":"primary-detail with card data list","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-primary-detail-layouts","size":"h2","className":"ws-title ws-h2"}}>
      {`When to use primary-detail layouts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a primary-detail layout when viewing details from an item in a large list or group on the same page. A primary-detail layout is useful for navigating back and forth through a list and making edits in the details of each list item, without losing context of the larger list. Primary-detail layouts look best on wider screens, but they can be responsive, too.`}
    </p>
    <AutoLinkHeader {...{"id":"responsive-behavior","size":"h2","className":"ws-title ws-h2"}}>
      {`Responsive behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Mobile views show a primary-detail layout’s primary component only. Details show on a new page upon clicking, but the “primary item title” will appear as a header with clear navigation back to the primary component. The viewport will switch to mobile view at a defined breakpoint, usually when it drops below 2x (which is the typical mobile width).`}
    </p>
    <img src={srcImport504} height={srcImport504.height * 375 / srcImport504.width} {...{"alt":"primary-detail with card view on mobile","width":"375","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`In tablet/dt screens, the primary component may switch to its mobile view—while still maintaining a side-by-side view with the detail drawer—earlier than the typical mobile breakpoint.`}
    </p>
    <img src={srcImport505} height={srcImport505.height * 375 / srcImport505.width} {...{"alt":"primary-detail with side-by-side view on mobile","width":"375","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If the primary and detail components are the same width or take up the same portion of the screen, then both will resize until they reach the mobile view’s defined breakpoint.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If the primary and detail components are different sizes, the larger container will resize, and the smaller container will remain as a fixed size until they reach the device’s defined breakpoint.`}
    </p>
    <AutoLinkHeader {...{"id":"selecting-rows","size":"h2","className":"ws-title ws-h2"}}>
      {`Selecting rows`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Row selection differs from bulk/checkbox selection, and both selection types operate independent of each other.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When checkbox select and row select are both available in a primary-detail layout, the details pane will populate an empty state and guide users to either make an action in the toolbar or clear the selected checkboxes to return to the selected row’s detail view. This empty state should show to alleviate confusion for the different select states when both are present in a table.`}
    </p>
    <img src={srcImport506} height={srcImport506.height * 990 / srcImport506.width} {...{"alt":"primary-detail with two items selected","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Here are some other best practices to keep in mind:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`There needs to be a `}
        <strong>
          {`selected`}
        </strong>
        {` state for the primary item (row or card) currently populating the details pane.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the details pane isn’t auto expanded, there needs to be an affordance to open an item in the primary pane (such as a view details button or a hover/selectable row states) or in a toolbar (such as an icon to toggle open/close the details pane).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the details pane can be toggled close, there needs to be a close icon in the top-right of the details pane. Users may also toggle open/close in a toolbar.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For `}
      <PatternflyThemeLink {...{"to":"/components/empty-state"}}>
        {`empty states`}
      </PatternflyThemeLink>
      {`, if the details pane is automatically expanded on default but a primary item is not selected by default, then there should be an empty state in the details pane directing users to make a selection in the primary. In cases where there is bulk select capability in the primary component, an expanded details drawer should display an empty state informing users that multiple items have been selected. To view details of a single primary item, the user must clear their selection.`}
    </p>
    <AutoLinkHeader {...{"id":"splitter-in-a-primary-detail","size":"h2","className":"ws-title ws-h2"}}>
      {`Splitter in a primary-detail`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`splitter`}
      </strong>
      {` allows you to create a layout with resizable panes. The orientation of a splitter can be set to `}
      <strong>
        {`vertical`}
      </strong>
      {` or `}
      <strong>
        {`horizontal`}
      </strong>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a splitter to a primary-detail if you need to resize the width or height of a panel to give content more space. It helps to prioritize the content you’re focusing on. If data shown in a primary-detail has enough space, then you don’t need to use a splitter.`}
    </p>
    <img src={srcImport507} height={srcImport507.height * 1500 / srcImport507.width} {...{"width":"1500","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'DemosPrimaryDetailDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
