import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport365 from '../../../content/design-guidelines/components/slider/./img/Slider.png';
import srcImport366 from '../../../content/design-guidelines/components/slider/./img/slider-continuous.png';
import srcImport367 from '../../../content/design-guidelines/components/slider/./img/slider-discrete.png';
import srcImport368 from '../../../content/design-guidelines/components/slider/./img/Input-value.png';
import srcImport369 from '../../../content/design-guidelines/components/slider/./img/thumb value.png';
import srcImport370 from '../../../content/design-guidelines/components/slider/./img/Slider-with-buttons.png';
import srcImport371 from '../../../content/design-guidelines/components/slider/./img/Unlocked.png';
import srcImport372 from '../../../content/design-guidelines/components/slider/./img/Locked.png';
const pageData = {
  "id": "Slider",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/slider/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/slider/slider.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`slider`}
      </strong>
      {` provides a quick and effective way for users to set and adjust a numeric value from a defined range of values.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport365} height={srcImport365.height * 600 / srcImport365.width} {...{"alt":"Visual of slider","width":"600","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Slider value (optional)`}
        </strong>
        {`: Displays selected numeric value.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Helper text (optional)`}
        </strong>
        {`: Provides supplementary information about the slider such as minimum and maximum values.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Track`}
        </strong>
        {`: Orders the range of values users can set and adjust onto one line.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filled track`}
        </strong>
        {`: Illustrates a user’s selected numeric value within the slider’s pre-defined range.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Thumb`}
        </strong>
        {`: Indicates a selected numeric value on the track using a positional indicator, typically a dot.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tick marks (optional)`}
        </strong>
        {`: Represents predetermined increments on the track to guide users toward positioning the thumb on set intervals.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Minimum range parameter (optional)`}
        </strong>
        {`: Marks the beginning of a slider with its minimum value.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Maximum range parameter (optional)`}
        </strong>
        {`: Marks the end of a slider with its maximum value.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a slider when`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users need a quick way to adjust values within a defined range, such as in a form.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Users need to make small incremental changes.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The numeric value can either be a whole number or fractional.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to bypass device limitations, such as keyboardless interactions and form submissions on mobile.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don’t use a slider when`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The numeric value range is infinite.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The numeric value required is not part of a range, or is arbitrary. For this use case, use an `}
        <PatternflyThemeLink {...{"to":"/components/input-group"}}>
          {`input group`}
        </PatternflyThemeLink>
        {`
instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There is not enough space in the UI.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`When using sliders, follow these best practices`}
      </strong>
      {`:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Display a default numeric value that users can modify by using the slider or by typing directly into the input field, or scale using the increase or decrease buttons.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Always keep the selected slider value visible to the user.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Communicate maximum and minimum parameters of the range, especially with unusual parameters.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Determine an increment size relative to your specific value range. Scale your increment size to accommodate values users can input in context. For example: If your range is from 0-10, structure your slider with increments of 1. If your range is from 0-100, structure your slider with increments of 1 or 10 or 25. Communicate different increments by adding tick marks to a slider.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"continuous-slider","size":"h3","className":"ws-title ws-h3"}}>
      {`Continuous slider`}
    </AutoLinkHeader>
    <img src={srcImport366} height={srcImport366.height * 600 / srcImport366.width} {...{"alt":"Visual of continuous slider","width":"600","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Allows users to select any value within the slider's range using a thumb indicator. Use this variation when any value within your slider’s range is valid for your use case.`}
    </p>
    <AutoLinkHeader {...{"id":"discrete-slider","size":"h3","className":"ws-title ws-h3"}}>
      {`Discrete slider`}
    </AutoLinkHeader>
    <img src={srcImport367} height={srcImport367.height * 600 / srcImport367.width} {...{"alt":"Visual of discrete slider","width":"600","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Allows users to select a value by adjusting a thumb indicator to predefined values represented by tick marks on a track. Users can only select values indicated by a tick mark.  If they attempt to select an unmarked value, the thumb indicator will always shift to the closest tick mark.`}
    </p>
    <AutoLinkHeader {...{"id":"slider-within-input-groups","size":"h3","className":"ws-title ws-h3"}}>
      {`Slider within input groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a slider is combined with other elements, it allows users to better control value selection.
This variation combines multiple input types in one control and presents more options on how to adjust a selected value.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about using input groups, visit our `}
      <PatternflyThemeLink {...{"to":"/components/input-group/design-guidelines"}}>
        {`input group guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"with-default-value-input","size":"h4","className":"ws-title ws-h4"}}>
      {`With default value input`}
    </AutoLinkHeader>
    <img src={srcImport368} height={srcImport368.height * 600 / srcImport368.width} {...{"alt":"Visual of slider with input value","width":"600","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Number input in hover state`}
        </strong>
        {`: Allows users to type in their numeric input or to adapt the slider value by using caret buttons.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Unit (optional)`}
        </strong>
        {`: Provides a unit symbol for the value in the input field, when applicable.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Value input is restrained by prescribed maximum and minimum parameters, and appears on the right side of the slider.`}
    </p>
    <AutoLinkHeader {...{"id":"with-thumb-value","size":"h4","className":"ws-title ws-h4"}}>
      {`With thumb value`}
    </AutoLinkHeader>
    <img src={srcImport369} height={srcImport369.height * 600 / srcImport369.width} {...{"alt":"Visual of  slider with thumb value","width":"600","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Input field`}
        </strong>
        {`: Allows users to type in their numeric input.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Unit (optional)`}
        </strong>
        {`: Provides a unit symbol for the value in the input field, when applicable.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`In this slider variation, the value input is located over the thumb.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about using number inputs, visit our `}
      <PatternflyThemeLink {...{"to":"/components/number-input/design-guidelines"}}>
        {`number input guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"with-buttons","size":"h4","className":"ws-title ws-h4"}}>
      {`With buttons`}
    </AutoLinkHeader>
    <img src={srcImport370} height={srcImport370.height * 500 / srcImport370.width} {...{"alt":"Visual of slider with buttons","width":"500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use buttons on either side of the slider to increase or decrease selected value by set increments.`}
    </p>
    <AutoLinkHeader {...{"id":"with-lock-feature","size":"h4","className":"ws-title ws-h4"}}>
      {`With lock feature`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Unlocked value`}
    </p>
    <img src={srcImport371} height={srcImport371.height * 500 / srcImport371.width} {...{"alt":"Visual of an unlocked slider","width":"500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Locked value`}
    </p>
    <img src={srcImport372} height={srcImport372.height * 500
 / srcImport372.width} {...{"alt":"Visual of a locked slider","width":"500\n","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a lock icon along with a slider if there is a use case to lock or unlock the slider value. Use a lock icon to display different user permissions or to indicate the possibility of automatic value alteration. Clicking on a lock icon results in locking a selected value and disabling the slider. If the user permissions allow it, users can unlock value by clicking on a lock icon.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsSliderDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
