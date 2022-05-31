import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport285 from '../../../content/design-guidelines/components/menu/./img/basic-menu.png';
import srcImport286 from '../../../content/design-guidelines/components/menu/./img/option-select-menu.png';
import srcImport287 from '../../../content/design-guidelines/components/menu/./img/grouped-menu.png';
import srcImport288 from '../../../content/design-guidelines/components/menu/./img/flyout-menu.png';
import srcImport289 from '../../../content/design-guidelines/components/menu/./img/menu-filtering.png';
import srcImport290 from '../../../content/design-guidelines/components/menu/./img/favorities-menu.png';
import srcImport291 from '../../../content/design-guidelines/components/menu/./img/drill-down-menu.png';
const pageData = {
  "id": "Menu",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/menu/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/menu/menu.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`menu`}
      </strong>
      {` is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`dropdown`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/select"}}>
        {`select list`}
      </PatternflyThemeLink>
      {`, or it can be revealed by right clicking on a specific region within a page.`}
    </p>
    <AutoLinkHeader {...{"id":"elements-and-variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements and variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"action-menu","size":"h3","className":"ws-title ws-h3"}}>
      {`Action menu`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An action menu presents a list of actions or links.`}
    </p>
    <img src={srcImport285} height={srcImport285.height * 863 / srcImport285.width} {...{"alt":"actions dropdown","width":"863","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Menu item:`}
          </strong>
          {` Menu items represent discrete actions that can be taken. Selecting a menu item inside a dropdown will trigger the action and dismiss the menu, while selecting a menu item inside a select list will select the item.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Icon (optional):`}
          </strong>
          {` Familiar icons may be included before each menu item to accelerate text label recognition. Only use icons if they will be easily recognized and distinguished from one another. Never use them simply for decoration.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Links:`}
          </strong>
          {` Links navigate the user to a new page. They may be mixed with actions in a menu or used in their place. If the link will open in a new window, use the external link icon to annotate the link so that users can expect this behavior.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Descriptions (optional):`}
          </strong>
          {` Descriptive text may be added below each menu item, but only when the menu item label itself may not be clear to all users. Keep descriptive text to two lines or less.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"option-select-menus","size":"h3","className":"ws-title ws-h3"}}>
      {`Option select menus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an option select menu when you want to persist selected items. This is typically the case for select menus or settings menus that allow users to select between multiple options. See the `}
      <PatternflyThemeLink {...{"to":"/components/select"}}>
        {`select`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/options-menu"}}>
        {`options menu`}
      </PatternflyThemeLink>
      {` components for more details. You may present single or multiple `}
      <PatternflyThemeLink {...{"to":"#grouped-menus"}}>
        {`groups of options`}
      </PatternflyThemeLink>
      {` within the same menu.`}
    </p>
    <img src={srcImport286} height={srcImport286.height * 863 / srcImport286.width} {...{"alt":"option select menus","width":"863","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Selected item:`}
          </strong>
          {` Selected items are indicated by a checkmark to the right of their label.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Icon (optional):`}
          </strong>
          {` Familiar icons may be placed before each menu item to accelerate text label recognition. Only use icons if they will be easily recognized and distinguished from one another. Never use icons simply for decoration.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Descriptions (optional):`}
          </strong>
          {` Descriptive text may be added below each menu item, but only when the menu item label itself may not be clear to all users. Keep descriptive text to two lines or less.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"grouped-menus","size":"h3","className":"ws-title ws-h3"}}>
      {`Grouped menus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You may decide to group menu items to associate related items or indicate a hierarchy within them. Items may be grouped using group headings, separators, or both.`}
    </p>
    <img src={srcImport287} height={srcImport287.height * 630 / srcImport287.width} {...{"alt":"grouped menu","width":"630","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Group heading (optional):`}
          </strong>
          {` Add a group heading when you want to name the group.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Separator (optional):`}
          </strong>
          {` Separators are horizontal dividers that help to group the menu items by clearly showing where one group ends and the next begins. You should consider whether a separator is needed to create visually distinct groups. In the first example above, a separator is used to create separation between the two groups of items. In the second example, the separator is not needed because the titled checkbox groups create two clearly grouped set of options on their own.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"multi-level-fly-out-menus","size":"h3","className":"ws-title ws-h3"}}>
      {`Multi-level fly-out menus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use fly-out menus when you want to expose sub-items from a parent node. PatternFly supports a single level fly-out, only.`}
    </p>
    <img src={srcImport288} height={srcImport288.height * 348 / srcImport288.width} {...{"alt":"flyout menu","width":"348","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If a menu item has sub-items, a “>” character will be shown to the right of the item label. When hovering over the item, the secondary menu will be exposed.`}
    </p>
    <AutoLinkHeader {...{"id":"filtering-menu-items","size":"h3","className":"ws-title ws-h3"}}>
      {`Filtering menu items`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If the list of possible items is very long, add a filter to make items more findable.`}
    </p>
    <img src={srcImport289} height={srcImport289.height * 348 / srcImport289.width} {...{"alt":"grouped menu","width":"348","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When filtering menu items, a search input will be added to the top of the menu and the list of items will be filtered as the user types.`}
    </p>
    <AutoLinkHeader {...{"id":"favoriting-and-other-actions","size":"h3","className":"ws-title ws-h3"}}>
      {`Favoriting and other actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Favoriting or other optional actions can be associated with any menu item. In this case, making an item a favorite will duplicate it at the top of the menu. This may be useful when you have a long list of possible actions and want to “pin” a subset of items to the top of the menu.`}
    </p>
    <img src={srcImport290} height={srcImport290.height * 348 / srcImport290.width} {...{"alt":"menu with favorites","width":"348","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Any action that can be represented as an icon button can be placed in one or more menu items. In this case, the favoriting action is used to mark an item as a favorite.`}
    </p>
    <AutoLinkHeader {...{"id":"drilldown-menu","size":"h3","className":"ws-title ws-h3"}}>
      {`Drilldown menu`}
    </AutoLinkHeader>
    <img src={srcImport291} height={srcImport291.height * 935 / srcImport291.width} {...{"alt":"drilldown menu","width":"935","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a drilldown menu when data is structured into levels and includes a long list of options. When the parent with children is selected, the list is replaced with the children items. A header displays the name of the parent, with the option to go back one level.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If data is more complex and has more than 2 levels, use a drilldown menu with breadcrumbs instead. Breadcrumbs offer better navigation between different levels. The number of visited levels is shown in a grey badge with a dropdown menu showing the menu items between the first and last level. The badge allows you to go back to a specific visited level. If you need to see the whole structure of your data, use a `}
      <PatternflyThemeLink {...{"to":"/components/tree-view"}}>
        {`tree view`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`When you want to...`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"When you want to..."}}>
            <div>
              {`Expose a list of actions`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Use an actions menu with actions and/or links. Add icons in front of menu items only if they will help to make items more recognizable. Include descriptive text for menu items that may require further definition.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"When you want to..."}}>
            <div>
              {`Create logical groupings of menu items`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Use separators to group items. Include group headings if you don’t feel like the meaning of the groups will be obvious.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"When you want to..."}}>
            <div>
              {`Expose a list of nested actions`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Use a fly-out menu. Any optional attributes of basic menus, including icons, groups, and descriptions can also be applied to flyout menus.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"When you want to..."}}>
            <div>
              {`Select from a list of options`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Use an options select menu for selecting between values rather than actions. Icons, descriptions, and groupings can be used with option select menus to improve recognition or create logical option groups.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"content-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Content guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When creating menu item labels, keep in mind the following guidelines:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Keep menu items short. In most cases, 1-3 words should suffice.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Actions should start with a verb, for example: `}
          <em>
            {`Save`}
          </em>
          {`, `}
          <em>
            {`Clear filters`}
          </em>
          {`, and `}
          <em>
            {`Remove from tasklist`}
          </em>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Options should reflect the result a user should expect. For example, a list or sorting options might include the items: `}
          <em>
            {`Alphabetical`}
          </em>
          {`, `}
          <em>
            {`Oldest first`}
          </em>
          {`, `}
          <em>
            {`Newest first`}
          </em>
          {`, and `}
          <em>
            {`Numeric`}
          </em>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Descriptive text added to a menu item should be short. Two lines or less is recommended.`}
        </p>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsMenuDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
