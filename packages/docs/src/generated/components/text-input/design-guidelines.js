import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport401 from '../../../content/design-guidelines/components/text-input/./img/textinput-elements.png';
import srcImport402 from '../../../content/design-guidelines/components/text-input/./img/error.png';
const pageData = {
  "id": "Text input",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/text-input/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/text-input/text-input.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`text input`}
      </strong>
      {` is used to gather free-form text from a user.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport401} height={srcImport401.height * 488 / srcImport401.width} {...{"alt":"Text input elements","width":"488","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Indicates what you want the user to input in the text field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input field:`}
        </strong>
        {` Area for user to type in their text input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#help"}}>
            {`Help`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Provides contextual assistance like popovers, placeholder text, or helper text, in any area where the user might need additional information to provide the right input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#errors-and-validation"}}>
            {`Errors and validation`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Ensures that the correct information is collected before the form can be submitted to the system.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Be sure to size input fields appropriately to anticipate the longest likely value (if a maximum character length is known).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When a value is too long to be fully displayed in a text field, use `}
        <PatternflyThemeLink {...{"to":"/ux-writing/truncation"}}>
          {`truncation`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide a `}
        <PatternflyThemeLink {...{"to":"/components/text-area"}}>
          {`text area`}
        </PatternflyThemeLink>
        {` for input anticipated to be longer than a single line.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pre-populate fields with known values when possible, like a default IP address, for example.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"help","size":"h3","className":"ws-title ws-h3"}}>
      {`Help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Placeholder text`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#placeholder-text"}}>
        {`Placeholder text`}
      </PatternflyThemeLink>
      {` is text inside a form field that provides an example of the required or recommended format for text input. For example, placeholder text for a date might be "DD/MM/YYYY".`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Helper text`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#helper-text"}}>
        {`Helper text`}
      </PatternflyThemeLink>
      {` is text below a form field that helps a user provide the right information, like "Enter a unique name".`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Popovers`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#popovers"}}>
        {`Popovers`}
      </PatternflyThemeLink>
      {` provide context around a text or input field. Popovers are represented with an unfilled question mark con (fa-question-circle) and displayed when the user clicks on the icon.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about how to provide help content, see  the `}
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#user-help"}}>
        {`forms design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"errors-and-validation","size":"h3","className":"ws-title ws-h3"}}>
      {`Errors and validation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Wherever possible, use inline errors to notify users where there is an issue with their input. Inline errors help should be short and help users quickly identify and understand what they need to fix and why.`}
    </p>
    <img src={srcImport402} height={srcImport402.height * 320 / srcImport402.width} {...{"alt":"error and validation example","width":"320","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about how to provide errors and validation, see  the `}
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#errors-and-validation"}}>
        {`forms design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTextInputDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
