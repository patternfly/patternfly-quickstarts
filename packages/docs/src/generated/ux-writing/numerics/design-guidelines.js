import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Numerics",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/numerics/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/numerics.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"date-and-time-formats","size":"h2","className":"ws-title ws-h2"}}>
      {`Date and time formats`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All date and time formats should be localizable, not hard-coded. When building localizable date and time formats, development teams should share the same library by using resources like `}
      <PatternflyThemeLink {...{"to":"https://date-fns.org/"}}>
        {`date-fns`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"https://day.js.org/"}}>
        {`Day.js`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly date and time formats follow the American standard. When localizing, use the appropriate format for the language locale and follow ISO standards.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Element`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Description`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Example`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Date`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`Use Month DD, YYYY`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`September 17, 2020 `}
                                <br/>
                                <br/>
                {`Sep 17, 2020`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Date numeric value`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`When you represent the date as a numeric value or label, use MM-DD-YYYY.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`09-17-2020`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Time`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`Display time in either 12-hour or 24-hour (UTC) time.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`12-hour: 3:00 PM `}
                                <br/>
                                <br/>
                {`With seconds: 3:30:11 PM `}
                                <br/>
                                <br/>
                {`24-hour: 15:00`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`12-hour time notation`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`This time convention divides the 24 hours of the day into 2 periods of 12 hours, AM and PM. `}
                                <br/>
                                <br/>
                {`12-hour time notation is the American standard.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`3:00 PM`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`24-hour time notation`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`This time convention divides the day by 24 hours and runs from midnight to midnight. The hours are represented from 0 to 23.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`14:00`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Date and time`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`Include the timestamp after the date.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`Thursday, January 21, 2019 9:38:11 PM EST`}
                                <br/>
                                <br/>
                {`Thursday, 21 January 2019, 9:38:11 PM EST `}
                                <br/>
                                <br/>
                {`07 Jan 2019, 23:33 UTC`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Time zone`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`Display time in the user's time zone or in UTC. `}
                                <br/>
                                <br/>
                {`Use UTC when spanning multiple time zones.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`Maintenance begins today at 14:00 UTC (2 PM EST).`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Day`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`Write out the full name of the day. If space is limited, use the day’s 3-letter abbreviation: `}
                                <ul>                  <li>{`Mon`}</li>
                                    <li>{`Tue`}</li>
                                    <li>{`Wed`}</li>
                                    <li>{`Thu`}</li>
                                    <li>{`Fri`}</li>
                                    <li>{`Sat`}</li>
                                    <li>{`Sun`}</li></ul>
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`Monday, September 17, 2020 `}
                                <br/>
                                <br/>
                {`Mon, Sep 17, 2020`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Month`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`Write out the full name of the month. If space is limited, use the month’s 3-letter abbreviation. `}
                                <ul>                  <li>{`Jan`}</li>
                                    <li>{`Feb`}</li>
                                    <li>{`Mar`}</li>
                                    <li>{`Apr`}</li>
                                    <li>{`May`}</li>
                                    <li>{`Jun`}</li>
                                    <li>{`Jul`}</li>
                                    <li>{`Aug`}</li>
                                    <li>{`Sep`}</li>
                                    <li>{`Oct`}</li>
                                    <li>{`Nov`}</li>
                                    <li>{`Dec`}</li></ul>
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`September 17, 2020 `}
                                <br/>
                                <br/>
                {`Sep 17, 2020`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Element"}}>
              <div>
                {`Duration`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Description"}}>
              <div>
                {`HH:MM:SS or HH:MM`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Example"}}>
              <div>
                {`03:15:30 `}
                                <br/>
                                <br/>
                {`03:15`}
                                <br/>
                                <br/>
                {`00:15`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"absolute-or-relative-time","size":"h2","className":"ws-title ws-h2"}}>
      {`Absolute or relative time`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Using `}
      <strong>
        {`absolute`}
      </strong>
      {` or `}
      <strong>
        {`relative`}
      </strong>
      {` timestamps depends on the context. To represent the exact date and time that an event occurred, use an absolute timestamp following examples provided in the previous `}
      <PatternflyThemeLink {...{"to":"#date-and-time-formats"}}>
        {`table of date and time formats`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To represent how long ago an event occurred, use a relative timestamp. When reporting relative time, follow these examples:`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Time frame`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Usage`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`0-60 seconds`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`Just now`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`1-60 minutes`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`4 minutes ago`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`1-24 hours`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`4 hours ago`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`Yesterday`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`1 day ago`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`1-30 days ago`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`24 days ago`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`1 month-1 year ago`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`4 months ago`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`1 year+`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`07 Jan 2020`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Time frame"}}>
              <div>
                {`Exact date and time`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Usage"}}>
              <div>
                {`07 Jan 2020, 23:33 UTC`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"numbers-and-currency","size":"h2","className":"ws-title ws-h2"}}>
      {`Numbers and currency`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use numerals instead of written numbers.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`Your transaction will be complete in three business days.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Your transaction will be complete in 3 business days.`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`You have a credit of two dollars.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`You have a credit of US$2.00.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"digit-grouping","size":"h3","className":"ws-title ws-h3"}}>
      {`Digit grouping`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the American notation standard. Use a decimal comma to separate thousands.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
            <br/>
      {`
1,000,000.00`}
            <br/>
      {`
1,000,000,000`}
    </p>
    <AutoLinkHeader {...{"id":"currency","size":"h3","className":"ws-title ws-h3"}}>
      {`Currency`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For currencies that use the symbol "$" alone, add the first two letters of the ISO currency code.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`US$1,500 (United States)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`AU$1,500 (Australia)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`HK$1,500 (Hong Kong)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`CA$1,500 (Canada)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For other currencies, use their three-letter ISO code wherever possible. You can use national currency symbols, but some users may not be familiar with them. When in doubt, default to ISO.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`EUR 1,500 or £1,500 (British pound)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`GPB 1,500 or €1,500 (Euro)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`JPY 1,500 or ¥1,500 (Japanese Yen)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Use a currency's ISO three-digit numeric code when writing for computerized systems or for countries that don't use Latin scripts.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Country`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Currency`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Alphabetic code`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Numeric code`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Country"}}>
            <div>
              {`United States`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Currency"}}>
            <div>
              {`Dollar`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Alphabetic code"}}>
            <div>
              {`USD`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Numeric code"}}>
            <div>
              {`840`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Country"}}>
            <div>
              {`China`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Currency"}}>
            <div>
              {`Yuan`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Alphabetic code"}}>
            <div>
              {`CNY`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Numeric code"}}>
            <div>
              {`156`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Country"}}>
            <div>
              {`European Union`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Currency"}}>
            <div>
              {`Euro`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Alphabetic code"}}>
            <div>
              {`EUR`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Numeric code"}}>
            <div>
              {`978`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Country"}}>
            <div>
              {`United Kingdom`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Currency"}}>
            <div>
              {`Pound`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Alphabetic code"}}>
            <div>
              {`GBP`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Numeric code"}}>
            <div>
              {`826`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`Generally, we don't provide currency conversions.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'UxWritingNumericsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
