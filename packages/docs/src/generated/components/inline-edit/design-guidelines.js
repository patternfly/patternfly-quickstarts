import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport242 from '../../../content/design-guidelines/components/inline-edit/./img/inline-edit.gif';
import srcImport243 from '../../../content/design-guidelines/components/inline-edit/./img/elements-form-inline-edit.png';
import srcImport244 from '../../../content/design-guidelines/components/inline-edit/./img/specific-field-edit.png';
import srcImport245 from '../../../content/design-guidelines/components/inline-edit/./img/full-page-edit.png';
import srcImport246 from '../../../content/design-guidelines/components/inline-edit/./img/table-inline-edit-elements.png';
import srcImport247 from '../../../content/design-guidelines/components/inline-edit/./img/row-editing.png';
const pageData = {
  "id": "Inline edit",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/inline-edit/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/inline-edit/inline-edit.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`inline edit`}
      </strong>
      {` component allows users to switch between a read-only view and an edit view of `}
      <PatternflyThemeLink {...{"to":"/components/description-list"}}>
        {`description lists`}
      </PatternflyThemeLink>
      {`, page text elements, or `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`tables`}
      </PatternflyThemeLink>
      {` as needed. Inline editing saves the user from opening a modal window or redirecting to a separate edit page so that they can edit in context of their current view.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use inline edit when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`All editable elements can be viewed within the row or expanded row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The data needs to be updated frequently.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Don’t use inline edit when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The editing is the primary function of the view. For example, in an edit modal.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport242} {...{"width":"960","height":"540","className":"ws-img"}}>
      </img>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports 2 types of inline editing:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#page-inline-edit"}}>
            {`Page inline edit`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` enables the user to edit a `}
        <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#table-inline-edit"}}>
          {`specific field`}
        </PatternflyThemeLink>
        {` in a details page or in a `}
        <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#full-page-edit"}}>
          {`full page`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#table-inline-edit"}}>
            {`Table inline edit`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` enables the user to `}
        <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#row-editing"}}>
          {`edit elements in a row`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"page-inline-edit","size":"h2","className":"ws-title ws-h2"}}>
      {`Page inline edit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 2 types of inline edit for forms:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#field-specific-edit"}}>
            {`Field-specific edit`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` allows users to make changes to one field at a time`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#full-page-edit"}}>
            {`Full page edit`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` allows users to make multiple changes at a time, in a larger area with more fields`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"elements","size":"h3","className":"ws-title ws-h3"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport243} height={srcImport243.height * 785 / srcImport243.width} {...{"alt":"Form inline edit elements","width":"785","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle:`}
        </strong>
        {` Indicates the edit action`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/tooltip"}}>
            {`Tooltip`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Provides a short description of the inline edit toggle`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action group:`}
        </strong>
        {` Allows the user to save or cancel changes`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form elements:`}
        </strong>
        {` Examples include `}
        <PatternflyThemeLink {...{"to":"/components/text-input"}}>
          {`text input`}
        </PatternflyThemeLink>
        {` or `}
        <PatternflyThemeLink {...{"to":"/components/text-area"}}>
          {`text area`}
        </PatternflyThemeLink>
        {`. See `}
        <PatternflyThemeLink {...{"to":"/components/form"}}>
          {`forms`}
        </PatternflyThemeLink>
        {` for more information about form elements.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"field-specific-edit","size":"h3","className":"ws-title ws-h3"}}>
      {`Field-specific edit`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use field-specific edit when you want to allow users to make small edits to specific fields in a page.`}
    </p>
    <AutoLinkHeader {...{"id":"how-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`How to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The pencil toggle is placed inline with the header for fields that are editable. Clicking on this toggle allows the user to edit inline, or can trigger a modal for more complex edits. In edit mode:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`The check icon`}
        </strong>
        {` saves the changes and switches the item back to read-only mode.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`The close icon`}
        </strong>
        {` returns to the read-only mode without saving new data.`}
      </li>
    </ul>
    <img src={srcImport244} height={srcImport244.height * 1013 / srcImport244.width} {...{"alt":"Specific field edit","width":"1013","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"full-page-edit","size":"h3","className":"ws-title ws-h3"}}>
      {`Full page edit`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"when-to-use-0","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the full-page edit when you want to allow users to edit a larger area with many editable elements all at once.`}
    </p>
    <AutoLinkHeader {...{"id":"how-to-use-0","size":"h4","className":"ws-title ws-h4"}}>
      {`How to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Any editing is triggered by an edit link for the whole section. All edits should be easily done in the context of the page. Clicking the pencil icon toggles the page or description list into edit mode.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Non Editable fields`}
        </strong>
        {`, for example, Name, and Labels should use read-only styling.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Editable fields`}
        </strong>
        {` should function like any form.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Users can save or cancel changes using the ‘Save’ or ‘Cancel’ button. Both actions return a page or description list to the read-only mode.`}
      </li>
    </ul>
    <img src={srcImport245} height={srcImport245.height * 926 / srcImport245.width} {...{"alt":"Full page edit","width":"926","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"table-inline-edit","size":"h2","className":"ws-title ws-h2"}}>
      {`Table inline edit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There is 1 type of inline edit for tables:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/inline-edit/design-guidelines#row-editing"}}>
            {`Row edit`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` allows for making changes to 1 editable row in the table`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"elements-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport246} height={srcImport246.height * 1010 / srcImport246.width} {...{"alt":"Table inline edit elements","width":"1010","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Editable inactive row:`}
        </strong>
        {` Inactive row with read-only styling`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Editable active row:`}
        </strong>
        {` Ability to edit form components is enabled`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Disabled input field:`}
        </strong>
        {` Unclickable and unusable input field`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Editable input field:`}
        </strong>
        {` Changes for this input are allowed`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Active input:`}
        </strong>
        {` Selected input field with new content`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Action group:`}
        </strong>
        {` Allows user to save or cancel changes`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/components/tooltip"}}>
            {`Tooltip`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Provides a short description of the inline edit toggle`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle:`}
        </strong>
        {` Indicates the edit action`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"row-editing","size":"h3","className":"ws-title ws-h3"}}>
      {`Row editing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Row editing allows a user to edit items that are visible in the table by having a pencil toggle pinned to the right side, with the `}
      <PatternflyThemeLink {...{"to":"/components/dropdown#with-kebab"}}>
        {`kebab`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-1","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use row editing when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You need to change the data in a table.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The data is not dependent on each other. For example, changing the data in a row five will not affect row three.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"how-to-use-1","size":"h4","className":"ws-title ws-h4"}}>
      {`How to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Clicking the pencil icon toggles the particular table row into edit mode. In the edit mode:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The kebab is replaced with a check icon for saving and a close icon for canceling. Both icons should be grey until changes have begun to be made.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Once changes begin, the check icon turns blue to increase the visibility of the save action.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`The check icon button`}
        </strong>
        {` submits the changes and switches the row back to the read-only mode.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`The close icon`}
        </strong>
        {` returns to read-only mode without saving new data.`}
      </li>
    </ul>
    <img src={srcImport247} height={srcImport247.height * 1210 / srcImport247.width} {...{"alt":"Row editing","width":"1210","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Some are elements may be difficult to edit in a table. You can make them editable in a `}
      <PatternflyThemeLink {...{"to":"/components/modal"}}>
        {`modal`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsInlineEditDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
