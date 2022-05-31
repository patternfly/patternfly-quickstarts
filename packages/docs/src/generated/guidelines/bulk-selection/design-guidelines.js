import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport538 from '../../../content/design-guidelines/usage-and-behavior/bulk-selection/./img/bulk-selector.png';
import srcImport539 from '../../../content/design-guidelines/usage-and-behavior/bulk-selection/./img/bulk-select-checkbox.png';
import srcImport540 from '../../../content/design-guidelines/usage-and-behavior/bulk-selection/./img/bulk-selection-example.png';
import srcImport541 from '../../../content/design-guidelines/usage-and-behavior/bulk-selection/./img/bulk-selection-no-toolbar.png';
const pageData = {
  "id": "Bulk selection",
  "section": "guidelines",
  "source": "design-guidelines",
  "slug": "/guidelines/bulk-selection/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/usage-and-behavior/bulk-selection/bulk-selection.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"bulk-selection","size":"h2","className":"ws-title ws-h2"}}>
      {`Bulk selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a bulk selection pattern when you want to select or deselect multiple items in a content view (list, table, or card grid). The bulk selector uses a `}
      <PatternflyThemeLink {...{"to":"/components/dropdown/react#split-button"}}>
        {`Split button`}
      </PatternflyThemeLink>
      {` component to control selection from the `}
      <PatternflyThemeLink {...{"to":"/components/toolbar"}}>
        {`Toolbar`}
      </PatternflyThemeLink>
      {`. Besides controlling selection, the bulk selector reflects the selection status of the related component (partially selected, all items selected, or no items selected).`}
    </p>
    <AutoLinkHeader {...{"id":"bulk-selector","size":"h2","className":"ws-title ws-h2"}}>
      {`Bulk selector`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The bulk selector is created using a Split button and is always located as the leftmost item in a toolbar.`}
    </p>
    <img src={srcImport538} width={srcImport538.width} height={srcImport538.height} {...{"alt":"Bulk selector","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Bulk selector:`}
      </strong>
      {` The bulk selector uses a split button to combine a selection checkbox with a dropdown menu.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Checkbox:`}
      </strong>
      {` The state of the checkbox reflects the current selection state of the list, table, or card grid.`}
    </p>
    <img src={srcImport539} height={srcImport539.height * 518 / srcImport539.width} {...{"alt":"Bulk Selector Checkbox States","width":"518","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3. Items selected:`}
      </strong>
      {` This text always reflects the total number of items selected. If pagination is in use, it will reflect the items selected across all pages.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`4. Menu:`}
      </strong>
      {` at a minimum the menu will include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Select none - to clear selections across all pages.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Select page - to select all items on the current page (when pagination is in use).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Select all - to select all items across pages.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Additional menu items can be added to select items that match some predetermined filter criteria, such as “Red Cars or Blue Cars” / “Running VMs”, etc.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"bulk-selection-from-the-toolbar","size":"h3","className":"ws-title ws-h3"}}>
      {`Bulk selection from the toolbar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The example below shows a bulk selector placed in a toolbar above a table using pagination.`}
    </p>
    <img src={srcImport540} width={srcImport540.width} height={srcImport540.height} {...{"alt":"Bulk selection from toolbar","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`There are 50 total items in this dataset spread across 10 pages (5 items per page), but only the first page has been selected and therefore partial selection is reflected in the checkbox. The user may select (or deselect) additional items either through the use of the bulk selection checkbox, the bulk selection menu, or by clicking on the checkbox at the front of a row. The selected items count will update whenever selection is changed.`}
    </p>
    <AutoLinkHeader {...{"id":"bulk-selection-and-global-actions","size":"h3","className":"ws-title ws-h3"}}>
      {`Bulk selection and global actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Bulk selection is often used to select multiple items and perform an action on them. Note that after an action is completed, the selection state remains as is until the user changes the selection.`}
    </p>
    <AutoLinkHeader {...{"id":"integrated-bulk-selection-for-tables","size":"h3","className":"ws-title ws-h3"}}>
      {`Integrated bulk selection for tables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tables are unique to other view in that they include integrated bulk selection by default. Below is an example of a PatternFly table component with integrated bulk selection in the header row.`}
    </p>
    <img src={srcImport541} width={srcImport541.width} height={srcImport541.height} {...{"alt":"Integrated bulk selection in a table","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Bulk selection checkbox:`}
      </strong>
      {` A checkbox in the header row of a table will select (or deselect) all items in the table or all items on the current page if pagination is in use.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In PatternFly we recommend that integrated bulk selection only be used in cases where a table is placed in a page without a toolbar. Whenever a toolbar is present, we recommend using the toolbar to control bulk selection. This will provide for better visibility on the count of selected items, lead to better consistency between view types, and allow for more variety of selection options.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note: To hide integrated bulk selection and enable selection control from the toolbar in the PatternFly React Table component, set the canSelectAll prop to ‘false’.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'GuidelinesBulkSelectionDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
