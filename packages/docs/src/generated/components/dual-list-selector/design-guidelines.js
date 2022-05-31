import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport175 from '../../../content/design-guidelines/components/dual-list-selector/./img/basic-dual.png';
import srcImport176 from '../../../content/design-guidelines/components/dual-list-selector/./img/expandable-dual.png';
import srcImport177 from '../../../content/design-guidelines/components/dual-list-selector/./img/dual list single.gif';
import srcImport178 from '../../../content/design-guidelines/components/dual-list-selector/./img/dual list folders.gif';
const pageData = {
  "id": "Dual list selector",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/dual-list-selector/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/dual-list-selector/dual-list-selector.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`dual list selector`}
      </strong>
      {` allows users to select and move items from one list of available items to another list of selected items. Unlike a select list, a dual list selector separates the available options and the selected options into two separate lists, which allows users to easily scan the items they selected.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Dual list selectors are useful when you have a large set of options for users to pick from that would be difficult to digest in a select list. They’re useful in forms, wizards, and modals as a way for users to make selections from a list of options.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a dual list selector when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You have a long list of items for users to pick from.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want to distinguish the available items from the chosen items.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want the ability to group the list of items`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user can select a large number of items and separating selections from available options would be helpful.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Do not use a dual list selector when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users have a list of actions to choose from. Instead, use a dropdown menu or tree view`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The list of items to choose from has fewer than 20 items. Instead, use a select list.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"types-of-dual-list-selectors","size":"h2","className":"ws-title ws-h2"}}>
      {`Types of dual list selectors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are two types of dual list selectors: basic dual lists and expandable dual lists.`}
    </p>
    <AutoLinkHeader {...{"id":"basic-dual-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Basic dual list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A basic dual list contains a flat list of items for the user to choose from.`}
    </p>
    <img src={srcImport175} height={srcImport175.height * 880 / srcImport175.width} {...{"alt":"basic dual list","width":"880","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`List labels:`}
        </strong>
        {` List labels distinguish between the list of available items and the list of chosen items. These labels can be changed based on your use case, and they should be clear and concise.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Available items list:`}
        </strong>
        {` The available items list is a list of items that users can choose from. Available list items can have a single level or multiple levels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chosen items list:`}
        </strong>
        {` The chosen items list is a list of items that users have selected and moved from the available items list.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selected item:`}
        </strong>
        {` A selected item refers to the  visual state of the item when it has been selected by a user.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Arrows:`}
        </strong>
        {` Arrows are buttons that give users the ability to move items from one list to another. The arrows will enable and disable based on user selections. Single arrows move only selected items. Double arrows move everything from one list to the other (in the direction of the arrow), whether the list contains manually selected items or not.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number of items:`}
        </strong>
        {` The number of items is an indicator of how many items are selected among the total items available in the list.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter:`}
        </strong>
        {` The filter is a search field that allows users to filter the list of items.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sorting (optional):`}
        </strong>
        {` The sorting ability enables users to sort the list of items presented for easier scanning.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`More actions (optional):`}
        </strong>
        {` The more actions (kebab) menu  stores added actions, such as exporting.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"expandable-dual-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable dual list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An expandable dual list contains a multi-leveled list of items for users to choose from. Items can be nested in a hierarchical tree to show different groupings or categories, and the list can have up to three levels.`}
    </p>
    <img src={srcImport176} height={srcImport176.height * 880 / srcImport176.width} {...{"alt":"basic dual list","width":"880","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Folder:`}
        </strong>
        {` group of items that can be selected and moved from one list of options to the other. When a folder has a mix of selected and unselected items, the checkbox should have a mixed state. When all items in a folder are selected, the folder checkbox should have a selected state.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Item:`}
        </strong>
        {` item within a folder that can be selected and moved.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selected item:`}
        </strong>
        {` visual state of an item when it has been selected by a user.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number of items:`}
        </strong>
        {` indicator of how many items are selected, among the total items available in the list. `}
                <u>{`In expandable lists, only non-folder items are included in the item count.`}</u>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Badge (optional):`}
        </strong>
        {` number of items inside a folder.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"dual-list-behavior","size":"h3","className":"ws-title ws-h3"}}>
      {`Dual list behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users can select one or more items from the available list and use the arrows to move these items to the chosen list. Users can filter down the items by using the search input field.`}
    </p>
    <img src={srcImport177} {...{"alt":"basic dual list behavior","width":"880","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`In an expandable dual list, when users move an item from the available list to the chosen list, the item still appears in its original group structure. For example, if the item Option 6  in the group Folder 2  is moved from the available list to the chosen list, the Option 6 item will appear in the chosen list under the Folder 2 group.  It won’t appear as a stand-alone, single-level item.`}
    </p>
    <img src={srcImport178} {...{"alt":"basic dual list behavior","width":"880","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsDualListSelectorDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
