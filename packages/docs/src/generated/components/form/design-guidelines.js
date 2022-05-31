import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport215 from '../../../content/design-guidelines/components/form/./img/form-elements.png';
import srcImport216 from '../../../content/design-guidelines/components/form/./img/top-labels.png';
import srcImport217 from '../../../content/design-guidelines/components/form/./img/left-labels.png';
import srcImport218 from '../../../content/design-guidelines/components/form/./img/data-inputs.png';
import srcImport219 from '../../../content/design-guidelines/components/form/./img/horizontal-list.png';
import srcImport220 from '../../../content/design-guidelines/components/form/./img/vertical-list.png';
import srcImport221 from '../../../content/design-guidelines/components/form/./img/multicolumn-list.png';
import srcImport222 from '../../../content/design-guidelines/components/form/./img/form-sections.png';
import srcImport223 from '../../../content/design-guidelines/components/form/./img/field-groups.png';
import srcImport224 from '../../../content/design-guidelines/components/form/./img/required-field.png';
import srcImport225 from '../../../content/design-guidelines/components/form/./img/required-optional-forms.png';
import srcImport226 from '../../../content/design-guidelines/components/form/./img/placeholder-text.png';
import srcImport227 from '../../../content/design-guidelines/components/form/./img/placeholder-example.png';
import srcImport228 from '../../../content/design-guidelines/components/form/./img/placeholder-format.png';
import srcImport229 from '../../../content/design-guidelines/components/form/./img/helper-text.png';
import srcImport230 from '../../../content/design-guidelines/components/form/./img/popover.png';
import srcImport231 from '../../../content/design-guidelines/components/form/./img/progressive-disclosure.png';
import srcImport232 from '../../../content/design-guidelines/components/form/./img/error-message.png';
import srcImport233 from '../../../content/design-guidelines/components/form/./img/validation-submission.png';
import srcImport234 from '../../../content/design-guidelines/components/form/./img/form-spacing.png';
import srcImport235 from '../../../content/design-guidelines/components/form/./img/button-placement.png';
import srcImport236 from '../../../content/design-guidelines/components/form/./img/page-form.png';
import srcImport237 from '../../../content/design-guidelines/components/form/./img/wizard-form.png';
import srcImport238 from '../../../content/design-guidelines/components/form/./img/modal-form.png';
import srcImport239 from '../../../content/design-guidelines/components/form/./img/multi-column-eg.png';
import srcImport240 from '../../../content/design-guidelines/components/form/./img/multi-column-read.png';
const pageData = {
  "id": "Form",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/form/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/form/forms.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`form`}
      </strong>
      {` is a group of elements used to collect information from a user in a variety of contexts including in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for completion like logging in, registering, configuring settings, or completing surveys.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use forms to accomplish tasks reliant on user-inputted information like logging in, registering for accounts or services, configuring settings, or completing surveys.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport215} height={srcImport215.height * 459 / srcImport215.width} {...{"alt":"Example of a form with four typical form elements called out corresponding to forthcoming elements list","width":"459","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Most forms contain four basic elements:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Labels:`}
        </strong>
        {` Indicate desired information for each field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text inputs:`}
        </strong>
        {` Provide space for users to enter text.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data inputs:`}
        </strong>
        {` Allow users to enter information that is not freeform text using components like checkboxes, radio buttons, or dropdowns.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Buttons:`}
        </strong>
        {` Enable a user to submit or exit a form.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"labels","size":"h3","className":"ws-title ws-h3"}}>
      {`Labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always provide labels for text and data inputs so that users understand the information each form field asks of them. Default to top-aligned labels unless you’re working within limited vertical space, then use left-aligned labels.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Maintain consistent form label alignment throughout your application or interface.`}
    </p>
    <AutoLinkHeader {...{"id":"top-aligned-labels","size":"h4","className":"ws-title ws-h4"}}>
      {`Top-aligned labels`}
    </AutoLinkHeader>
    <img src={srcImport216} height={srcImport216.height * 323 / srcImport216.width} {...{"alt":"Top-aligned labels appear above their text input fields","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Top-aligned labels are preferred over left-aligned labels because they provide a closer proximity between a label and its corresponding input and allow the most horizontal space to accommodate long label content. These characteristics support more responsive and scannable form design.`}
    </p>
    <AutoLinkHeader {...{"id":"left-aligned-labels","size":"h4","className":"ws-title ws-h4"}}>
      {`Left-aligned labels`}
    </AutoLinkHeader>
    <img src={srcImport217} height={srcImport217.height * 323 / srcImport217.width} {...{"alt":"Left-aligned labels appear beside their text input fields","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Avoid using left-aligned labels unless you’re working with limited vertical space.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To accommodate mobile views, left-aligned labels should responsively adjust to top alignment for smaller screens.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For guidance on how to write effective form labels, see the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"text-inputs","size":"h3","className":"ws-title ws-h3"}}>
      {`Text inputs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Follow our `}
      <PatternflyThemeLink {...{"to":"/components/text-input/design-guidelines"}}>
        {`text input guidelines`}
      </PatternflyThemeLink>
      {` for using text inputs in a form.`}
    </p>
    <AutoLinkHeader {...{"id":"data-inputs","size":"h3","className":"ws-title ws-h3"}}>
      {`Data inputs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly provides a variety of input components that enable a user to make a selection. Each component supports a specific use case:`}
    </p>
    <img src={srcImport218} height={srcImport218.height * 804 / srcImport218.width} {...{"alt":"A visual representation of each data input type and their purpose: Switches for toggling between two states, radio buttons for choosing one option from multiple options, checkboxes for choosing any number of items from a list, and select lists for choosing one or more options from a list of more than five options","width":"804","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"switch","size":"h4","className":"ws-title ws-h4"}}>
      {`Switch`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <PatternflyThemeLink {...{"to":"/components/switch/design-guidelines"}}>
        {`switch`}
      </PatternflyThemeLink>
      {` to toggle between 2 different states in a form.`}
    </p>
    <AutoLinkHeader {...{"id":"radio-buttons","size":"h4","className":"ws-title ws-h4"}}>
      {`Radio buttons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use `}
      <PatternflyThemeLink {...{"to":"/components/radio/design-guidelines"}}>
        {`radio buttons`}
      </PatternflyThemeLink>
      {` when users can only choose 1 option from a list of 2 to 5 mutually exclusive options.`}
    </p>
    <AutoLinkHeader {...{"id":"checkboxes","size":"h4","className":"ws-title ws-h4"}}>
      {`Checkboxes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use `}
      <PatternflyThemeLink {...{"to":"/components/checkbox/design-guidelines"}}>
        {`checkboxes`}
      </PatternflyThemeLink>
      {` to enable users to select all, some, or none of the available options from a list of up to 5 items.`}
    </p>
    <AutoLinkHeader {...{"id":"select-lists","size":"h4","className":"ws-title ws-h4"}}>
      {`Select lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <PatternflyThemeLink {...{"to":"/components/select/design-guidelines"}}>
        {`select list`}
      </PatternflyThemeLink>
      {` to enable users to select 1 or more options from a list of more than 5 items.`}
    </p>
    <AutoLinkHeader {...{"id":"data-input-arrangement","size":"h4","className":"ws-title ws-h4"}}>
      {`Data input arrangement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Data inputs can be arranged in 3 different ways depending on space considerations.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Horizontal placement:`}
          </strong>
          {` Use when vertical space is scarce or to arrange three inputs or fewer.`}
        </p>
        <img src={srcImport219} height={srcImport219.height * 466 / srcImport219.width} {...{"alt":"Example of data inputs arranged in a horizontal placement","width":"466","className":"ws-img"}}>
        </img>
      </li>
    </ol>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Vertical placement:`}
          </strong>
          {` Use when quick scanning is ideal or to arrange more than three inputs.`}
        </p>
        <img src={srcImport220} height={srcImport220.height * 225 / srcImport220.width} {...{"alt":"Example of data inputs arranged in a vertical placement","width":"225","className":"ws-img"}}>
        </img>
      </li>
    </ol>
    <ol {...{"start":3,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Multi-column grid:`}
          </strong>
          {` Use when space is constricted and labels are short.`}
        </p>
        <img src={srcImport221} height={srcImport221.height * 466 / srcImport221.width} {...{"alt":"Example of data inputs arranged in a multi-column grid","width":"466","className":"ws-img"}}>
        </img>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"buttons","size":"h3","className":"ws-title ws-h3"}}>
      {`Buttons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Form submit buttons should be disabled until a user starts filling out the form or edits the form in any way. However, this recommendation varies according to a form’s context:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For short forms like wizards, disable submit buttons until all conditions required to submit the form are met. This setting reduces the need to return validation errors due to incomplete form submissions.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For long scrolling forms, don’t disable the submit button since the missing field and submit button may not be visible on the screen at the same time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For a submitted form, disable the submit button while a user's responses are processing to avoid a duplicate submission.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For a processing form, use feedback messages and progress indicators like spinners or progress bars if the processing time might exceed user expectations.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"form-sections","size":"h2","className":"ws-title ws-h2"}}>
      {`Form sections`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Form sections sort form fields into non-hierarchical groups based on common information type, step, or visual preference. Form sections are ideal for breaking long forms into simple, evenly spaced segments with all information exposed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Default to grouping data with form sections, especially if all form fields are required. If you need to visualize complex or nested information, use `}
      <PatternflyThemeLink {...{"to":"#field-groups"}}>
        {`field groups`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To distinguish between form sections, title them based on the reason you grouped their inputs together. You may forego form section titles and solely rely on the added spacing between sections, but don't leave section titles blank if that empty space will confuse your users. If you do decide to forego the form section titles, add an `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` to indicate why you're sectioning each set of form fields together.`}
    </p>
    <img src={srcImport222} height={srcImport222.height * 570 / srcImport222.width} {...{"alt":"Example of form sections used to separate out a form.","width":"570","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`To view an interactive example of form sections, see our `}
      <PatternflyThemeLink {...{"to":"/components/form/#form-sections"}}>
        {`form sections demo`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"field-groups","size":"h2","className":"ws-title ws-h2"}}>
      {`Field groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Field groups sort form fields into hierarchical, collapsible groups based on theme. All field groups are nested and indented by default, so they create a clearer information architecture between groups. Since all elements won't be visible at all times, always title field groups based on their purpose. Field groups are ideal for building a more dimensional form structure or condensing lengthy forms into digestible, expandable segments.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly field groups support a required title, description, and actions.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use field groups to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Group form fields in a more complex way.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Reduce information overload.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Hide unrequired fields.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use multiple instances of the same element without causing visual confusion.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Designate an area to configure advanced options.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Because field groups call for more clicks, tabs, and interactions to reach form fields, they require additional accessibility considerations. Clearly label field group content so that it's clear to all users. For more field group accessibility guidance, see the `}
      <PatternflyThemeLink {...{"to":"#accessibility"}}>
        {`Accessibility guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: For a form with multiple field groups, distinguish between each one by adding titles that convey each group's unique theme such as `}
      <em>
        {`Routing`}
      </em>
      {`, `}
      <em>
        {`Build configuration`}
      </em>
      {`, `}
      <em>
        {`Deployment`}
      </em>
      {`, or `}
      <em>
        {`Scaling`}
      </em>
      {`.`}
    </p>
    <img src={srcImport223} height={srcImport223.height * 800 / srcImport223.width} {...{"alt":"Example of nested, expandable field groups in a form.","width":"800","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`To view an interactive example of field groups, see our `}
      <PatternflyThemeLink {...{"to":"/components/form#field-groups"}}>
        {`field groups demo`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"user-guidance","size":"h2","className":"ws-title ws-h2"}}>
      {`User guidance`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Due to their interactive nature, forms often include features that help communicate field importance and guidance as users complete them.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Types of user guidance include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Required fields:`}
        </strong>
        {` Call attention to input fields crucial to user success.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`User help:`}
        </strong>
        {` Assists users in context through placeholder text, helper text, and popovers.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progressive disclosure:`}
        </strong>
        {` Hides and shows fields based on user selections to simplify their workflow.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"required-fields","size":"h3","className":"ws-title ws-h3"}}>
      {`Required fields`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Reserve required fields for information vital to user success. Indicate a required field with an asterisk ( * ) to the right of its field label.`}
    </p>
    <img src={srcImport224} height={srcImport224.height * 444 / srcImport224.width} {...{"alt":"Example of field with required field indication","width":"444","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If all form fields are required, don’t use an asterisk for each one. Instead, provide a message at the top of the form: “All fields are required.” If all fields are optional, provide a similar message at the top of the form: “All fields are optional."`}
    </p>
    <img src={srcImport225} width={srcImport225.width} height={srcImport225.height} {...{"alt":"Example of two forms with an indication at the top of whether all fields are required or all fields are optional","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"user-help","size":"h3","className":"ws-title ws-h3"}}>
      {`User help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 3 different methods for providing assistance within a form: `}
      <PatternflyThemeLink {...{"to":"#placeholder-text"}}>
        {`Placeholder text`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#helper-text"}}>
        {`helper text`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"#popovers"}}>
        {`popovers`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"placeholder-text","size":"h4","className":"ws-title ws-h4"}}>
      {`Placeholder text`}
    </AutoLinkHeader>
    <img src={srcImport226} height={srcImport226.height * 323 / srcImport226.width} {...{"alt":"Example of a date placeholder text inside text input field","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Within a form field, placeholder text provides an example of the required or recommended format for text input.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use placeholder text when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The requested data type requires data to be inputted with specific format or syntax requirements.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The requested data type might be unfamiliar to the user.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Never use placeholder text to replace field labels or communicate crucial information since it disappears as soon as a user begins typing in a field.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If your placeholder text shares an example, precede it with “Example,” followed by a space so that users accessing the form with screen readers will know the difference between the field label and the provided placeholder text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Example, John Smith`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Example, (555) 555-5555`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`MM-DD-YYYY`}
        </em>
      </li>
    </ul>
    <img src={srcImport227} height={srcImport227.height * 323 / srcImport227.width} {...{"alt":"Example of a phone number placeholder text inside text input field","width":"323","className":"ws-img"}}>
    </img>
    <img src={srcImport228} height={srcImport228.height * 323 / srcImport228.width} {...{"alt":"Example of a date placeholder text inside text input field","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective placeholder text, see the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"helper-text","size":"h4","className":"ws-title ws-h4"}}>
      {`Helper text`}
    </AutoLinkHeader>
    <img src={srcImport229} height={srcImport229.height * 323 / srcImport229.width} {...{"alt":"Example of helper text underneath the text input field","width":"323","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Helper text is brief, permanent text below a form field that helps a user provide the right information specific to that input, like entering a unique project name or data point. Helper text may wrap to two lines, but it should never extend past the width of its corresponding input field.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Align helper text with the specific input for which it offers assistance. If your helper text contains information about the label rather than the input field, place it with the label instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective helper text, see the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"popovers","size":"h4","className":"ws-title ws-h4"}}>
      {`Popovers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <PatternflyThemeLink {...{"to":"/components/popover/design-guidelines"}}>
        {`popover`}
      </PatternflyThemeLink>
      {` for fields that might require additional background or explanation. Popovers may also link to external help pages or other related documentation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In a form, indicate a popover with an unfilled question mark circle that reveals information when clicked. Place popovers to the right of their corresponding form label.`}
    </p>
    <img src={srcImport230} height={srcImport230.height * 411 / srcImport230.width} {...{"alt":"Example of a popover used in a form field to provide additional context for where a user can find the required information","width":"411","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use popovers to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Guide users to where they can find essential information needed to complete a given form field.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Provide content that requires formatting like numbered or bulleted lists, or that requires you to include additional elements like buttons, links, or images.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Never hide critical information inside a popover, since popovers only surface when a user triggers them.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective popovers, see the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"progressive-disclosure","size":"h3","className":"ws-title ws-h3"}}>
      {`Progressive disclosure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use progressive disclosure to hide and show form fields based on a user’s selection to keep their workflow short and allow them to focus on fields relevant to them. Progressive disclosure also avoids using color to indicate whether or not a field is available, making forms more accessible for users with visual impairments.`}
    </p>
    <img src={srcImport231} height={srcImport231.height * 562 / srcImport231.width} {...{"alt":"Example of progressive disclosure with one radio button selected to only show the inputs associated with that option","width":"562","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"errors-and-validation","size":"h2","className":"ws-title ws-h2"}}>
      {`Errors and validation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a form field submission results in an error, let users know as soon as possible and as close as possible to the error. Default to presenting error states on a form using field level errors whenever possible.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In some use cases, you may choose to use inline errors at the top of a form to emphasize errors within it. These inline errors should always be a supplemental component used in addition to field level errors.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`After a form error occurs, users won’t have access to placeholder text (replaced by their input) or helper text (replaced by field level errors). Because these resources will be unavailable until the error is corrected, error messages should answer two essential questions:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What is the error?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`What can the user do to fix it?`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Example: Instead of “Invalid input,” provide an error message that includes the correct format to re-write the input: “Date format must be MM-DD-YYYY.”`}
    </p>
    <img src={srcImport232} height={srcImport232.height * 649 / srcImport232.width} {...{"alt":"Visualized example for right vs. wrong way to write an input error. Do communicate specific format errors; don't just indicate an 'invalid input.'","width":"649","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Errors can be validated at two points in the workflow: On loss of focus or on submission. The error state you use depends on whether validation happens on the client side (loss of focus) or server side (on submission).`}
    </p>
    <AutoLinkHeader {...{"id":"error-validation-on-loss-of-focus","size":"h3","className":"ws-title ws-h3"}}>
      {`Error validation on loss of focus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Validation on loss of focus occurs as soon as a field loses focus. It alerts users of errors immediately after they complete their input through inline validation, allowing them to quickly see and address issues.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Validate errors on loss of focus when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A user enters data in an invalid format.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A user leaves a required field blank.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A user leaves a required field incomplete.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"error-validation-on-submission","size":"h3","className":"ws-title ws-h3"}}>
      {`Error validation on submission`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Validation on submission occurs when a user attempts to submit a form. In this scenario, the user completes the form in its entirety and the page reloads with any errors detected.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For validation on submission, supplement field level errors with an `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines#inline-alerts"}}>
        {`inline alert`}
      </PatternflyThemeLink>
      {` to make it simple for the user to quickly identify and address areas that need attention. The inline alert should be placed below the form’s header and description, and it should equal the total width of the form.`}
    </p>
    <img src={srcImport233} height={srcImport233.height * 794 / srcImport233.width} {...{"alt":"Example of errors after validation on submission, including an inline alert at the top, and field level errors","width":"794","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Learn more about writing error messages in the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"spacing","size":"h2","className":"ws-title ws-h2"}}>
      {`Spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Forms may be placed in several contexts including on a page, in a wizard, or in a modal. Your chosen form placement may impact specific spacing considerations, but general form spacing requirements apply across these contexts.`}
    </p>
    <AutoLinkHeader {...{"id":"general-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`General spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always add 24px of spacing underneath each form input. If a form input includes helper text, this 24px spacing should start below the helper text. Spacing between data inputs like checkboxes and radio buttons should also be 24px when on the same line or stacked on one another. For more spacing information, consult the `}
      <PatternflyThemeLink {...{"to":"/guidelines/spacers#considering-line-height-and-padding"}}>
        {`PatternFly spacer guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport234} height={srcImport234.height * 460 / srcImport234.width} {...{"alt":"Basic form example with spacers to demonstrate how elements should be spaced within it","width":"460","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"button-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Button spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Place submit or cancel buttons on the bottom left of a form, left-aligned with all form fields. Buttons should be placed 16px apart in all contexts. Buttons for actions other than submitting or canceling the form may be placed elsewhere within a form depending on your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more guidance on button placement, see our `}
      <PatternflyThemeLink {...{"to":"/components/button/design-guidelines#button-placement"}}>
        {`button guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport235} width={srcImport235.width} height={srcImport235.height} {...{"alt":"Examples of correct button placement and incorrect button placement in a form","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"forms-on-a-page","size":"h3","className":"ws-title ws-h3"}}>
      {`Forms on a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Left and top align a form within a page’s content area. A minimum of 24px padding should separate the form from neighboring elements.`}
    </p>
    <img src={srcImport236} width={srcImport236.width} height={srcImport236.height} {...{"alt":"Example of a form on a page","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When placing a form on a page, its width is customizable to your use case and should reflect factors including:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The length of inputted content.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The widest input field in the form.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`To accommodate lengthy input fields, the maximum suggested width is 880px. Use your best judgement based on the context and content of your form –– 880px is typically too wide for most use cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`All input fields in your form will be the same length, except for in a `}
      <PatternflyThemeLink {...{"to":"#multi-column-forms"}}>
        {`multi-column form`}
      </PatternflyThemeLink>
      {` where you may place two or more adjacent fields in a single line. In a multi-column form, form inputs will share available width on that line.`}
    </p>
    <AutoLinkHeader {...{"id":"forms-in-a-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Forms in a wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Similar to an in-page form, forms in wizards should be left-aligned in the content area and have a minimum of 24px padding separating its content from neighboring elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In a wizard, form error validation should occur when or by the time the user clicks the “Next” button. Don’t wait until the user has completed the whole wizard to notify them of possible errors and their location.`}
    </p>
    <img src={srcImport237} width={srcImport237.width} height={srcImport237.height} {...{"alt":"Example of a form in an in-page wizard","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"forms-in-a-modal","size":"h3","className":"ws-title ws-h3"}}>
      {`Forms in a modal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Forms in a modal should be horizontally centered with the modal background and fill the modal width, leaving 24px between the form content and the modal background edges.`}
    </p>
    <img src={srcImport238} height={srcImport238.height * 384 / srcImport238.width} {...{"alt":"Example of form in a modal","width":"384","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"multi-column-forms","size":"h3","className":"ws-title ws-h3"}}>
      {`Multi-column forms`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multi-column forms are forms that allow multiple inputs to share a single form line. Single column forms are recommended over multi-column forms since multiple columns can lead to confusion and may not support an accessible experience for all users.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you choose to create a multi-column form, you may do so using any of the `}
      <PatternflyThemeLink {...{"to":"/layouts/bullseye"}}>
        {`layouts`}
      </PatternflyThemeLink>
      {` offered in PatternFly including `}
      <PatternflyThemeLink {...{"to":"/layouts/grid"}}>
        {`grid`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/layouts/flex"}}>
        {`flex`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When grouping columns together in a multi-column form, organize them so that field information on the same line relates to one another. Common cases for this input field grouping include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`First name, Middle initial, Last name`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`City, State, ZIP code`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Credit card number, Expiration date, Security code`}
      </li>
    </ul>
    <img src={srcImport239} width={srcImport239.width} height={srcImport239.height} {...{"alt":"Example of correct and incorrect multi-column forms","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Never design multi-column forms to read like a magazine or newspaper column, where the left column is completed first before moving on to the right. The form itself should still move and be filled line by line from top to bottom, with related fields placed on the same line.`}
    </p>
    <img src={srcImport240} width={srcImport240.width} height={srcImport240.height} {...{"alt":"Example of how multi-column forms should be read and presented, demonstrated by arrows that follow a user's path of consumption","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When writing form content, use your understanding of the user’s task and context to plan your content hierarchy. As a user moves through a form, they input and select information based on the content provided, almost like a conversation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Forms combine several content types to guide users toward completion:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Field labels`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Placeholder text`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Helper text`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Popovers`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Error messages`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Buttons`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Follow these general guidelines for each content type as you structure content within a form.`}
    </p>
    <AutoLinkHeader {...{"id":"field-labels","size":"h3","className":"ws-title ws-h3"}}>
      {`Field labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use field labels to specify the most critical information about what data the user needs to provide. Each label should be unique and identify all the information being collected.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Whenever possible, keep field labels under five words and avoid using the same field label more than once in the same form.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Full name`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Email`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Phone number`}
        </em>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"placeholder-text-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Placeholder text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use placeholder text to demonstrate correct inputs so that users are aware of formatting expectations and specifications needed to provide information without errors.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If your placeholder text demonstrates a correct input, introduce it as an example so that users can distinguish impermanent examples from field labels and their own inputted text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Example, John Smith`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Example, (555) 555-5555`}
        </em>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Placeholder text that doesn’t give an example doesn’t need to be introduced as one. If your placeholder text simply communicates a field's required format, write the format without an introduction.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`MM-DD-YYYY`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          <PatternflyThemeLink {...{"to":"mailto:johnsmith@example.com"}}>
            {`johnsmith@example.com`}
          </PatternflyThemeLink>
        </em>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` Once users start typing, placeholder text disappears. Consider communicating crucial formatting requirements or directions with helper text instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`See our `}
      <PatternflyThemeLink {...{"to":"/components/text-input/design-guidelines"}}>
        {`text input guidelines`}
      </PatternflyThemeLink>
      {` for more specific guidance on writing placeholder text for text input fields.`}
    </p>
    <AutoLinkHeader {...{"id":"helper-text-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Helper text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use helper text to display critical secondary information that helps users input correct information on their first attempt. Describe any conditions for their inputted information to prevent unnecessary errors, like specifying that a name for a new asset must be a unique one.`}
    </p>
    <AutoLinkHeader {...{"id":"popovers-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Popovers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use popovers to supply background information and additional context as field-level help. Popover content should help define unfamiliar terms or concepts that novice users may not know offhand. Popover content can also help users find required information, such as an account number, order number, or employee ID.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Find your order number in your order confirmation email or at the top of your paper receipt.`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`You can find your employee ID number at the bottom of your employee ID card.`}
        </em>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`See our `}
      <PatternflyThemeLink {...{"to":"/components/popover/design-guidelines#content"}}>
        {`popover guidelines`}
      </PatternflyThemeLink>
      {` for more information on writing effective popover content.`}
    </p>
    <AutoLinkHeader {...{"id":"error-messages","size":"h3","className":"ws-title ws-h3"}}>
      {`Error messages`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use error messages to help users break down barriers between form errors and successful form submission. Whether you surface error messages on loss of focus or on submission, be sure to alert users to specific errors within their form and provide key actions they can use to fix them.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If a user leaves a required field empty or incomplete, use a field level error message to communicate the error in as little words as possible: `}
      <em>
        {`Required`}
      </em>
      {` or `}
      <em>
        {`Required field`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If a user formats an input incorrectly, avoid unclear error messages like `}
      <em>
        {`Invalid input`}
      </em>
      {`. Instead, specify what constitutes a valid input.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Date format must be MM-DD-YYYY`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`Enter a valid email: `}
          <PatternflyThemeLink {...{"to":"mailto:email@provider.com"}}>
            {`email@provider.com`}
          </PatternflyThemeLink>
        </em>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For more error message guidance, see our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/error-messages"}}>
        {`UX writing style guide`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"buttons-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Buttons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use button text to clearly and specifically communicate the action it triggers. Whenever possible, use specific verbs to write button text that communicates what a user accomplishes by submitting a form.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: Instead of `}
      <em>
        {`Submit`}
      </em>
      {`, a submit button on a subscription form should read `}
      <em>
        {`Subscribe`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more button text guidance, see our `}
      <PatternflyThemeLink {...{"to":"/components/button/design-guidelines#content"}}>
        {`button content guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This section highlights accessibility considerations to keep in mind when creating forms. For more accessibility guidance, see our `}
      <PatternflyThemeLink {...{"to":"/accessibility/accessibility-and-patternfly"}}>
        {`PatternFly accessibility guide`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"form-sections-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Form sections`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Follow these best practices to create accessible form sections:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Always label and associate form section content.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If your form sections are untitled and visual separation is crucial to understanding and successfully completing your form, add an `}
        <code {...{"className":"ws-code"}}>
          {`aria-label`}
        </code>
        {` to indicate why each form section is grouped together.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"field-groups-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Field groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Follow these best practices to create accessible field groups:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Always label and associate field group content.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`When in doubt, add an `}
          <code {...{"className":"ws-code"}}>
            {`aria-label`}
          </code>
          {` to make sure screen reader users can access and understand all information for each field group.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use `}
          <code {...{"className":"ws-code"}}>
            {`<div>`}
          </code>
          {` tags to separate elements so that users can navigate from element to element from any viewpoint.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"placeholder-text-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Placeholder text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Never write essential information in placeholder text. Screen readers like JAWS and NVDA don’t read it, nor is it widely supported among other assistive technologies. Additionally, placeholder text often shows in a low gray-on-white contrast, which may be inaccessible for users with visual impairments. Treat placeholder text as a visual supplement –– any crucial formatting requirements should be written in helper text so that users with assistive technology won’t miss it.`}
    </p>
    <AutoLinkHeader {...{"id":"multiple-forms-on-a-page","size":"h3","className":"ws-title ws-h3"}}>
      {`Multiple forms on a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whenever possible, default to including one form per page. Placing multiple forms on the same page may cause unnecessary confusion.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If multiple forms live on the same page, multiple submit buttons will, too. If both actions use the same button text, users accessing the page via screen reader won’t be able to distinguish between them. In this instance, descriptive button text is crucial to support successful form completion and submission for all users.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a form's action to specify its submit button text:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If submitting one form creates an account while the other signs the user up for a mailing list, write each action into unique button text: `}
          <em>
            {`Create account`}
          </em>
          {` and `}
          <em>
            {`Subscribe to mailing list`}
          </em>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If form actions aren't easily distinguishable or difficult to fit into a button, consider separating them onto separate pages or incorporating their titles into their submit buttons: `}
          <em>
            {`Submit `}
            {`[form title]`}
            {` form`}
          </em>
          {`.`}
        </p>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsFormDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
