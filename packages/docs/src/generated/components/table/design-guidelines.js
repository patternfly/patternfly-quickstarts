import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport382 from '../../../content/design-guidelines/components/table/./img/compact-and-default-table.png';
import srcImport383 from '../../../content/design-guidelines/components/table/./img/compact-data-table.png';
import srcImport384 from '../../../content/design-guidelines/components/table/./img/expandable-table.png';
import srcImport385 from '../../../content/design-guidelines/components/table/./img/compound-expandable-data-table.png';
import srcImport386 from '../../../content/design-guidelines/components/table/./img/actionable-table.png';
import srcImport387 from '../../../content/design-guidelines/components/table/./img/sortable-data-table.png';
import srcImport388 from '../../../content/design-guidelines/components/table/./img/table-favoriting.png';
import srcImport389 from '../../../content/design-guidelines/components/table/./img/compact-spacing.png';
import srcImport390 from '../../../content/design-guidelines/components/table/./img/default-spacing.png';
import srcImport391 from '../../../content/design-guidelines/components/table/./img/Mobile-data-table-example.png';
import srcImport392 from '../../../content/design-guidelines/components/table/./img/data-table-example.png';
const pageData = {
  "id": "Table",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/table/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/table/table.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`table`}
      </strong>
      {` is used to display large data sets that can be easily laid out in a simple grid with column headers.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers 2 components for displaying large data sets: `}
      <PatternflyThemeLink {...{"to":"/components/data-list/design-guidelines"}}>
        {`data lists`}
      </PatternflyThemeLink>
      {` and tables. While they satisfy similar use cases, choosing the correct component to use in your design will be dependent on the type of data you need to display.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use tables when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users will want to consume data as a grid (in other words, structured rows and columns).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want column headers.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider the structure of the data you want to display and organize that information into columns. Columns will typically have column headers. Every row within a table must have a consistent format. If the table row includes actions, they should always be placed in the rightmost column(s).`}
    </p>
    <AutoLinkHeader {...{"id":"compact-and-default-tables","size":"h3","className":"ws-title ws-h3"}}>
      {`Compact and default tables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports 2 main types of tables:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#compact-spacing"}}>
            {`Compact table`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` when you want to show as much data per page as possible.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#default-spacing"}}>
            {`Default table`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` when you don’t have to minimize paging.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`See `}
      <PatternflyThemeLink {...{"to":"#compact-vs-default-spacing"}}>
        {`when to use compact vs. default spacing`}
      </PatternflyThemeLink>
      {` for more information about the styling and usage.`}
    </p>
    <img src={srcImport382} height={srcImport382.height * 857 / srcImport382.width} {...{"alt":"Compact and default table","width":"857","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"table-elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Table elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The elements mentioned below are similar for a table with compact or default spacing. This example shows a table with a compact spacing.`}
    </p>
    <img src={srcImport383} height={srcImport383.height * 1186 / srcImport383.width} {...{"alt":"Compact table","width":"1186","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
            {`Toolbar`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Sits above the table and contains controls for manipulating table data. Common actions include filtering, sorting, and pagination.`}
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
          {`Column headers:`}
        </strong>
        {` Should align with the content they contain. If the user is able to sort on a column, the first click on the header will sort the content of the table on the content in that column. Subsequent clicks will toggle the direction of the sort. Table data can only be sorted on one column at a time. See `}
        <PatternflyThemeLink {...{"to":"#sorting-by-columns"}}>
          {`sorting by columns`}
        </PatternflyThemeLink>
        {` for more information on the sort component.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select checkbox:`}
        </strong>
        {` Selects this row`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global actions:`}
        </strong>
        {` Actions that apply to all selected items`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline actions:`}
        </strong>
        {` Actions that apply only to the current row/item`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination footer:`}
        </strong>
        {` When present, provides navigation to additional pages`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"table-capabilities","size":"h2","className":"ws-title ws-h2"}}>
      {`Table capabilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Every table can be extended with these functionalities:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#expandable-table"}}>
          {`Expandable table`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#compound-expandable-table"}}>
          {`Compound expandable table`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#actionable-table"}}>
          {`Actionable table`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#sorting-by-columns"}}>
          {`Sortable table`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#table-with-favoriting"}}>
          {`Table with favoriting`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"expandable-table","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable table`}
    </AutoLinkHeader>
    <img src={srcImport384} height={srcImport384.height * 1186 / srcImport384.width} {...{"alt":"Expandable table","width":"1186","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expand all (optional)`}
        </strong>
        {`: Expands every row at the same time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion:`}
        </strong>
        {` Expands single row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion panel:`}
        </strong>
        {` Contains details associated with a row. See `}
        <PatternflyThemeLink {...{"to":"#expanded-panel-coloring"}}>
          {`expanded panel coloring`}
        </PatternflyThemeLink>
        {` for more information.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use expandable table rows when:`}
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
    <AutoLinkHeader {...{"id":"expanded-panel-coloring","size":"h4","className":"ws-title ws-h4"}}>
      {`Expanded panel coloring`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a dark blue line for expanded rows:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In a non-selectable table.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In a selectable table for a selected row. The selected row would use a dark blue line, while the other expanded un-selected rows would use a light blue line.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a light blue line for expanded rows:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In a selectable table for unselected expanded rows. The unselected expanded rows would use a light blue line, while the selected expanded rows would use a dark blue line.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"compound-expandable-table","size":"h3","className":"ws-title ws-h3"}}>
      {`Compound-expandable table`}
    </AutoLinkHeader>
    <img src={srcImport385} height={srcImport385.height * 1189 / srcImport385.width} {...{"alt":"Compound expandable table","width":"1189","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable cell:`}
        </strong>
        {` A cell that can be clicked to reveal more detail about an item. If the expansion for an item is already open, clicking on a different cell will close the current item and open a new one.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion panel:`}
        </strong>
        {` Contains details associated with an expandable item.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-0","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a compound expandable table when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You want multiple expansion panels that relate to specific table columns.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It would not make sense to combine all of this information into a single, simple expansion.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"actionable-table","size":"h3","className":"ws-title ws-h3"}}>
      {`Actionable table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The actionable table provides checkboxes or radio buttons that enable users to select one or more rows in a table. Users may then act on those selections using options in the `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
        {`toolbar`}
      </PatternflyThemeLink>
      {`,.`}
    </p>
    <img src={srcImport386} height={srcImport386.height * 1174 / srcImport386.width} {...{"alt":"Actionable table","width":"1174","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/guidelines/bulk-selection"}}>
            {`Bulk selection`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` When present, selects all items in a table with checkboxes. If pagination is being used, this will only select items on the current page. See `}
        <PatternflyThemeLink {...{"to":"/guidelines/bulk-selection"}}>
          {`bulk selection`}
        </PatternflyThemeLink>
        {` for more information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox`}
        </strong>
        {`: Enables a user to select a row. Use when multiple rows can be selected at the same time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Radio button`}
        </strong>
        {`: Enables a user to select a single row at a time. Use when only one row can be selected at a time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global actions:`}
        </strong>
        {` Actions that can be applied to `}
        <strong>
          {`all`}
        </strong>
        {` selected items.  If actions in the table are restricted to a single row or object, keep the actions at the row kebab level, instead of in the toolbar.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-and-when-not","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use and when not`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use an actionable table when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You need to enable a user to select one or more items in the table, for example to make selections in a wizard, or to carry out actions in a full page table.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don't use an actionable table when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users can not take any actions on table items/rows.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"sorting-by-columns","size":"h3","className":"ws-title ws-h3"}}>
      {`Sorting by columns`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sorting by columns is possible for any table variation. Enabling the component within a table eases the ability to scan and read through the content. This option is favored over adding sorting functionality to the `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
        {`toolbar`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport387} height={srcImport387.height * 1161 / srcImport387.width} {...{"alt":"Sortable table","width":"1161","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sortable column:`}
        </strong>
        {` When a column is sortable, the sort icon will appear to the right of the column header in a `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors#typography-and-iconography-colors"}}>
          {`light grey`}
        </PatternflyThemeLink>
        {` color. Sorting will not become active until the user selects the column header. This triggers the arrow to point upwards and the content to be sorted in ascending order.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Hovered sort:`}
        </strong>
        {` When a column is sortable, the sort icon will appear to the right of the column header. Upon hover, the  icon will change to a `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors#typography-and-iconography-colors"}}>
          {`darker grey`}
        </PatternflyThemeLink>
        {` indicating that the icon is actionable.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sorted column:`}
        </strong>
        {` When a column is being sorted by, the column header will turn `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors#typography-and-iconography-colors"}}>
          {`blue`}
        </PatternflyThemeLink>
        {` and the sort icon will represent the direction of the sort. Subsequent clicks on the sortable column header will toggle the direction of the sort.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-1","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The default sort order for a table should support the primary use case for the application. All columns in a table do not require sort functionality. That is, you can disable the header sort function on some columns and enable it on others.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If a table contains these two attributes: (System Name | Last Sync) you may want to show the most recently synced system at the top of the table (in other words, it is the default sort column), because a primary use case for this table is verifying that you have successfully connected or troubleshot the system’s connection to Cloud Services.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If a table contains these three attributes: (System Name | Last Sync | Severity) you may want to show the system with the highest Severity because that is the system the user should tend to first.`}
    </p>
    <AutoLinkHeader {...{"id":"table-with-favoriting","size":"h3","className":"ws-title ws-h3"}}>
      {`Table with favoriting`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Adding the ability to favorite is possible for any table variation. Users can set their favorites by clicking the star icon in the favorites row. By default, the star is grey; when an item is favorited, the star becomes yellow. Clicking the star again will unfavorite the item. When an item is favorited or unfavorited, it does not move in the list unless sorting is on.`}
    </p>
    <img src={srcImport388} height={srcImport388.height * 930 / srcImport388.width} {...{"alt":"Table with favoriting","width":"930","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Favorites column`}
        </strong>
        {`: Allows users to favorite and unfavorite items in the table by clicking the item’s associated star icon.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Favorites column header (optional):`}
        </strong>
        {` Allows users to sort by favorites.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-2","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a table with favorites when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users may want to easily access their most used/viewed items in a table.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have a long list of items and want to favorite items by default for discoverability.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"compact-vs.-default-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Compact vs. default spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whether to use a table/data list with compact or default spacing is up to you and your use case. However, here is some guidance for when to use which option. You can see examples of each option for comparison.`}
    </p>
    <AutoLinkHeader {...{"id":"compact-spacing","size":"h4","className":"ws-title ws-h4"}}>
      {`Compact spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A table may sometimes need to be compact to make more rows visible at a time. The more rows you can see, the less you need to use `}
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
        {`You need to show as much data as possible on 1 page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to show data in a small space. For example in modal or wizard.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to minimize paging.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Readability is a secondary concern.`}
      </li>
    </ul>
    <img src={srcImport389} height={srcImport389.height * 1162 / srcImport389.width} {...{"alt":"Compact spacing","width":"1162","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You can see more data on 1 page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have a good overview about the structure of data.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The structure of data is simple, informative and have less visual elements.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"default-spacing","size":"h4","className":"ws-title ws-h4"}}>
      {`Default spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A table may sometimes need more space for rich graphical data. See an example below.`}
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
    <img src={srcImport390} height={srcImport390.height * 1162 / srcImport390.width} {...{"alt":"Default spacing","width":"1162","className":"ws-img"}}>
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
    <AutoLinkHeader {...{"id":"tables-on-mobile","size":"h2","className":"ws-title ws-h2"}}>
      {`Tables on mobile`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly table is designed to be fully responsive. When columns no longer fit within the width of the viewport, columns are stacked so that data in each row is displayed as sets of attribute-value pairs.`}
    </p>
    <img src={srcImport391} height={srcImport391.height * 375 / srcImport391.width} {...{"alt":"Mobile data table","width":"375","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"using-lists-and-tables-in-a-page","size":"h2","className":"ws-title ws-h2"}}>
      {`Using lists and tables in a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Lists and tables should be placed in the body of a page. The width should be set by the containing element.`}
    </p>
    <img src={srcImport392} height={srcImport392.height * 1500 / srcImport392.width} {...{"alt":"Compact data table example","width":"1500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`In this example, a table is positioned in the body of a page in a card.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-a-table-vs.-a-data-list","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use a table vs. a data list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a table when`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The information you want to display fits into a structured, tabular format (in other words, has distinct rows and columns).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don't use a table`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For less structured or variably structured data that cannot be easily organized into columns. In these situations, use a `}
        <PatternflyThemeLink {...{"to":"/components/data-list/design-guidelines"}}>
          {`data lists`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsTableDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
