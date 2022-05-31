import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport321 from '../../../content/design-guidelines/components/number input/./img/number_input_anatomy.png';
import srcImport322 from '../../../content/design-guidelines/components/number input/./img/number_input_states.png';
import srcImport323 from '../../../content/design-guidelines/components/number input/./img/with_threshold.png';
const pageData = {
  "id": "Number input",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/number-input/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/number input/number-input.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`number input`}
      </strong>
      {` provides a quick and effective way for users to enter and modify a numeric value. Similar to `}
            <a href="https://www.patternfly.org/v4/components/input-group/">{`input groups`}</a>
      {`, number inputs combine 2 input types into 1 control: A text input field with buttons on either side. When combined, these elements allow users to input numeric values in a responsive and scalable way.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport321} height={srcImport321.height * 537 / srcImport321.width} {...{"alt":"Number input elements","width":"537px","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` Indicates what value the user should input in the numeric field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input field:`}
        </strong>
        {` Area for the user to type in their numeric input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Buttons:`}
        </strong>
        {` Increase or decrease the value by set increments.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text (optional):`}
        </strong>
        {` Explains or provides additional context that helps the user provide the right information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Unit (optional):`}
        </strong>
        {` Provides a unit symbol for the value in the input field, when applicable.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a number input when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users need a quick and precise way to adjust values within defined parameters.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Users need to make small incremental changes that require few clicks.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to bypass device limitations, such as keyboardless interactions and form submissions on mobile.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don’t use a number input when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The numeric value range is infinite.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The numeric value can be either a fractional or whole number.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The numeric value required is not part of a range, or is arbitrary. In this use case, use an `}
                <a href="https://www.patternfly.org/v4/components/input-group/">{`input group`}</a>
        {` instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There is not enough space in the UI to account for the interaction between the input field and the buttons.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`When using number inputs, follow these best practices:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Display a default numeric value in the input field that users can modify by typing directly into the input field or scale using the increase or decrease buttons.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Keep labels concise and specific to effectively communicate what value the user should enter into the input field.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Determine an increment size relative to your specific value range. Scale your increment size to accommodate for the types of values users will input in context.
For example: If your range is from 0-10, have increments of 1, but if your range is from 0-100, have increments of 10.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Include unit symbols to the right of the text input and increase button, depending on your use case. Always use a unit’s standard abbreviation or symbol. For a list of recommended symbols, see our `}
                <a href="https://www.patternfly.org/v4/ux-writing/units-and-symbols#writing-units-of-measure">{`Units and symbols page`}</a>
        {`.
`}
        <img src={srcImport322} height={srcImport322.height * 740 / srcImport322.width} {...{"alt":"Number input states","width":"740px","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Number inputs can function in one of two ways:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Default:`}
        </strong>
        {` Buttons increase and decrease the numeric value within a given range.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`With thresholds:`}
        </strong>
        {` Buttons are disabled when the user reaches a certain threshold within a given range.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"default","size":"h2","className":"ws-title ws-h2"}}>
      {`Default`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A default number input allows users to input and modify a numeric value without thresholds. Use this variation when any value within your number input’s range is valid for your use case (for example, providing the number of storage drives associated with their computer or reporting their storage capacity).`}
    </p>
    <AutoLinkHeader {...{"id":"with-thresholds","size":"h2","className":"ws-title ws-h2"}}>
      {`With thresholds`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A number input with thresholds disables each button when a user’s numeric input passes a certain threshold. Use number inputs with thresholds to add maximum or minimum restrictions to user inputted values.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When adding thresholds to a number input, be sure to inform users with text to minimize their risk for input errors. If a number input for the number of storage drives has a maximum input value of 20, communicate this limit in helper text: `}
            <i>{`Maximum capacity 20`}</i>
      {`.`}
    </p>
    <img src={srcImport323} height={srcImport323.height * 474 / srcImport323.width} {...{"alt":"Number input with threshold","width":"474px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"accessibility","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider the following guidance to ensure that your number input is `}
            <a href="https://www.section508.gov/">{`508 compliant`}</a>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use clear and descriptive labels for each button and fields. Specific language makes it easier for users with assistive technology to understand the required value.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Include error validation messages to guide users who enter values incorrectly. For more information about writing effective error messages, see our `}
                <a href="https://www.patternfly.org/v4/ux-writing/error-messages">{`UX writing style guide`}</a>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For more in-depth accessibility guidance, see the `}
            <a href="https://www.patternfly.org/v4/components/accordion/design-guidelines/#accessibility">{`PatternFly accessibility guide`}</a>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsNumberInputDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
