import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Calendar month",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/calendar-month/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/calendar-month/calendar-month.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`calendar month`}
      </strong>
      {` is a box area or text that communicates and triggers user actions when clicked or selected. Calendar months are interactive elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to focus on parts of the calendar month using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backward through interactive elements. They should be able to select a focused component, such as a month on the date selection menu, using `}
      <strong>
        {`Space`}
      </strong>
      {` or `}
      <strong>
        {`Enter`}
      </strong>
      {`. They should also be able to use `}
      <strong>
        {`Arrow Keys`}
      </strong>
      {` to navigate through the calendar to select a date.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the calendar month and it should be able to be described by a screen reader. Since a calendar month is interactive, screen readers must announce the different interactive elements of the component. For example, in the dropdown menus to select a month, screen readers must announce the month that the user is on, and within the calendar screen readers must announce the date the user is on.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following props/attributes have been added for you or are customizable in PatternFly:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React prop`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React component it should be applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Which HTML element it appears on in markup`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Reason used`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`cellAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CalendarMonth, CalendarFormat`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__date`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the date cells. Unlike most of our AriaLabel props, cellAriaLabel expects a function which takes a Date object as a parameter and returns a string.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`nextMonthAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CalendarMonth, CalendarFormat`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__header-nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the next month button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`prevMonthAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CalendarMonth, CalendarFormat`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-calendar-month__header-nav-control`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the previous month button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`yearInputAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CalendarMonth, CalendarFormat`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the year input`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsCalendarMonthAccessibilityDocs';
Component.pageData = pageData;

export default Component;
