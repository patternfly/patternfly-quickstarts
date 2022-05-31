import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport403 from '../../../content/design-guidelines/components/time picker/./img/Time picker- elements.png';
import srcImport404 from '../../../content/design-guidelines/components/time picker/./img/time range.png';
import srcImport405 from '../../../content/design-guidelines/components/time picker/./img/Time range dropdown.png';
import srcImport406 from '../../../content/design-guidelines/components/time picker/./img/time picker in a form.png';
import srcImport407 from '../../../content/design-guidelines/components/time picker/./img/Advance scheduling - time.png';
import srcImport408 from '../../../content/design-guidelines/components/time picker/./img/time zone.png';
import srcImport409 from '../../../content/design-guidelines/components/time picker/./img/placeholder text -time picker.png';
import srcImport410 from '../../../content/design-guidelines/components/time picker/./img/Helper text -time picker.png';
import srcImport411 from '../../../content/design-guidelines/components/time picker/./img/Error message  time picker.png';
const pageData = {
  "id": "Time picker",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/time-picker/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/time picker/time-picker.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`time picker`}
      </strong>
      {` allows users to select a time from a list of options. Time can be displayed in hours and minutes, but not in seconds.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport403} height={srcImport403.height * 362 / srcImport403.width} {...{"alt":"Time picker elements","width":"362","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time field`}
        </strong>
        {`: Displays a user's selected time. Always fill the time field with a placeholder time format (HH:MM) or a pre-selected time. Users can choose a time by either typing in a time, or selecting one from the menu list of time options. The time field should never be empty.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time field in focused state`}
        </strong>
        {`: Indicates that menu list of time options is open.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu`}
        </strong>
        {`: Contains a list of times in set increments, such as 12:00 AM to 11:30 PM in 30 minute increments.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu item in hover state`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu item in disabled state`}
        </strong>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use time pickers to enable users to select or input a time. For example, in a toolbar for item filtration, or in a form for scheduling inputs.`}
    </p>
    <AutoLinkHeader {...{"id":"single-time-selection","size":"h3","className":"ws-title ws-h3"}}>
      {`Single time selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A time picker allows users to select a single time. When a user enters a new time in the time field, the new time automatically replaces any placeholder or previously-selected value in that input field.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Typically, time picker menus list selectable times in 30-minute increments. However, users always have the option to input any desired times that don't fall on the suggested time increments. For example, a user could type in 12:38 PM despite the list of options only showing 12:30 PM and 1:00 PM options.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For guidance on writing time formats for time pickers, see the `}
      <PatternflyThemeLink {...{"to":"#time-format"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"time-range-selection","size":"h3","className":"ws-title ws-h3"}}>
      {`Time range selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Two time pickers can be used together to specify a time range. The first one functions as a start (“from”) time and the second one functions as an end (“to”) time.`}
    </p>
    <img src={srcImport404} height={srcImport404.height * 300 / srcImport404.width} {...{"alt":"Time picker elements","width":"300","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Until the user selects a start time, the end time field will be disabled.`}
    </p>
    <img src={srcImport405} height={srcImport405.height * 302 / srcImport405.width} {...{"alt":"Time picker elements","width":"302","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"date-and-time-range-selection","size":"h3","className":"ws-title ws-h3"}}>
      {`Date and time range selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Combine a date picker and time picker when you want users to select a range of times across multiple days.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about using date and time pickers together, visit our `}
      <PatternflyThemeLink {...{"to":"/components/date-picker/design-guidelines"}}>
        {`date picker guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"time-picker-in-a-toolbar","size":"h3","className":"ws-title ws-h3"}}>
      {`Time picker in a toolbar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use time pickers as filters in a toolbar. Note that time pickers aren't commonly used on their own, and will usually be accompanied by a `}
      <PatternflyThemeLink {...{"to":"/components/date-picker"}}>
        {`date picker`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`See the `}
      <PatternflyThemeLink {...{"to":"/components/date-picker/design-guidelines"}}>
        {`date picker usage guidelines`}
      </PatternflyThemeLink>
      {` to learn more about using date pickers and time pickers in a toolbar.`}
    </p>
    <AutoLinkHeader {...{"id":"time-picker-in-a-form","size":"h3","className":"ws-title ws-h3"}}>
      {`Time picker in a form`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a time picker in a form to display basic scheduling options, typically for future events. In some use cases, you may preselect and display the most common time options users can choose from.`}
    </p>
    <img src={srcImport406} height={srcImport406.height * 470 / srcImport406.width} {...{"alt":"Time picker in a form","width":"470","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Some use cases will call for more advanced scheduling options, such as scheduling an action to take place at or before a certain time, repeat at a certain time interval, or end after a certain number of occurrences.`}
    </p>
    <img src={srcImport407} height={srcImport407.height * 470 / srcImport407.width} {...{"alt":"Time picker in a form - modal","width":"470","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"time-picker-with-time-zones","size":"h3","className":"ws-title ws-h3"}}>
      {`Time picker with time zones`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use variable checkboxes, radio buttons, dropdowns, or input fields to help users select their intended time based on their desired or current time zone.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For some use cases, users may wish to customize their time display or selection based on Universal Time Coordinated (UTC) or their own personal time zone. If applicable, add a time zone dropdown so that users can select their desired time zone from a series of options.`}
    </p>
    <img src={srcImport408} height={srcImport408.height * 260 / srcImport408.width} {...{"alt":"time zone","width":"260","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Learn more about formatting and displaying time zones in our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/numerics"}}>
        {`date and time guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"time-format","size":"h3","className":"ws-title ws-h3"}}>
      {`Time format`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Time formats are product-specific and often depend on user locale. To minimize confusion, choose one time format and keep it consistent. If one time picker displays HH:MM, be sure to repeat the same format throughout your interface.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Learn more about date and time best practices in our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/numerics"}}>
        {`date and time guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"placeholder-text","size":"h3","className":"ws-title ws-h3"}}>
      {`Placeholder text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always use placeholder text in time fields to provide an example of the accepted time format. Placeholder text will disappear after users begin inputting their own time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: `}
      <em>
        {`HH:MM`}
      </em>
    </p>
    <img src={srcImport409} height={srcImport409.height * 200 / srcImport409.width} {...{"alt":"time picker with a placeholder","width":"200","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective placeholder text, see our `}
            <a href="https://www.patternfly.org/v4/components/form/design-guidelines">{`form design guidelines`}</a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"helper-text","size":"h3","className":"ws-title ws-h3"}}>
      {`Helper text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use helper text to provide permanent guidance below the time field.`}
    </p>
    <img src={srcImport410} height={srcImport410.height * 200 / srcImport410.width} {...{"alt":"time picker with a helper text","width":"200","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective inline help, see our `}
            <a href="https://www.patternfly.org/v4/components/form/design-guidelines">{`form design guidelines`}</a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"error-messages","size":"h3","className":"ws-title ws-h3"}}>
      {`Error messages`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use field level error messages to alert users when their inputted time or time format is invalid. Always specify what went wrong so that users can quickly identify the problem and fix it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Select a time within valid range.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Enter a valid time: `}
        <em>
          {`HH:MM`}
        </em>
      </li>
    </ul>
    <img src={srcImport411} height={srcImport411.height * 200 / srcImport411.width} {...{"alt":"time picker with an error message","width":"200","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective error messages, see our `}
            <a href="https://www.patternfly.org/v4/ux-writing/error-messages/">{`UX writing style guide`}</a>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTimePickerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
