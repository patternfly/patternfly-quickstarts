import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport542 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/text-input.png';
import srcImport543 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/text-input-chips.png';
import srcImport544 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/single-select.png';
import srcImport545 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/single-type-ahead.png';
import srcImport546 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/checkbox-select.png';
import srcImport547 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/checkbox-select-add.png';
import srcImport548 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/checkbox-search.png';
import srcImport549 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-filter.png';
import srcImport550 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-filter-single.png';
import srcImport551 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-filter-checkbox.png';
import srcImport552 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/attribute-filter-date-picker.png';
import srcImport553 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/filter-group-2.png';
import srcImport554 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/toggle-group.png';
import srcImport555 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/faceted-grouped.png';
import srcImport556 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/chips.png';
import srcImport557 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/badge.png';
import srcImport558 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/type-ahead-single.png';
import srcImport559 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/error-table.png';
import srcImport560 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/mobile.png';
import srcImport561 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/ex-datalist.png';
import srcImport562 from '../../../content/design-guidelines/usage-and-behavior/filters/./img/ex-table.png';
const pageData = {
  "id": "Filters",
  "section": "guidelines",
  "source": "design-guidelines",
  "slug": "/guidelines/filters/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/usage-and-behavior/filters/filters.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filters`}
      </strong>
      {` allow users to narrow down content from data in tables, data lists or card views, among many others.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly provides a number of components that can be used in a variety of combinations to create a custom filtering experience. These elements may be used in a toolbar or on their own.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Filters can consist of one or multiple attributes.
Filters consisting of single attributes include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#text-entry-filters"}}>
          {`Text entry`}
        </PatternflyThemeLink>
      </li>
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
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Filters consisting of multiple attributes include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#attribute-value-filter"}}>
          {`Attribute-value`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#filter-group"}}>
          {`Filter group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#toggle-group"}}>
          {`Toggle group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#faceted-filter"}}>
          {`Faceted filter`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"variations-for-one-attribute","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations for one attribute`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are various ways to allow users to filter down content. Filtering methods include `}
      <PatternflyThemeLink {...{"to":"#text-entry-filters"}}>
        {`text entry filters`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#single-select"}}>
        {`single selects`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"#checkbox-select"}}>
        {`checkbox selects`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"text-entry-filters","size":"h3","className":"ws-title ws-h3"}}>
      {`Text entry filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A text entry filter provides the user with an input field to type in values that filter the view, whether or not their input is an exact match. The text entry filter uses the `}
      <PatternflyThemeLink {...{"to":"/components/search-input"}}>
        {`search input`}
      </PatternflyThemeLink>
      {` component which can be used with or without a button.`}
    </p>
    <img src={srcImport542} height={srcImport542.height * 880 / srcImport542.width} {...{"alt":"text input filters","width":"880","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Basic search input:`}
        </strong>
        {` Filters automatically, as soon as the user starts typing.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Search input with button:`}
        </strong>
        {` Filters on enter, or click of arrow button.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Note, the placeholder text in your text entry filter should indicate what the user can filter on. If the inputted string is constrained to filter a `}
      <strong>
        {`single column`}
      </strong>
      {`, the placeholder text of the input field should read “Filter by `}
      <em>
        {`attribute name`}
      </em>
      {`”. If the inputted string filters `}
      <strong>
        {`all columns`}
      </strong>
      {`, the placeholder text of the input field should read “Filter” instead.`}
    </p>
    <AutoLinkHeader {...{"id":"behavior","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Although both basic filter components have the same end result, they differ in when the search is triggered. With search inputs, the data in the table automatically filters as the user types. With input groups, the user must press enter to apply the search, and start filtering data in the table.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` With both basic filter components, the user can only filter by one input at a time.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a text entry filter when you’d like to give users the ability to search values in unbound data. Using the `}
      <em>
        {`search input`}
      </em>
      {` component is preferred, however, use the `}
      <em>
        {`input group`}
      </em>
      {` component when you are worried about performance issues with querying a large data set after every stroke.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Text entry filters support `}
      <PatternflyThemeLink {...{"to":"#filter-chip"}}>
        {`filter chips`}
      </PatternflyThemeLink>
      {`, but do not support `}
      <PatternflyThemeLink {...{"to":"#type-ahead"}}>
        {`type-ahead`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"#badge-count"}}>
        {`badges`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter chips`}
      </strong>
      {` are supported for text entry filters, but in general, we recommend not showing a chip to avoid redundancy, except for cases when text entry filters are used inside of `}
      <PatternflyThemeLink {...{"to":"#attribute-value-filter"}}>
        {`attribute-value filters`}
      </PatternflyThemeLink>
      {`. Since you can only search by one value at a time, the value will already be shown in the input field.`}
    </p>
    <img src={srcImport543} height={srcImport543.height * 880 / srcImport543.width} {...{"alt":"text input chips","width":"880","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"single-select","size":"h3","className":"ws-title ws-h3"}}>
      {`Single select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A single select provides the user with a fixed set of values from which they can only select one value. This filter type uses the `}
      <PatternflyThemeLink {...{"to":"/components/select/react#single"}}>
        {`single select component`}
      </PatternflyThemeLink>
      {`. If the single select filter is the only filter in the toolbar, it should have an “All options” menu item by default as a way to reset the filter (unless a selection must be made at all times). This “All” option will be selected by default, acting as an equivalent of no filter selected.`}
    </p>
    <img src={srcImport544} height={srcImport544.height * 880 / srcImport544.width} {...{"alt":"single select list filter","width":"880","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"behavior-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The user is presented with a list of values to choose from. A selected value is indicated with a blue checkmark to the right of the value. When a value is selected, the selection appears in the toggle.
When a user selects a different value, the initial selected value becomes unselected. The new value inherits the blue checkmark and is reflected in the toggle.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-0","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a single select list when you’d like users to only select one option from a `}
      <strong>
        {`predefined list`}
      </strong>
      {` of options.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Single selects can include `}
      <PatternflyThemeLink {...{"to":"#type-ahead"}}>
        {`type-aheads`}
      </PatternflyThemeLink>
      {` as an added feature.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Type-ahead`}
      </strong>
      {` functionality can be added to single selects, allowing users to input a search inside the toggle, filtering down from the list of menu options shown. This is especially useful for very long lists that would be inconvenient for the user to scroll through. Type-ahead is recommended for lists that are more than 10 items long.`}
    </p>
    <img src={srcImport545} height={srcImport545.height * 564 / srcImport545.width} {...{"alt":"type-ahead in a single select","width":"564","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Stand alone single selects in a toolbar do not use badge counts or filter chips since only one selection can be made, and the selection will already be apparent in the toggle.`}
    </p>
    <AutoLinkHeader {...{"id":"checkbox-select","size":"h3","className":"ws-title ws-h3"}}>
      {`Checkbox select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A checkbox select provides the user with a fixed set of values from which they can select multiple values. This filter type uses the `}
      <PatternflyThemeLink {...{"to":"/components/select/react#checkbox-input"}}>
        {`checkbox select component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport546} width={srcImport546.width} height={srcImport546.height} {...{"alt":"checkbox select","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"behavior-1","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The user is presented with a list of values to choose from. From this list, users may select or deselect one or more values at a time, with selections indicated by a blue checkbox preceding the value. The dropdown should remain open as the user makes selections until they click away or manually close it. Selected values will appear as filter chips underneath the filter, allowing the user to see their selections even when the toggle is collapsed.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-1","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a checkbox select for selecting multiple values from a predefined list. Multiple values will be combined using a logical “OR” operation.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features-1","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkbox select supported features include `}
      <PatternflyThemeLink {...{"to":"#filter-chip"}}>
        {`filter chips`}
      </PatternflyThemeLink>
      {`, and optionally, `}
      <PatternflyThemeLink {...{"to":"#badge-count"}}>
        {`badges`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport547} height={srcImport547.height * 880 / srcImport547.width} {...{"alt":"add ons for checkbox select","width":"880","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter chips`}
      </strong>
      {` are used as a way for users to view all their selections when the menu of selections is collapsed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Badges`}
      </strong>
      {` can be used in the checkbox select toggle to indicate how many selections have been made, although they are not required.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Although `}
      <strong>
        {`typeahead`}
      </strong>
      {` is not supported for checkbox selects, you can add a search input inside the menu, right above the items the user can select from. This will allow the user to filter down the list of options.`}
    </p>
    <img src={srcImport548} height={srcImport548.height * 475 / srcImport548.width} {...{"alt":"search in checkbox select","width":"475","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"variations-for-multiple-attributes","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations for multiple attributes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are multiple ways of combining variations for single attribute filters into multiple attribute filters, including `}
      <PatternflyThemeLink {...{"to":"#attribute-value-filter"}}>
        {`attribute-value filters`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#filter-group"}}>
        {`filter groups`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#toggle-group"}}>
        {`toggle groups`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"#faceted-filter"}}>
        {`faceted filters`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"attribute-value-filter","size":"h3","className":"ws-title ws-h3"}}>
      {`Attribute-value filter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The attribute-value filter gives users the ability to specify an attribute-value pair for filtering a data set.`}
    </p>
    <img src={srcImport549} width={srcImport549.width} height={srcImport549.height} {...{"alt":"Attribute filter with basic search","className":"ws-img"}}>
    </img>
    <img src={srcImport550} width={srcImport550.width} height={srcImport550.height} {...{"alt":"Attribute filter with single select","className":"ws-img"}}>
    </img>
    <img src={srcImport551} width={srcImport551.width} height={srcImport551.height} {...{"alt":"Attribute filter with checkbox","className":"ws-img"}}>
    </img>
    <img src={srcImport552} width={srcImport552.width} height={srcImport552.height} {...{"alt":"Attribute filter with date picker","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The following elements make up an attribute-value (textbox) filter.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Attribute selector:`}
          </strong>
          {` A select list that allows the user to select the attribute that they want to filter against.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Value selector:`}
          </strong>
          {` A value selector that is used to pass a value to the filter. The value selector can be any data input component. Common components used for value selection include:`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`a. A `}
          <strong>
            {`text entry field`}
          </strong>
          {` for entering a value from the keyboard. Use when you will enter the value as unbounded data (e.g. a name). When the text entry field is a basic search input, the value will appear as a chip automatically, and the search will start being validated. When the text entry field is a search input with a button, the value will appear as a chip and the search will be validated when the user presses the Enter key on their keyboard or the arrow button.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`b. A `}
          <strong>
            {`single select`}
          </strong>
          {` for selecting a value from a predefined list. This will work the same as a stand alone single select, however since any selection in an attribute filter will result in a chip, there is no need to have an “All” option as part of your menu, as users can reset their filters via the filter chips.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`c. A `}
          <strong>
            {`checkbox select`}
          </strong>
          {` for selecting multiple values from a predefined list. Multiple values will be combined using a logical "OR" operation.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`d. A `}
          <strong>
            {`date picker`}
          </strong>
          {` for selecting a date range. Use when the value you want to filter on is expressed as a date and/or time stamp.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"behavior-2","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To use an attribute-filter, the user must first select an `}
      <em>
        {`attribute`}
      </em>
      {` to filter on using the left toggle, followed by choosing the specific `}
      <em>
        {`values`}
      </em>
      {` to filter on using the right toggle. Whatever is selected in the attribute toggle will determine what is shown in the value toggle.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The value toggles behave as described in the `}
      <PatternflyThemeLink {...{"to":"#variations-for-one-attribute"}}>
        {`variations for one attribute`}
      </PatternflyThemeLink>
      {` section. The only difference for multiple attributes is that as users make filter selections using the attribute filter, each selection will `}
      <strong>
        {`always`}
      </strong>
      {` show up as a chip underneath the filters.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When using the attribute filter, a filter query is triggered whenever the user sets a new value. The following are triggers applicable to the variations of the attribute-value filter shown above.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Value selector`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Trigger`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Value selector"}}>
            <div>
              {`Search field`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Trigger"}}>
            <div>
              {`The user starts typing (for search input), presses the Enter key, or clicks the Search button (for input groups).`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Value selector"}}>
            <div>
              {`Select lists`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Trigger"}}>
            <div>
              {`The user selects or deselects an item in the list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Value selector"}}>
            <div>
              {`Date picker`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Trigger"}}>
            <div>
              {`The user selects a new date and/or time.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"when-to-use-2","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an attribute-value filter when users have multiple attributes to filter on. This filter should be used over a faceted filter when the attributes use different selection formats (for example, attribute A uses a single select, but attribute B uses a checkbox select).`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features-2","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Attribute-value filter features include `}
      <PatternflyThemeLink {...{"to":"#filter-chip"}}>
        {`filter chips`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#badge-count"}}>
        {`badges`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"#type-ahead"}}>
        {`type-ahead`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter chips`}
      </strong>
      {` are strongly recommended for attribute filters as a way for users to view all their selections when the user switches between attribute filters and when the menu of selections is collapsed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Badges`}
      </strong>
      {` can be used in a checkbox select value selector toggle to indicate how many selections have been made.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Type-ahead`}
      </strong>
      {` allows the user to narrow down their search and is supported for all value selection types except checkbox selects. Although typeahead is `}
      <strong>
        {`not supported`}
      </strong>
      {` for checkbox selects, you can add a search input inside the menu, above the items the user can select from.`}
    </p>
    <AutoLinkHeader {...{"id":"filter-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Filter group`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A filter group is a set of filters that appear side by side in a toolbar. This filter type uses the `}
      <PatternflyThemeLink {...{"to":"/components/select"}}>
        {`select list`}
      </PatternflyThemeLink>
      {` component.`}
    </p>
    <img src={srcImport553} width={srcImport553.width} height={srcImport553.height} {...{"alt":"filter group with multiple selects","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter group with only single select:`}
        </strong>
        {` Filter group made up of single selects. When an option is selected, it is reflected in the toggle. The default selection should be “All `}
        <em>
          {`attribute-name`}
        </em>
        {`” to indicate that no filter has been applied. This option also allows users to clear whatever filter they may have applied.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter group with multiple selection types:`}
        </strong>
        {` Filter group with single select, checkbox select, and date picker. When there are no selections, the toggle should contain the attribute name. When selections are made, the behavior will depend on the selection type. For single selects and date pickers, the selection will appear in the toggle. For checkbox selects, the attribute name will remain in the toggle, with the addition of a badge containing the number of filters selected. In all cases, selections should appear as filter chips underneath the filters.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-3","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a filter group when you only have a handful of attributes that you want to show. Only use this filter when space allows; otherwise consider using an attribute-value or faceted filter instead.`}
    </p>
    <AutoLinkHeader {...{"id":"behavior-3","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filter queries are applied when the user selects or deselects an item in the list or selects a date/time range. If the filter group is only made up of single selects, the selected filters will be shown inside each filter’s toggle. If the filter group contains multiple selects, the selected filters will be shown as filter chips underneath the filters. Additionally, you may also choose to display the selected number of items in each filter as a badge in their toggle. A clear filter action to the right of the filters will remove all applied filters.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features-3","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filter groups support `}
      <PatternflyThemeLink {...{"to":"#filter-chip"}}>
        {`filter chips`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#badge-count"}}>
        {`badges`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"#type-ahead"}}>
        {`type-ahead`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter chips`}
      </strong>
      {` are recommended for filter groups that have one or more checkbox selects. If the filter group only consists of single selects, there is no need to add filter chips as the count will always be one.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Badges`}
      </strong>
      {` can be used in a checkbox select toggle to indicate how many selections have been made for that attribute filter.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Type-ahead`}
      </strong>
      {` allows the user to narrow down their search and is supported for all value selection types except checkbox selects. Although typeahead is `}
      <strong>
        {`not supported`}
      </strong>
      {` for checkbox selects, you can add a search input inside the menu, above the items the user can select from.`}
    </p>
    <AutoLinkHeader {...{"id":"toggle-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle group`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A toggle group filter allows users to select from a set of predefined different elements to filter something on. This filter uses the `}
      <PatternflyThemeLink {...{"to":"/components/toggle-group"}}>
        {`toggle group`}
      </PatternflyThemeLink>
      {` component.`}
    </p>
    <img src={srcImport554} height={srcImport554.height * 541 / srcImport554.width} {...{"alt":"toggle group","width":"541","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-4","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a toggle group filter when you have few filter options that you want users to filter from, without hiding the options in a select list. A common usage for toggle groups is for filtering a chart view, to include or remove a data point from view.`}
    </p>
    <AutoLinkHeader {...{"id":"behavior-4","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Information will be shown to the user based on the toggles they select. If something is selected, it means the information is being filtered on.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features-4","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toggle groups do not use or support filter chips, badges, or type-ahead.`}
    </p>
    <AutoLinkHeader {...{"id":"faceted-filter","size":"h3","className":"ws-title ws-h3"}}>
      {`Faceted filter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Faceted filtering is useful when items can be described by categories according to multiple dimensions or facets. This filter usually uses the `}
      <PatternflyThemeLink {...{"to":"/components/select#grouped-checkbox-input"}}>
        {`grouped checkbox select list`}
      </PatternflyThemeLink>
      {` component.`}
    </p>
    <img src={srcImport555} width={srcImport555.width} height={srcImport555.height} {...{"alt":"faceted filter with checkbox","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The following elements can be used in a faceted (checkbox) filter:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Facets:`}
        </strong>
        {` Different categories containing filter values, such as `}
        <em>
          {`Status`}
        </em>
        {` or `}
        <em>
          {`Vendor`}
        </em>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Values:`}
        </strong>
        {` What users might filter on. Each category is made up of checkbox selects, where each category can have multiple options selected. Never include two selection types within the same faceted filter.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter chips:`}
        </strong>
        {`  Records of each selection, shown when the options menu is collapsed.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` Consider adding an “Other” option to attribute lists where items may not fall under any of the specified values.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-5","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a faceted filter when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The user is browsing a set of items without robust knowledge of what is in the set.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The important characteristics of the items to be filtered are mostly traits with a small and discrete set of choices like color, status, availability, or distributer rather than arbitrary text or numeric values such as name, date created, or amount of available space.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The facets to filter from are all checkbox select`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Do not use`}
      </strong>
      {` a faceted filter when the important characteristics of the items are mostly open-ended values and/or have a mix of single and multiple select. Additionally, if space is limited, consider using an `}
      <PatternflyThemeLink {...{"to":"#attribute-value-filter"}}>
        {`attribute-value`}
      </PatternflyThemeLink>
      {` filter instead.`}
    </p>
    <AutoLinkHeader {...{"id":"behavior-5","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`New filters are applied or removed as the user selects or deselects values using checkboxes. A badge count can optionally be added to the toggle to indicate the number of selections made in the filter. Selections will appear as filter chips underneath the filter. Note that there is an "AND" relationship between facets, and an "OR" relationship between values.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-features-5","size":"h4","className":"ws-title ws-h4"}}>
      {`Supported features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Faceted filters support `}
      <PatternflyThemeLink {...{"to":"#filter-chip"}}>
        {`filter chips`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#badge-count"}}>
        {`badges`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"#type-ahead"}}>
        {`type-ahead`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter chips`}
      </strong>
      {` are recommended as a way for users to see their selections when the menu is closed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Badges`}
      </strong>
      {` can be used at the toggle level to indicate how many selections were made within the menu.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Type-ahead`}
      </strong>
      {` can be used as a way for users to narrow down the list of options when looking for the value they want to select.`}
    </p>
    <AutoLinkHeader {...{"id":"filter-features","size":"h2","className":"ws-title ws-h2"}}>
      {`Filter features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Different attributes can be added to different filters. These include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#filter-chip"}}>
          {`Filter chips`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#badge-count"}}>
          {`Badge count`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#type-ahead"}}>
          {`Type-ahead`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`This table describes which features are `}
      <strong>
        {`supported`}
      </strong>
      {` for each filter type. Note that just because a feature is supported, does not mean it must be used in your filters.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Filter chips`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Type-ahead`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Badge count`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Text entry`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`Yes (if within an attribute filter)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`No`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Single select`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`Yes (if within an attribute filter)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`No`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Checkbox select`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`No (but you can have a search inside the menu)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`Yes`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Attribute-value`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`Yes (except for checkbox selects)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`Yes (only for checkbox select)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Filter group`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`Yes (only for single selects)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`Yes (only for checkbox selects)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Toggle group`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`No`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`No`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`No`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"       "}}>
            <div>
              <strong>
                {`Faceted filter`}
              </strong>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Filter chips"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type-ahead"}}>
            <div>
              {`Yes`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Badge count"}}>
            <div>
              {`Yes`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"filter-chip","size":"h3","className":"ws-title ws-h3"}}>
      {`Filter chip`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When filters are applied, filter chips may be used to provide feedback to the user on what they are filtering on.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Filter chips may be used to show boolean relationships between different attribute-value pairs. Individual filter chips can be removed by clicking the ‘x’ in each chip, and entire filter groups can be removed using the group ‘x’.`}
    </p>
    <img src={srcImport556} width={srcImport556.width} height={srcImport556.height} {...{"alt":"chip groups","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Follow these best practices for using filter chips:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Filters between attribute categories should be combined with a boolean “AND” operator.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Filters within a category are shown grouped together and should be combined with a boolean “OR” operator.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Example:`}
            </strong>
            {` An item must be Stopped “OR” Down “AND” have Samsung “OR” Hewlett-Packard as a vendor.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the list is not otherwise sorted, items that satisfy a higher number of filters should be shown higher up the page.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Example:`}
            </strong>
            {` Items that have both Samsung and Hewlett-Packard as vendors are listed before items that only have Samsung or Hewlett-Packard.
In this example, the result will be to show all items that have a status of stopped “OR” down “AND” are from vendor Samsung “OR” Hewlett-Packard “AND” match the keyword.`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"when-to-use-6","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use filter chips when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The value of the applied filter is not shown on the control itself.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There is more than one value for a given facet.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There are boolean filter rules being applied.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don’t use`}
      </strong>
      {` filter chips when the current settings of the controls are sufficient to convey applied filters.`}
    </p>
    <AutoLinkHeader {...{"id":"badge-count","size":"h3","className":"ws-title ws-h3"}}>
      {`Badge count`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Badges are used to indicate a count. In filters, badges can be used in the following ways:`}
    </p>
    <AutoLinkHeader {...{"id":"badge-in-checkbox-select","size":"h4","className":"ws-title ws-h4"}}>
      {`Badge in checkbox select`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You may opt to use a badge in a checkbox select to indicate to the user how many items they have selected when the toggle is collapsed.`}
    </p>
    <img src={srcImport557} width={srcImport557.width} height={srcImport557.height} {...{"alt":"badge","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"type-ahead","size":"h3","className":"ws-title ws-h3"}}>
      {`Type-ahead`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Adding type-ahead capabilities to your filters is useful when there is a large number of items to select from the filter dropdown. Users can quickly find the value they would like to filter by typing in the field.`}
    </p>
    <img src={srcImport558} width={srcImport558.width} height={srcImport558.height} {...{"alt":"type ahead example","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Type-ahead is supported in single selects, faceted filters that can handle one input. Users may scroll through the dropdown list or type in the box to find the desired option.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-7","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a type-ahead filter when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A dropdown list has a large number of options. In these cases, type-ahead can help a user find their desired option in less time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Type-ahead filters can be used in place of a textbox filter, in certain cases. For example, when filtering by name, using a type-ahead filter will ensure that only valid filters surface. This will avoid the need to present an empty state when invalid values are entered.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"behavior-6","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A filter query is triggered whenever a new value is set by the user. The following are triggers applicable to the variations of the type-ahead filter shown in the previous example.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Value selector `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Trigger`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Value selector                      "}}>
            <div>
              {`Search field `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Trigger"}}>
            <div>
              {`The user types in an input and/or presses the Enter key after typing in the input field. This action will create a filter for the first value shown in the filtered list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Value selector                      "}}>
            <div>
              {`Select lists `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
              {` `}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Trigger"}}>
            <div>
              {`The user selects or deselects an item in the list.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"filter-validation","size":"h2","className":"ws-title ws-h2"}}>
      {`Filter validation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your filter has limitations, you may present an error state on your filter toggle to communicate these limitations to users. Examples of instances where you may want to use filter validation include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In cases where free-form text input validation is needed`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When there is a limit on how many filters a user can apply at a time`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When there is a limit on how many options can be selected for one attribute`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`When using error validation in a filter, include a tooltip on hover with an explanation of what went wrong.`}
    </p>
    <img src={srcImport559} width={srcImport559.width} height={srcImport559.height} {...{"alt":"Example of filter validation","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"layout-considerations","size":"h2","className":"ws-title ws-h2"}}>
      {`Layout considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filters may be included in a `}
      <PatternflyThemeLink {...{"to":"/components/toolbar"}}>
        {`toolbar`}
      </PatternflyThemeLink>
      {` and are usually left aligned. There may be more than one filter used in a single toolbar, and in some cases, custom filters may make up a full toolbar. Filters may also be used alone outside of a toolbar.`}
    </p>
    <AutoLinkHeader {...{"id":"mobile-considerations","size":"h2","className":"ws-title ws-h2"}}>
      {`Mobile considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In responsive views, filters may be hidden within the filter icon. On click, the toolbar will expand to reveal the filter. If there are multiple filter elements, they will be collapsed into a single faceted filter. Read more about toolbars in mobile views in `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines#the-toolbar-on-mobile"}}>
        {`the toolbar design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport560} height={srcImport560.height * 880 / srcImport560.width} {...{"alt":"mobile view","width":"880","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Filter group in data list toolbar`}
      </strong>
      {`
`}
      <img src={srcImport561} height={srcImport561.height * 880 / srcImport561.width} {...{"alt":"example of filter group in data list","width":"880","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Attribute filter in table toolbar`}
      </strong>
      {`
`}
      <img src={srcImport562} height={srcImport562.height * 880 / srcImport562.width} {...{"alt":"example of attribute value filter in table ","width":"880","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"filters","size":"h3","className":"ws-title ws-h3"}}>
      {`Filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Filter placeholder text in input fields should read “Filter by `}
      {`[attribute name]`}
      {`.” Write all placeholder text in sentence case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Examples:`}
      </strong>
      {` `}
      <em>
        {`Filter by status`}
      </em>
      {`, `}
      <em>
        {`Filter by vendor`}
      </em>
    </p>
    <AutoLinkHeader {...{"id":"clearing-filters","size":"h3","className":"ws-title ws-h3"}}>
      {`Clearing filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The option to clear all filters will be displayed after the last filter chip. It should read “Clear filters” in sentence case. When clicked, it should remove all applied filters and collapse the toolbar back into a single row.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'GuidelinesFiltersDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
