import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport354 from '../../../content/design-guidelines/components/select/./img/basic-select.png';
import srcImport355 from '../../../content/design-guidelines/components/select/./img/single-select.png';
import srcImport356 from '../../../content/design-guidelines/components/select/./img/checkbox-select.png';
import srcImport357 from '../../../content/design-guidelines/components/select/./img/selectlist-multi.png';
import srcImport358 from '../../../content/design-guidelines/components/select/./img/suggested-checkbox.png';
import srcImport359 from '../../../content/design-guidelines/components/select/./img/suggested-multiselect.png';
import srcImport360 from '../../../content/design-guidelines/components/select/./img/typeahead.png';
import srcImport361 from '../../../content/design-guidelines/components/select/./img/with-count.png';
import srcImport362 from '../../../content/design-guidelines/components/select/./img/with-viewmore.png';
import srcImport363 from '../../../content/design-guidelines/components/select/./img/with-description.png';
import srcImport364 from '../../../content/design-guidelines/components/select/./img/with-favorites.png';
const pageData = {
  "id": "Select",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/select/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/select/select.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`select list`}
      </strong>
      {` enables users to select one or more items from a list. Use a select list when options are dynamic or variable.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A select component consists of a toggle control to open and close a menu of actions or links. Selects differ from `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`dropdowns`}
      </PatternflyThemeLink>
      {` in that they persist selection, whereas dropdowns are typically used to present a list of actions or links.`}
    </p>
    <img src={srcImport354} height={srcImport354.height * 303 / srcImport354.width} {...{"alt":"basic select menu","width":"303","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Toggle:`}
          </strong>
          {` The toggle is used to open and close the menu. It takes on all of the behaviors of a button. The toggle label always reflects the currently selected item or may hold a placeholder if nothing is selected.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Menu:`}
          </strong>
          {` The menu contains a list of options or values. Menus should optimally present 7 or less items for easy scanning by the user. For longer menus, items may be grouped or scrolling may be exposed by limiting the height of the menu. See the `}
          <PatternflyThemeLink {...{"to":"/components/menu/design-guidelines"}}>
            {`menu component guidelines`}
          </PatternflyThemeLink>
          {` for more information about supported options, including use of icons, grouping, and descriptions. The Select component includes many common built-in menu variants. It’s also possible to attach a custom menu by using the `}
          <PatternflyThemeLink {...{"to":"/components/select/react#panel"}}>
            {`basic panel variant`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers several variations of select lists:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#single-select"}}>
          {`Single select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#checkbox-select"}}>
          {`Checkbox select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#multiple-select"}}>
          {`Multiple select`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#typeahead"}}>
          {`Typeahead`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"single-select","size":"h3","className":"ws-title ws-h3"}}>
      {`Single select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Single select lists allow users to select a single, mutually exclusive option. When the user selects an option from the list, the selection appears in the toggle.`}
    </p>
    <img src={srcImport355} height={srcImport355.height * 496 / srcImport355.width} {...{"alt":"Example single select interaction","width":"496","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"checkbox-select","size":"h3","className":"ws-title ws-h3"}}>
      {`Checkbox select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkbox select lists allow users to select one or more options from a known list of options, using checkboxes as a selection method. You may choose to have a badge display in the toggle to show how many items have been selected. A common use case for checkbox select lists is in a toolbar filter for a table or page.`}
    </p>
    <img src={srcImport356} height={srcImport356.height * 585 / srcImport356.width} {...{"alt":"Example of checkbox select in a toolbar","width":"585","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"multiple-select","size":"h3","className":"ws-title ws-h3"}}>
      {`Multiple select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multiple select lists allow users to select one or more options from a list, with the selected options marked with a blue check. It differs from the checkbox select in that each option selected by the user appears in the top display area as chips. Once the number of selections reaches a certain number, the regular chips will be replaced by a gray chip indicating how many more items were selected. The default number of selections is 3, but you may change this number based on your use case.`}
    </p>
    <img src={srcImport357} height={srcImport357.height * 585 / srcImport357.width} {...{"alt":"Example of multiple select list","width":"585","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-checkbox-select-versus-multiple-select","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use checkbox select versus multiple select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Both the checkbox select and multiple select lists allow users to select multiple options from a list. However, there are some points to take into consideration when deciding which one to use.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use checkbox select when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Horizontal space is limited.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It is not crucial for the user to see their selections in the toggle itself.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Using a select list inside a toolbar. Toolbars have limited space, and the user will already be able to see their selection as chips below the filter itself.`}
      </li>
    </ul>
    <img src={srcImport358} width={srcImport358.width} height={srcImport358.height} {...{"alt":"Example for using a checkbox select","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use multiple select when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Horizontal space is not limited.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`It is useful for the user to see their selections from the toggle itself.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In a form, where a user may benefit from being able to quickly scan their inputs before submitting.`}
      </li>
    </ul>
    <img src={srcImport359} height={srcImport359.height * 518 / srcImport359.width} {...{"alt":"Example for using a multiple select inside a form","width":"518","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"select-list-features","size":"h2","className":"ws-title ws-h2"}}>
      {`Select list features`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"select-list-with-typeahead","size":"h3","className":"ws-title ws-h3"}}>
      {`Select list with typeahead`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Typeahead allows users to narrow a displayed list of options by typing into the input field. Type ahead is  recommended for lists with more than ten options and is available for single and multiple select lists. Although the typeahead within toggle functionality does not exist for the checkbox select, there is an option to add a typeahead capability within the menu of items if needed, as seen in this `}
      <PatternflyThemeLink {...{"to":"/components/select/react#grouped-checkbox-input-with-filtering"}}>
        {`grouped checkbox input with filtering`}
      </PatternflyThemeLink>
      {` example.`}
    </p>
    <img src={srcImport360} height={srcImport360.height * 361 / srcImport360.width} {...{"alt":"Visual of a typeahead being used","width":"361","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When providing fewer than 5 options, you can use `}
      <PatternflyThemeLink {...{"to":"/components/radio/react"}}>
        {`radio buttons`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/checkbox/react"}}>
        {`checkboxes`}
      </PatternflyThemeLink>
      {` to display all options to the user simultaneously if you don’t have any space constraints.`}
    </p>
    <AutoLinkHeader {...{"id":"select-list-with-count","size":"h3","className":"ws-title ws-h3"}}>
      {`Select list with count`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Select lists support the option of adding a number count to checkbox selects, both (1) as a badge in the toggle to indicate number of items selected, or (2) at the item level to indicate the number of items that match a certain filter option.`}
    </p>
    <img src={srcImport361} height={srcImport361.height * 253 / srcImport361.width} {...{"alt":"select list with counts","width":"253","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"select-list-with-view-more","size":"h3","className":"ws-title ws-h3"}}>
      {`Select list with view more`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a select list contains more than 20 items, and the processing load may be too big to load all options at once, you have the option to add a “View more” link at the bottom of the menu.
When the user clicks View more, more options are loaded and “view more” is replaced with the next available set of options.`}
    </p>
    <img src={srcImport362} height={srcImport362.height * 757 / srcImport362.width} {...{"alt":"select list with view more button","width":"757","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"select-lists-with-description","size":"h3","className":"ws-title ws-h3"}}>
      {`Select lists with description`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Descriptive text may be added below each menu item, but only when the menu item label itself may not be clear to all users. Keep descriptive text to two lines or less.`}
    </p>
    <img src={srcImport363} height={srcImport363.height * 210 / srcImport363.width} {...{"alt":"select list with description","width":"210","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"select-lists-with-favorites","size":"h3","className":"ws-title ws-h3"}}>
      {`Select lists with favorites`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Favoriting can be associated with any select list option. In this case, making an item a favorite will duplicate it at the top of the menu. This may be useful when you have a long list of possible options to choose from and want to allow the user to “pin” a subset of items to the top of the select list.`}
    </p>
    <img src={srcImport364} height={srcImport364.height * 199 / srcImport364.width} {...{"alt":"select list with favorites","width":"199","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsSelectDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
