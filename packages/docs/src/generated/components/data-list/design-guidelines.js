import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport139 from '../../../content/design-guidelines/components/data-list/./img/compact-and-default-list.png';
import srcImport140 from '../../../content/design-guidelines/components/data-list/./img/compact-list.png';
import srcImport141 from '../../../content/design-guidelines/components/data-list/./img/actionable-list.png';
import srcImport142 from '../../../content/design-guidelines/components/data-list/./img/expandable-data-list.png';
import srcImport143 from '../../../content/design-guidelines/components/data-list/./img/datalistdraggable1.png';
import srcImport144 from '../../../content/design-guidelines/components/data-list/./img/datalistdraggable2.png';
import srcImport145 from '../../../content/design-guidelines/components/data-list/./img/compact-datalist.png';
import srcImport146 from '../../../content/design-guidelines/components/data-list/./img/default-datalist.png';
const pageData = {
  "id": "Data list",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/data-list/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/data-list/data-list.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`data list`}
      </strong>
      {` is used to display large data sets when you need a flexible layout or need to include interactive content like charts.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers 2 components for displaying large data sets: data lists and `}
      <PatternflyThemeLink {...{"to":"/components/table/design-guidelines"}}>
        {`tables`}
      </PatternflyThemeLink>
      {`. While they satisfy similar use cases, choosing the correct component to use in your design will be dependent on the type of data you need to display.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use data lists when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A flexible layout is more important than arranging information in a grid.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want to include active content like a chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Content displayed may vary between rows.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Think of each row in a data list as a container for some formatted content. In PatternFly, data list rows can accept any `}
      <PatternflyThemeLink {...{"to":"/layouts/bullseye"}}>
        {`layout`}
      </PatternflyThemeLink>
      {` supported by the design system as long as all rows apply the same layout. Here are some common layouts that may be useful in a data list:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/layouts/grid/react"}}>
            {`Grid`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Displays content in a responsive grid.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/layouts/level/react"}}>
            {`Level`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Justifies content evenly over the width of the row and vertically aligns items in the center of the row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/layouts/split/react"}}>
            {`Split`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Distributes content evenly with a main content area in the center.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/layouts/flex/react"}}>
            {`Flex`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Enables more customization control over the alignment and spacing options provided in the other layouts.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"compact-and-default-data-lists","size":"h2","className":"ws-title ws-h2"}}>
      {`Compact and default data lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatterFly supports 2 main types of data lists:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#compact-spacing"}}>
            {`Compact data list`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Use when you want to show as much data per page as possible.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#default-spacing"}}>
            {`Default data list`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Use when you don’t have to minimize paging.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`See `}
      <PatternflyThemeLink {...{"to":"#compact-vs-default-spacing"}}>
        {`when to use compact vs. default spacing`}
      </PatternflyThemeLink>
      {` for more information about the styling and usage.`}
    </p>
    <img src={srcImport139} width={srcImport139.width} height={srcImport139.height} {...{"alt":"Compact and default data list","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"data-list-elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Data list elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The elements mentioned below are similar for a data list with compact or default spacing. This example shows a data list with compact spacing.`}
    </p>
    <img src={srcImport140} width={srcImport140.width} height={srcImport140.height} {...{"alt":"Compact data list","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
            {`Toolbar`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Sits above the list and contains controls for manipulating list data. Common actions include filtering, sorting, and pagination.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/guidelines/bulk-selection"}}>
            {`Bulk selection`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` When present, selects all items in a table. If pagination is being used, this will only select items on the current page. See `}
        <PatternflyThemeLink {...{"to":"/guidelines/bulk-selection"}}>
          {`bulk selection`}
        </PatternflyThemeLink>
        {` for more information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Row:`}
        </strong>
        {` Row height may be variable and sizes to the content. Rows in a data list may take any supported layout.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select checkbox:`}
        </strong>
        {` Selects this row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline actions:`}
        </strong>
        {` These actions apply only to the current row/item.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global actions:`}
        </strong>
        {` Actions that apply to all selected items.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination footer:`}
        </strong>
        {` When present, provides navigation to additional pages.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"data-list-capabilities","size":"h2","className":"ws-title ws-h2"}}>
      {`Data list capabilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Every data list can be extended with these functionalities:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/data-list/design-guidelines#actionable-data-list"}}>
            {`Actionable data list`}
          </PatternflyThemeLink>
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/data-list/design-guidelines#expandable-data-list"}}>
            {`Expandable data list`}
          </PatternflyThemeLink>
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#draggable-data-list-rows"}}>
            {`Draggable data list rows`}
          </PatternflyThemeLink>
        </strong>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"actionable-data-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Actionable data list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The actionable data list provides checkboxes that enable users to select one or more rows in the list. Users may then act on those selections using options in the `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
        {`toolbar`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport141} width={srcImport141.width} height={srcImport141.height} {...{"alt":"Actionable list","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/guidelines/bulk-selection"}}>
            {`Bulk selection`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` When present, selects all items in a table. If pagination is being used, this will only select items on the current page. See `}
        <PatternflyThemeLink {...{"to":"/guidelines/bulk-selection"}}>
          {`bulk selection`}
        </PatternflyThemeLink>
        {` for more information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        {` Enables a user to select a row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global actions:`}
        </strong>
        {` Actions that can be applied to `}
        <strong>
          {`all`}
        </strong>
        {` selected items. If actions in the data list are restricted to a single row or object, keep the actions at the individual row level, instead of in the toolbar.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Use an actionable data list`}
          </strong>
          {` when you need to enable a user to select and act on multiple items in the list.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Don't use an actionable data list`}
          </strong>
          {` when users can not take any actions on data list items/rows.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"expandable-data-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable data list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The expandable list adds an expansion panel to every row to reveal more details about the item.`}
    </p>
    <img src={srcImport142} height={srcImport142.height * 1241 / srcImport142.width} {...{"alt":"Expandable data list","width":"1241","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expand all (optional):`}
        </strong>
        {` Expands or collapses every row in the data list at the same time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion caret:`}
        </strong>
        {` Toggles the expansion open and closed for the individual row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion panel:`}
        </strong>
        {` A container that is revealed when the expansion is open. It can accept any supported layout to present additional content to the user.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-0","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use an expandable data list when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You have more information than will comfortably fit inside a row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want to provide a way for advanced users to access information that is not applicable to all users.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"draggable-data-list-rows","size":"h3","className":"ws-title ws-h3"}}>
      {`Draggable data list rows`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Draggable data list rows can be added to any data list and allow you to customize the order of rows within a data list.`}
    </p>
    <img src={srcImport143} height={srcImport143.height * 880 / srcImport143.width} {...{"alt":"Example of draggable date list","width":"880","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Drag icon:`}
        </strong>
        {` To indicate a row is draggable, use the fa-grip icon. Use grip-vertical to indicate the ability to move a vertically-oriented component via drag and drop. Use grip-horizontal to move a horizontally-oriented component via drag and drop. For example, if you are selecting items to be dragged from two parallel lists.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dragged row:`}
        </strong>
        {` When dragging a row, it becomes slightly less opaque and floats above the static rows to indicate that it is the one moving.`}
      </li>
    </ol>
    <img src={srcImport144} height={srcImport144.height * 880 / srcImport144.width} {...{"alt":"Example of draggable date list","width":"880","className":"ws-img"}}>
    </img>
    <ol {...{"start":3,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dragged row positioning:`}
        </strong>
        {` When positioning the row, the other elements in the data list will move to indicate the dragged row’s position.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Final position:`}
        </strong>
        {` After the row has been placed where desired, the data list becomes static again, until the user decides to drag another row.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-1","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use draggable data list rows when you want to allow users to order their choices within a list. A common example of this is `}
      <PatternflyThemeLink {...{"to":"/components/table/react-demos#column-management-with-draggable"}}>
        {`column management`}
      </PatternflyThemeLink>
      {`. Users can choose the number of columns and the order they are shown in a table by selecting and dragging rows in the `}
      <strong>
        {`Manage columns`}
      </strong>
      {` modal. Another common use case is ordering the importance of roles or types relative to a resource.`}
    </p>
    <AutoLinkHeader {...{"id":"compact-vs.-default-spacing","size":"h2","className":"ws-title ws-h2"}}>
      {`Compact vs. default spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whether to use a data list with compact or default spacing is up to you and your use case. However, here is some guidance for when to use which option. You can see examples of each option for comparison.`}
    </p>
    <AutoLinkHeader {...{"id":"compact-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Compact spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A data list may sometimes need to be compact to make more rows visible at a time. The more rows you can see, the less you need to use `}
      <PatternflyThemeLink {...{"to":"/components/pagination/design-guidelines"}}>
        {`pagination`}
      </PatternflyThemeLink>
      {`. Compact spacing is recommended for data with a simple structure. See an example below.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use compact spacing when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You need to show as much data as possible on one page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to show data in a small space, like in a modal or wizard.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to minimize paging.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Readability is a secondary concern.`}
      </li>
    </ul>
    <img src={srcImport145} height={srcImport145.height * 990 / srcImport145.width} {...{"alt":"Example of compact spacing data list","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You can see more data on one page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have a good overview about the structure of data.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The structure of data is simple, informative and have less visual elements.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"default-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Default spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A data list may sometimes need more space for rich graphical data. See an example below.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use default spacing when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You don’t have to display a lot of data on one page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You use many visual indicators that are placed in columns, such as icons or charts.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You don't have to minimize paging.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Readability is a primary concern.`}
      </li>
    </ul>
    <img src={srcImport146} height={srcImport146.height * 990 / srcImport146.width} {...{"alt":"Example of default spacing data list","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You can see less data on one page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You will need a pagination to see more rows.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Data structure includes many visual elements.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"when-to-use-a-data-list-vs.-a-table","size":"h2","className":"ws-title ws-h2"}}>
      {`When to use a data list vs. a table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a data list when`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The information you want to display is not easily structured into a tabular format.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want a more flexible layout within rows.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You plan to embed rich content like a chart or an image into a row.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a table when`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The information you want to display is easily structured into a tabular format.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The clarity of your content would benefit from well defined columns and headings.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"alternative-solutions","size":"h2","className":"ws-title ws-h2"}}>
      {`Alternative solutions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Alternative to a data list include `}
      <PatternflyThemeLink {...{"to":"/components/table/design-guidelines"}}>
        {`tables`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/card/design-guidelines#card-views"}}>
        {`card views`}
      </PatternflyThemeLink>
      {`. Card views and data lists have similar properties, but information in a card view is chunked into a grid of individual cards. In choosing between a data list and a card view, consider the type of data that will be displayed and the format that best suits that data. If you cannot easily fit all of the data that needs to be displayed into a card, a data list might be a better solution.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsDataListDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
