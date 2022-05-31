import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Units and symbols",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/units-and-symbols/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/units-and-symbols.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use consistent formatting, terminology, and symbols to display units of measure in your UI. Units of measure and symbols often appear when describing quantitative values including:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Date and time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Data storage.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Data bandwidth.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Currency.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`When providing quantitative values in your UI, use the International System of Units (SI units) so that your units of measure can be understood by global users. Use the following base units and symbols to describe different quantities:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Length: meter (m)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Mass: kilogram (kg)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Electric current: ampere (A)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Thermodynamic temperature: kelvin (K)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Amount of substance: mole (mol)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Luminous intensity: candela (cd)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"time","size":"h2","className":"ws-title ws-h2"}}>
      {`Time`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whenever possible, write the full name of each time unit.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: Write "6 minutes" instead of "6 min."`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If space is limited, use symbols to communicate the same units of time in less space:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Millisecond (ms)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Second (s)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Minute (min)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Hour (hr)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Avoid using symbols for days, weeks, months, and years.`}
    </p>
    <AutoLinkHeader {...{"id":"data-storage","size":"h2","className":"ws-title ws-h2"}}>
      {`Data storage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Computer storage and memory are typically measured in bytes. Bytes can be shown in `}
      <strong>
        {`binary units`}
      </strong>
      {` (gibibytes) or `}
      <strong>
        {`decimal/metric units`}
      </strong>
      {` (gigabytes).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use binary units to express amounts of digital information in alignment with most computing and open source software. This consistency eliminates confusion.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Binary unit`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Symbol`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Value`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 kibibyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`KiB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1024`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 mebibyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`MiB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1024`}
                            <sup>{`2`}</sup>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 gibibyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`GiB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1024`}
                            <sup>{`3`}</sup>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 tebibyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`TiB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1024`}
                            <sup>{`4`}</sup>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Metric unit`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Symbol`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Value`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 kilobyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`KB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1000`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 megabyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`MB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1000`}
                            <sup>{`2`}</sup>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 gigabyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`GB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1000`}
                            <sup>{`3`}</sup>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 terabyte`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`TB`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Value"}}>
            <div>
              {`1000`}
                            <sup>{`4`}</sup>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"data-bandwidth","size":"h2","className":"ws-title ws-h2"}}>
      {`Data bandwidth`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Bandwidth is the amount of data transferred from one point to another within a network in a specified amount of time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Data transfer is primarily measured in two ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Megabits/second (Mbps)`}
        </strong>
        {`: Specifies download and upload speeds on the internet`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Megabytes/second (MBps)`}
        </strong>
        {`: Specifies the quantity of data or file size transferred over time`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Data transfer rates can be measured in binary or metric units. Always align this unit with the scale you use to measure data size.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Binary unit`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Symbol`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 mebibyte/second`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`MiBps`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 gibibyte/second`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`GiBps`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Binary unit"}}>
            <div>
              {`1 tebibyte/second`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`TiBps`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Metric unit`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Symbol`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 megabyte/second`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`MBps`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 gigabyte/second`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`GBps`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Metric unit"}}>
            <div>
              {`1 terabyte/second`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Symbol"}}>
            <div>
              {`TBps`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: Pay special attention to letter case when writing symbols for bits (b) and bytes (B). Eight bits (b) make up one byte (B), so using the wrong symbol will change your meaning.`}
    </p>
    <AutoLinkHeader {...{"id":"currency","size":"h2","className":"ws-title ws-h2"}}>
      {`Currency`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Wherever possible, display currency in three-letter code according to `}
      <PatternflyThemeLink {...{"to":"https://www.iso.org/iso-4217-currency-codes.html"}}>
        {`ISO Standard 4217`}
      </PatternflyThemeLink>
      {`. See our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/numerics#numbers-and-currency"}}>
        {`Numerics`}
      </PatternflyThemeLink>
      {` page for more information about writing currency.`}
    </p>
    <AutoLinkHeader {...{"id":"writing-units-of-measure","size":"h2","className":"ws-title ws-h2"}}>
      {`Writing units of measure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Follow these general best practices for writing units of measure:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Best practice`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Examples`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Use consistent units, and avoid mixing them.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Write `}
              <em>
                {`10 to 75 seconds`}
              </em>
              {` instead of `}
              <em>
                {`10 seconds to 1.25 minutes`}
              </em>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Include a space between numbers and units, except for percentages.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Add a space to `}
              <em>
                {`75 kg`}
              </em>
              {` but not to `}
              <em>
                {`75%`}
              </em>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Display the full name of each unit unless space is limited.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Write `}
              <em>
                {`6 seconds ago`}
              </em>
              {` instead of `}
              <em>
                {`6s ago.`}
              </em>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Don't make unit symbols plural.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Write `}
              <em>
                {`60 cm`}
              </em>
              {`, not `}
              <em>
                {`60 cms`}
              </em>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Don't punctuate unit symbols unless they end a sentence.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              <em>
                {`60 cm doesn't end this sentence, so "cm" isn't followed by a period.`}
              </em>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Write SI unit symbols in lowercase, unless a symbol is named after a person or proper noun, then capitalize its first letter.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Write `}
              <em>
                {`W`}
              </em>
              {` for watt.  `}
                            <br/>
                            <br/>
              {`Write `}
              <em>
                {`Hz`}
              </em>
              {` for hertz.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Don't mix symbols or apply mathematical operations to unit names.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Write `}
              <em>
                {`kg/m`}
                                <sup>{`3`}</sup>
              </em>
              {` instead of `}
              <em>
                {`kilogram/m`}
                                <sup>{`3`}</sup>
              </em>
              {`.  `}
                            <br/>
                            <br/>
              {`Write `}
              <em>
                {`kg · m`}
                                <sup>{`-3`}</sup>
              </em>
              {` instead of `}
              <em>
                {`kilogram/cubic meter`}
              </em>
              {`.  `}
                            <br/>
                            <br/>
              {`Use `}
              <em>
                {`kilogram per cubic meter`}
              </em>
              {` instead of `}
              <em>
                {`kg/cubic meter`}
              </em>
              {`, `}
              <em>
                {`kilogram per meter`}
                                <sup>{`3`}</sup>
              </em>
              {`, or `}
              <em>
                {`kg per m`}
                                <sup>{`3`}</sup>
              </em>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Use parentheses to display a secondary unit of measure.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              <em>
                {`10°C (50°F)`}
              </em>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Clearly express units for two or more related quantities. If necessary, you can include the unit after each numeral.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Write `}
              <em>
                {`6 to 8 inches`}
              </em>
              {` or `}
              <em>
                {`6 inches to 8 inches`}
              </em>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`Use symbols to display derived units of measure (units formed using a calculation).`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              <em>
                {`38 mph, 27 ft/s`}
                                <sup>{`2`}</sup>
              </em>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Best practice"}}>
            <div>
              {`For derived units of measure, use the symbol that represents its word form, since it will be more familiar to your users.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Examples"}}>
            <div>
              {`Use `}
              <em>
                {`Hz`}
              </em>
              {` for Hertz instead of the derivation `}
              <em>
                {`cycles per second (cycles/second)`}
              </em>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UxWritingUnitsAndSymbolsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
