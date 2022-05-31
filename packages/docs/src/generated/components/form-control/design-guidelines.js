import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport209 from '../../../content/design-guidelines/components/form-control/./img/formControlTypes.png';
import srcImport210 from '../../../content/design-guidelines/components/form-control/./img/formcontrol.gif';
import srcImport211 from '../../../content/design-guidelines/components/form-control/./img/success_example.png';
import srcImport212 from '../../../content/design-guidelines/components/form-control/./img/disable_example.png';
import srcImport213 from '../../../content/design-guidelines/components/form-control/./img/greyedout.png';
import srcImport214 from '../../../content/design-guidelines/components/form-control/./img/search.png';
const pageData = {
  "id": "Form control",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/form-control/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/form-control/form-control.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Form controls`}
      </strong>
      {` refer to the different visual states that data input components can take to help guide users in completing forms.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Form control can be applied to various input components, including text boxes, dropdowns/select lists, and text areas.`}
    </p>
    <AutoLinkHeader {...{"id":"control-types","size":"h2","className":"ws-title ws-h2"}}>
      {`Control types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`While form control styles differ slightly depending on the component, they all use some combination of underlines, color, and icons to give users `}
      <strong>
        {`feedback`}
      </strong>
      {` on their inputs and selections. For example, if a user types an invalid string into a text box, the box changes state to indicate the error.`}
    </p>
    <img src={srcImport209} height={srcImport209.height * 661 / srcImport209.width} {...{"alt":"Form control types","width":"661px","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Default component:`}
        </strong>
        {` State of the input component before any form control is applied.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Status area:`}
        </strong>
        {` Icon and underline color indicate the status of the input or selection.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Grey-out controls:`}
        </strong>
        {` Actionless form control can be either disabled or read only. The only difference visually is the underline for read only input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form fields with icon:`}
        </strong>
        {` Custom icons can be included in input fields.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"statusstate-controls","size":"h3","className":"ws-title ws-h3"}}>
      {`Status/state controls`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Status controls are the most prominent form control. Error, warning, and success variations should be used in real time to give users feedback on their inputs or selections.`}
    </p>
    <AutoLinkHeader {...{"id":"error-controls","size":"h4","className":"ws-title ws-h4"}}>
      {`Error controls`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use error controls when a user inputs incorrect information or selects an invalid option from a dropdown menu. Error indicators are often accompanied by helper text to further specify the user error. Read more on error messaging in the `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/form/design-guidelines#errors-and-validation"}}>
        {`forms guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport210} {...{"alt":"Incorrect input gif","width":"566px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"success-controls","size":"h4","className":"ws-title ws-h4"}}>
      {`Success controls`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use success controls to indicate valid user input for fields that require a specific form of input. In the example below, the name entered must be unique, so the success state indicates availability. Alternatively, an error control would be used to indicate a name that is already in use. `}
      <strong>
        {`Only use success controls if the input must be validated.`}
      </strong>
    </p>
    <img src={srcImport211} height={srcImport211.height * 762 / srcImport211.width} {...{"alt":"Valid input example","width":"762px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"gray-out-controls","size":"h3","className":"ws-title ws-h3"}}>
      {`Gray-out controls`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Input fields should be grayed out when the user cannot perform actions. Gray-out controls indicate that a field is either temporarily disabled, or permanently read-only.`}
    </p>
    <AutoLinkHeader {...{"id":"disable-controls","size":"h4","className":"ws-title ws-h4"}}>
      {`Disable controls`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Disable controls indicate dependency and can be used to guide the user in a sequential workflow. In the example below, the field `}
      <em>
        {`Target namespace`}
      </em>
      {` is disabled, because the user must select a `}
      <em>
        {`Target provider`}
      </em>
      {` first. The component is disabled until the user makes the first selection, because namespace options are `}
      <strong>
        {`dependent`}
      </strong>
      {` on the selected provider.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the disabled state when input is required in `}
      <strong>
        {`all`}
      </strong>
      {` use cases, but content depends on prior actions. Alternatively, if a previous action eliminates the need for an input entirely, the component should be hidden rather than disabled.`}
    </p>
    <img src={srcImport212} height={srcImport212.height * 762 / srcImport212.width} {...{"alt":"Disabled input example","width":"762px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"read-only-controls","size":"h4","className":"ws-title ws-h4"}}>
      {`Read only controls`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the read only state when an input will `}
      <em>
        {`never`}
      </em>
      {` be editable. This state differs slightly from the disabled state, as shown below.`}
    </p>
    <img src={srcImport213} height={srcImport213.height * 644 / srcImport213.width} {...{"alt":"Gray-out input","width":"644px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"custom-icons","size":"h3","className":"ws-title ws-h3"}}>
      {`Custom icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Icons can be included within form fields to indicate the type of input required. The most common example is the Search field, shown below. All icons should be right-aligned within the input component.`}
    </p>
    <img src={srcImport214} height={srcImport214.height * 644 / srcImport214.width} {...{"alt":"Search field","width":"644px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`As a designer, you can choose to design input components with custom icons. Make sure that whatever icon you choose informs the user about the type of input that field requires.`}
    </p>
    <AutoLinkHeader {...{"id":"general-guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`General guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`While form controls are useful in providing feedback on user input, they don't need to be implemented for every input instance. Only use form controls when it is essential to convey information to the user. For example, if any string is valid for a text input, or any selection in a list is acceptable, form controls are not necessary.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsFormControlDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
