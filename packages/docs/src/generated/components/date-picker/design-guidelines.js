import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport147 from '../../../content/design-guidelines/components/date-picker/./img/date-picker.png';
import srcImport148 from '../../../content/design-guidelines/components/date-picker/./img/Date range selection.png';
import srcImport149 from '../../../content/design-guidelines/components/date-picker/./img/Time and Date picker horizontal.png';
import srcImport150 from '../../../content/design-guidelines/components/date-picker/./img/Time and Date picker vertical with labels.png';
import srcImport151 from '../../../content/design-guidelines/components/date-picker/./img/Picker with All day checkbox.png';
import srcImport152 from '../../../content/design-guidelines/components/date-picker/./img/In toolbar attribute filter.png';
import srcImport153 from '../../../content/design-guidelines/components/date-picker/./img/Date picker in toolbar.png';
import srcImport154 from '../../../content/design-guidelines/components/date-picker/./img/In toolbar filter group vertical.png';
import srcImport155 from '../../../content/design-guidelines/components/date-picker/./img/Custom date range filtering.png';
import srcImport156 from '../../../content/design-guidelines/components/date-picker/./img/Custom date range - the most frequent options.png';
import srcImport157 from '../../../content/design-guidelines/components/date-picker/./img/Date picker in form.png';
import srcImport158 from '../../../content/design-guidelines/components/date-picker/./img/Advance scheduling modal.png';
import srcImport159 from '../../../content/design-guidelines/components/date-picker/./img/placeholder date picker.png';
import srcImport160 from '../../../content/design-guidelines/components/date-picker/./img/helper text date picker.png';
import srcImport161 from '../../../content/design-guidelines/components/date-picker/./img/Error message date picker.png';
const pageData = {
  "id": "Date picker",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/date-picker/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/date-picker/date-picker.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`date picker`}
      </strong>
      {` helps users select a specific date, time, or range of time-related values.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport147} height={srcImport147.height * 382 / srcImport147.width} {...{"alt":"Date picker elements","width":"382","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Date fields`}
        </strong>
        {`: Displays a user’s selected date. Always fill the date field with a placeholder date format (MM/DD/YYYY) or a pre-selected date before users make their selection via calendar or keyboard. The date field should never be empty.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar icon`}
        </strong>
        {`: Opens a calendar upon selection.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selection arrows`}
        </strong>
        {`: Allow users to navigate between months.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Calendar`}
        </strong>
        {`: Allows users to select and navigate between days, months, years.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selected date`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Current date (today’s date)`}
        </strong>
        {`: Indicates the day users access the calendar. Always highlighted.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Hover state`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Disabled state`}
        </strong>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use date pickers to enable users to select or input a date for use cases like item filtration or scheduling in a form.`}
    </p>
    <AutoLinkHeader {...{"id":"single-date-selection","size":"h3","className":"ws-title ws-h3"}}>
      {`Single date selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A date picker allows users to select a single date. When a user enters a new date by date field input or calendar selection, the new date automatically replaces any placeholder or previously-selected value in the date input field.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more guidance on writing date formats, see the `}
      <PatternflyThemeLink {...{"to":"#date-format"}}>
        {`content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"date-range-selection","size":"h3","className":"ws-title ws-h3"}}>
      {`Date range selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Two date pickers can be used together to specify a date range. The first one functions as a start (“from”) date and the second one functions as an end (“to”) date. By default, when a user selects a start date, the end date will automatically display as the next calendar day.`}
    </p>
    <img src={srcImport148} height={srcImport148.height * 482 / srcImport148.width} {...{"alt":"Date range selection - elements","width":"482","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selected start date`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Time range`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selected end date`}
        </strong>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"date-and-time-range-selection","size":"h3","className":"ws-title ws-h3"}}>
      {`Date and time range selection`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Combine a date picker and time picker when you want users to select a range of times across multiple days.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Behavior`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`When date pickers and time pickers are combined, each control’s behavior will remain the same. After users select the start date and time, the end date and time will be automatically set to the same hour of the next day.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Depending on your use case, time pickers and date pickers can be arranged in 2 ways: Horizontal alignment and vertical alignment (in this case labels are recommended).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Horizontal`}
      </strong>
    </p>
    <img src={srcImport149} height={srcImport149.height * 550 / srcImport149.width} {...{"alt":"Example of a horizontal date and time range selection","width":"550","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For horizontally arranged date and time pickers, connect each combined date and time picker with "to" so that users know which date defines which point of the date range. Always arrange each date and time picker in chronological order from left to right, with the start picker on the left and the end picker on the right.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Vertical`}
      </strong>
    </p>
    <img src={srcImport150} height={srcImport150.height * 242 / srcImport150.width} {...{"alt":"Example of a vertical date and time range selection with labels","width":"242","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For vertically arranged date and time pickers, always include field labels like "Starts" and "Ends" to indicate which picker corresponds to which point of the date range. Always arrange each date and time picker in chronological order from top to bottom, with the start picker on the top and the end picker below.`}
    </p>
    <AutoLinkHeader {...{"id":"all-day-checkbox","size":"h4","className":"ws-title ws-h4"}}>
      {`"All day" checkbox`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider using adding an "All day" checkbox to a date and time picker to simplify user input when selecting specific dates, or selecting and entire day for an event. Checking the "All day" checkbox will disable the time field and include all hours of their selected dates into their inputs.`}
    </p>
    <img src={srcImport151} height={srcImport151.height * 750 / srcImport151.width} {...{"alt":"Example of a vertical date and time range selection with All day checkbox","width":"750","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"date-picker-in-a-toolbar","size":"h3","className":"ws-title ws-h3"}}>
      {`Date picker in a toolbar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use date pickers in a toolbar to filter by date ranges.`}
    </p>
    <AutoLinkHeader {...{"id":"date-picker-in-attribute-filter","size":"h4","className":"ws-title ws-h4"}}>
      {`Date picker in attribute filter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Date range fields can be added to an attribute filter as an attribute. Selecting the Date range attribute will display a date picker, and push other content in the toolbar to the right - in this case, the CTA button. The date(s) selected should display as chips under the filter.`}
    </p>
    <img src={srcImport152} height={srcImport152.height * 500 / srcImport152.width} {...{"alt":"Example of date picker in toolbar attribute filter","width":"500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"date-picker-filter-group","size":"h4","className":"ws-title ws-h4"}}>
      {`Date picker filter group`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Date pickers can be added to a toolbar as filters, placed next to other stand alone filters. Since horizontal space is limited in toolbar filter groups, use placeholder text to designate the range’s start and end dates.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more guidance on using filter groups, see our `}
      <PatternflyThemeLink {...{"to":"/components/toolbar/design-guidelines"}}>
        {`toolbar design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport153} height={srcImport153.height * 780 / srcImport153.width} {...{"alt":"Example of date picker in toolbar filter group","width":"780","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Some use cases may call for a two-lined toolbar. If your toolbar spans two lines, include your dropdown and filters on the top line and your date pickers below.`}
    </p>
    <img src={srcImport154} height={srcImport154.height * 350 / srcImport154.width} {...{"alt":"Example of date picker in toolbar filter group - two liner","width":"350","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about using different types of filters, see our `}
      <PatternflyThemeLink {...{"to":"/guidelines/filters"}}>
        {`filters guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"additional-dropdown-for-simplified-date-range-filtering","size":"h5","className":"ws-title ws-h5"}}>
      {`Additional dropdown for simplified date-range filtering`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add an optional dropdown to date-range filters within a toolbar to allow users to filter by the most common date-range options associated with the corresponding table.`}
    </p>
    <img src={srcImport155} height={srcImport155.height * 700 / srcImport155.width} {...{"alt":"Example of date picker in toolbar filter group - two liner","width":"700","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When a user selects an option from this additional dropdown, the date picker automatically populates with the first and last day of their specified range.`}
    </p>
    <img src={srcImport156} height={srcImport156.height * 700 / srcImport156.width} {...{"alt":"Example of date picker in toolbar filter group - two liner","width":"700","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Example:  If a user selects `}
      <strong>
        {`Last month`}
      </strong>
      {`  from the date-range dropdown, the date picker will display the first day (11/1/2020) and last day (11/30/2020) of that date range.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Once the date picker displays these prefilled values, users can edit each one. Upon customizing the date range, a user’s selected dropdown option will change from `}
      <strong>
        {`Last month`}
      </strong>
      {` to `}
      <strong>
        {`Custom`}
      </strong>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"date-pickers-in-a-form","size":"h3","className":"ws-title ws-h3"}}>
      {`Date pickers in a form`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a date picker in a form to display basic scheduling options, typically for future events. In some use cases, you may preselect and display the most common date options users can choose from based on your app such as ‘Execute command now’ or ‘Don’t repeat execution’`}
    </p>
    <img src={srcImport157} height={srcImport157.height * 300 / srcImport157.width} {...{"alt":"Example of a date picker in a form - with other elements","width":"300","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Some use cases will call for more advanced scheduling options, such as scheduling an action to take place at or before a certain date, repeat on a certain day or interval, or end after a certain number of occurrences.`}
    </p>
    <img src={srcImport158} height={srcImport158.height * 500 / srcImport158.width} {...{"alt":"Example of a date picker used with other scheduling options","width":"500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"date-format","size":"h3","className":"ws-title ws-h3"}}>
      {`Date format`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Date formats are product-specific and often depend on user locale. To minimize confusion, choose one date format and keep it consistent. If one date picker displays MM/DD/YYYY, be sure to repeat the same date format throughout your interface.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Learn more about recommended date and time conventions in our `}
      <PatternflyThemeLink {...{"to":"/content/numerics"}}>
        {`date and time guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"placeholder-text","size":"h3","className":"ws-title ws-h3"}}>
      {`Placeholder text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always use placeholder text in date fields to provide an example of the accepted date format. Placeholder text will disappear after users begin inputting their own date.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: MM/DD/YYYY`}
    </p>
    <img src={srcImport159} height={srcImport159.height * 200 / srcImport159.width} {...{"alt":"Placeholder text in date picker","width":"200","className":"ws-img"}}>
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
      {`Use helper text to provide permanent guidance below the date field.`}
    </p>
    <img src={srcImport160} height={srcImport160.height * 200 / srcImport160.width} {...{"alt":"Date picker witth helper text","width":"200","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective placeholder text, see our `}
            <a href="https://www.patternfly.org/v4/components/form/design-guidelines">{`form design guidelines`}</a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"error-message","size":"h3","className":"ws-title ws-h3"}}>
      {`Error message`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use field level error messages to alert users when their inputted date or date format is invalid. Always specify what went wrong so that users can quickly identify the problem and fix it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Select a date within valid range.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Enter a valid date: `}
        <em>
          {`MM/DD/YYYY`}
        </em>
        {`.`}
      </li>
    </ul>
    <img src={srcImport161} height={srcImport161.height * 200 / srcImport161.width} {...{"alt":"Date picker with error message","width":"200","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For more information about writing effective error messages, see our `}
            <a href="https://www.patternfly.org/v4/ux-writing/error-messages/">{`UX writing style guide`}</a>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsDatePickerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
