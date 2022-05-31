import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport96 from '../../../content/design-guidelines/components/calendar-month/./img/Calendar.png';
const pageData = {
  "id": "Calendar month",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/calendar-month/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/calendar-month/calendar-month.md"
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
      {` component allows users to select and navigate between days, months and/or years. This component is usually used with the date picker component, to display date options and selections. For more information about usage, view `}
      <PatternflyThemeLink {...{"to":"/components/date-picker/design-guidelines"}}>
        {`date picker guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport96} height={srcImport96.height * 382 / srcImport96.width} {...{"alt":"Calendar month elements","width":"382","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Selection arrows`}
        </strong>
        {`: allow users to navigate between months.`}
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
  </React.Fragment>
);
Component.displayName = 'ComponentsCalendarMonthDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
