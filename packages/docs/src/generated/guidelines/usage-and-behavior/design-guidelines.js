import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Usage and behavior",
  "section": "guidelines",
  "source": "design-guidelines",
  "slug": "/guidelines/usage-and-behavior/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/usage-and-behavior/usage-and-behavior.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`As you design with PatternFly, you might encounter common use cases where multiple components apply. This page gives advice for which component to use in these situations and shares where to find more detailed usage guidelines.`}
    </p>
    <AutoLinkHeader {...{"id":"displaying-structured-data","size":"h2","className":"ws-title ws-h2"}}>
      {`Displaying structured data`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Structured data includes any information that is stored in a database or similar regular data structure. The most common ways of presenting structured data are to display it in either a list or a table where rows correspond to records in the database. PatternFly supports two controls for displaying this type of data: the `}
      <PatternflyThemeLink {...{"to":"/components/data-list"}}>
        {`data list`}
      </PatternflyThemeLink>
      {` and the `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Tables are built from a standard tabular structure of rows and columns. Data lists support any valid HTML layout inside of a row and therefore allow more formatting flexibility.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/table"}}>
                {`Table`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/data-list"}}>
                {`Data list`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to display data in a grid with column headings`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Table"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`Data does not easily fit into a grid or you want multiple lines of data in a row`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Table"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to display non-text information like images or charts`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Table"}}>
            <div>
              {`✔ `}
              {`[1]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`All rows don’t have the same format`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Table"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[1]`}
      </strong>
      {` Tables will support inclusion of graphical objects within a cell, but this approach is only recommended when small graphical or media objects are needed.`}
    </p>
    <AutoLinkHeader {...{"id":"providing-contextual-help-on-a-page","size":"h2","className":"ws-title ws-h2"}}>
      {`Providing contextual help on a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Contextual help can include any on-screen elements intended to guide the user in getting additional information to help them complete a task. Components for displaying contextual help on a page can include `}
      <PatternflyThemeLink {...{"to":"/components/tooltip"}}>
        {`tooltips`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/popover"}}>
        {`popovers`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"/components/hint"}}>
        {`hints`}
      </PatternflyThemeLink>
      {`. Tooltips display whenever the user hovers over an element. Popovers can be shown on hover or click, can contain any HTML content, and are persistent. Hints are static elements that appear inline with other content on a page.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/tooltip"}}>
                {`Tooltip`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/popover"}}>
                {`Popover`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/hint"}}>
                {`Hint`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to provide a short (no more than 1-2 lines) explanation of new or unfamiliar UI elements as a simple text string that is only shown “on-demand.”`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Tooltip"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Hint"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to include formatted text and/or interactive elements in your message body.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Tooltip"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Hint"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want the information to persist until the user dismisses it.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Tooltip"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Hint"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want the information to be announced by a screen reader whenever the user tabs to an element.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Tooltip"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔ `}
              {`[1]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Hint"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to present additional information that might not be necessary or relevant to all users.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Tooltip"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Hint"}}>
            <div>
              {`✔`}
              {`[2]`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[1]`}
      </strong>
      {` By default, popovers are only triggered when the user clicks on an element and therefore will not be read by a screen reader when tabbing through an interface. If a popover is triggered on hover (optional behavior), it will behave like a tooltip and its content will be displayed whenever the keyboard user tabs to the trigger element.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[2]`}
      </strong>
      {` Hint could be used to convey information to advanced users (“pro-tips,” for example). However because a hint adds static content directly to the page, consider whether it’s important for this information to be shown at all times.`}
    </p>
    <AutoLinkHeader {...{"id":"progressive-disclosure","size":"h2","className":"ws-title ws-h2"}}>
      {`Progressive disclosure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Progressive disclosure is the practice of hiding information or providing it only when needed in order to simplify a user interface. PatternFly supports several components that can be used to progressively disclose information on a page. The `}
      <PatternflyThemeLink {...{"to":"/components/accordion"}}>
        {`accordion`}
      </PatternflyThemeLink>
      {` component allows content to be placed in stackable, expandable containers so that content can be hidden from view to simplify presentation and reduce the need for scrolling. `}
      <PatternflyThemeLink {...{"to":"/components/expandable-section"}}>
        {`Expandable sections`}
      </PatternflyThemeLink>
      {` allow designers to hide a single block of content or settings behind a show/hide link. `}
      <PatternflyThemeLink {...{"to":"/components/form"}}>
        {`Expandable field groups`}
      </PatternflyThemeLink>
      {` allow designers to group form elements into expandable containers.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/accordion"}}>
                {`Accordion`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/expandable-section"}}>
                {`Expandable section`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/form"}}>
                {`Field groups`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to group a list of actions, links, or other data into expandable groups.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Accordion"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Expandable section"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Field groups"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to hide advanced or seldomly used options within a form.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Accordion"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Expandable section"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Field groups"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to give the user the ability to show or hide chunks of information on a long scrolling page.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Accordion"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Expandable section"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Field groups"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"inputting-data-on-forms","size":"h2","className":"ws-title ws-h2"}}>
      {`Inputting data on forms`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Data input controls allow the user to input information into a form. There are two types of input controls for bound and unbound input. Bound input controls are constrained to only input data within a defined range. Examples of bound input controls include `}
      <PatternflyThemeLink {...{"to":"/components/slider"}}>
        {`sliders`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/number-input"}}>
        {`number inputs`}
      </PatternflyThemeLink>
      {`. Unbound controls do not enforce constraints on entry and include `}
      <PatternflyThemeLink {...{"to":"/components/text-input"}}>
        {`text inputs`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/text-area"}}>
        {`text area`}
      </PatternflyThemeLink>
      {` controls.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/text-input"}}>
                {`Text input`}
              </PatternflyThemeLink>
              {` or `}
              <PatternflyThemeLink {...{"to":"/components/text-area"}}>
                {`text area`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/number-input"}}>
                {`Number input`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/slider"}}>
                {`Slider`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to enter text from the keyboard. Possible values are alpha-numeric, unconstrained, or dependent on context.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Text input or text area"}}>
            <div>
              {`✔ `}
              {`[1]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Number input"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Slider"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to constrain the input of numeric data to a specified range.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Text input or text area"}}>
            <div>
              {`✔ `}
              {`[2]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Number input"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Slider"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to optimize numeric data entry for direct manipulation by touch or using the mouse over the keyboard.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Text input or text area"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Number input"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Slider"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`It’s useful for users to visualize where numeric input falls within the range of possible values.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Text input or text area"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Number input"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Slider"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[1]`}
      </strong>
      {` If data will always be constrained to a single line, use a text input, otherwise use a text area component for multi-line input.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[2]`}
      </strong>
      {` It’s possible to use a standard text input for this use case and validate the entered value, but using either a number input or slider will be a more direct way to constrain the values that a user can input.`}
    </p>
    <AutoLinkHeader {...{"id":"selecting-between-options-on-a-form","size":"h2","className":"ws-title ws-h2"}}>
      {`Selecting between options on a form`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Depending on the nature of options being presented, `}
      <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
        {`checkbox`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/radio"}}>
        {`radio`}
      </PatternflyThemeLink>
      {`, or `}
      <PatternflyThemeLink {...{"to":"/components/switch"}}>
        {`switch`}
      </PatternflyThemeLink>
      {` components may be used. Checkboxes are used to select one or more items from a list of options. Radio buttons are used to select from a set of mutually exclusive options. Switches indicate the state of a binary setting or object — on or off, enabled or disabled.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
                {`Checkbox`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/radio"}}>
                {`Radio`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/switch"}}>
                {`Switch`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user wants to select one or more items from a list of items.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Checkbox"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Radio"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Switch"}}>
            <div>
              {`✔ `}
              {`[1]`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user wants to select from a set of mutually exclusive options.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Checkbox"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Radio"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Switch"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user wants to enable an option or feature.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Checkbox"}}>
            <div>
              {`✔ `}
              {`[2]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Radio"}}>
            <div>
              {`✔ `}
              {`[3]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Switch"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[1]`}
      </strong>
      {` Switches are sometimes used in place of checkboxes in this use case. The advantage of a switch is that it is more mobile friendly as it provides a larger touch target than the standard checkbox.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[2]`}
      </strong>
      {` Checkboxes are often used to enable or disable (turn on or off) a feature in software. They provide a concise way to expose on/off settings while being less explicit than a switch.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[3]`}
      </strong>
      {` You could use two radio buttons to support choosing between on/off or enabled/disabled options, however this approach uses more space and is not recommended unless it’s important to make both labeled options visible at the same time.`}
    </p>
    <AutoLinkHeader {...{"id":"displaying-progress","size":"h2","className":"ws-title ws-h2"}}>
      {`Displaying progress`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It’s important to display progress as a method of providing user feedback for operations that will take more than a few seconds. Use the `}
      <PatternflyThemeLink {...{"to":"/components/progress"}}>
        {`progress`}
      </PatternflyThemeLink>
      {` component to provide feedback on the percentage of completion for a process or task. Use the `}
      <PatternflyThemeLink {...{"to":"/components/spinner"}}>
        {`spinner`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/skeleton"}}>
        {`skeleton`}
      </PatternflyThemeLink>
      {` components to just indicate activity while the user is waiting for an action to complete.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/progress"}}>
                {`Progress`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/spinner"}}>
                {`Spinner`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/skeleton"}}>
                {`Skeleton`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user is waiting for a process to complete, but the time left until completion is not known.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Progress"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Spinner"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Skeleton"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user is waiting for a process to complete, but the time left until completion is known.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Progress"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Spinner"}}>
            <div>
              {`✔ `}
              {`[1]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Skeleton"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user is progressing through a step-by-step task and you want to reflect where they are in the process.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Progress"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Spinner"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Skeleton"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`The user is waiting for a page to load.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Progress"}}>
            <div>
              {`✔ `}
              {`[2]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Spinner"}}>
            <div>
              {`✔ `}
              {`[3]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Skeleton"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[1]`}
      </strong>
      {` Although a spinner could be used in this situation, using a progress component is always the preferred method when it is possible to estimate the time to completion or the percentage of the task that is done.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[2]`}
      </strong>
      {` Progress bars are not typically used during page loading, but could be used together with skeleton loading if you want to provide the user with more information about time to completion.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[3]`}
      </strong>
      {` Spinners may be used to provide feedback on page loading when the shape of the data is not known.`}
    </p>
    <AutoLinkHeader {...{"id":"displaying-object-details-in-context","size":"h2","className":"ws-title ws-h2"}}>
      {`Displaying object details in context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It is often necessary to display more details about an object listed in a summary view like a list or a table. This can be accomplished by drilling-down into a new page or presenting details on the same page (in context). Three approaches can be used for in-context presentation of object details. Both the `}
      <PatternflyThemeLink {...{"to":"/components/data-list"}}>
        {`data list`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table`}
      </PatternflyThemeLink>
      {` components support expandable rows for displaying object details directly in the list or table. The `}
      <PatternflyThemeLink {...{"to":"/components/drawer"}}>
        {`drawer`}
      </PatternflyThemeLink>
      {` component can also be used to create a side-by-side primary-detail view. `}
      <PatternflyThemeLink {...{"to":"/components/popover"}}>
        {`Popovers`}
      </PatternflyThemeLink>
      {` can also be useful for displaying details about an object in a list or table.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/data-list"}}>
                {`Data list`}
              </PatternflyThemeLink>
              {` or `}
              <PatternflyThemeLink {...{"to":"/components/table"}}>
                {`table`}
              </PatternflyThemeLink>
              {` row expansion`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/drawer"}}>
                {`Drawer`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/popover"}}>
                {`Popover`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to view details of multiple objects at the same time for comparison.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list or table row expansion"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Drawer"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`Your detailed data is best presented in a horizontal format.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list or table row expansion"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Drawer"}}>
            <div>
              {`✔ `}
              {`[1]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`Your detailed data is best presented in a vertical format.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list or table row expansion"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Drawer"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You have only a small amount of detailed data to show.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list or table row expansion"}}>
            <div>
              {`✔ `}
              {`[2]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Drawer"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You don’t want to cover other information while displaying details.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Data list or table row expansion"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Drawer"}}>
            <div>
              {`✔ `}
              {`[3]`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Popover"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[1]`}
      </strong>
      {` Drawers can be attached to either the left, right, or bottom edge of the parent container. To present horizontal data, use a bottom/horizontal drawer to create a top-bottom primary-detail view.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[2]`}
      </strong>
      {` Row expansions and drawers can accommodate any amount of information. Showing a small amount of data within a row expansion or drawer may waste space because each presentation type will consume the full width or height of its parent container. Popovers will adjust to the size and shape of their contents.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`[3]`}
      </strong>
      {` Both inline and overlay drawers are available. If you don’t want to cover content on a page, we recommend the `}
      <PatternflyThemeLink {...{"to":"/components/drawer#basic-inline"}}>
        {`inline drawer`}
      </PatternflyThemeLink>
      {` variation.`}
    </p>
    <AutoLinkHeader {...{"id":"dropdown-menus-for-actions-and-selections","size":"h2","className":"ws-title ws-h2"}}>
      {`Dropdown menus for actions and selections`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly provides three types of dropdown components for selecting between items in a menu. The `}
      <PatternflyThemeLink {...{"to":"/components/select"}}>
        {`select`}
      </PatternflyThemeLink>
      {` component is used to select one or more values from a list. The `}
      <PatternflyThemeLink {...{"to":"/components/options-menu"}}>
        {`options menu`}
      </PatternflyThemeLink>
      {` is similar to a select but is more often used for selecting between optional settings. `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`Dropdowns`}
      </PatternflyThemeLink>
      {` are used to expose a list of possible actions.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case`}
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/select"}}>
                {`Select`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/options-menu"}}>
                {`Options menu`}
              </PatternflyThemeLink>
            </div>
          </th>
          <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
                {`Dropdown`}
              </PatternflyThemeLink>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to select a value or multiple values from a list.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Select"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Options menu"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Dropdown"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to select filter terms from a list.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Select"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Options menu"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Dropdown"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to make the selected value visible when the menu is closed.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Select"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Options menu"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Dropdown"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to select options from one or more lists (sorting options, for example).`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Select"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Options menu"}}>
            <div>
              {`✔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Dropdown"}}>
            <div>
              {`⛔`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Use case"}}>
            <div>
              {`You want to expose a list of commands or actions in a limited space.`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Select"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Options menu"}}>
            <div>
              {`⛔`}
            </div>
          </td>
          <td {...{"align":"center","role":"cell","data-label":"Dropdown"}}>
            <div>
              {`✔`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'GuidelinesUsageAndBehaviorDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
