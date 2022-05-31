import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/chip/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/chip/chip.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`chip`}
      </strong>
      {` is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects. A chip contains a text element, and usually also a button that allows the user to remove the chip from a selection. Read-only or draggable chips may not have a button.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to navigate to the button on a chip, as long as the chip has a button, and remove it from a selection.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the chip and have a screen reader read the chip’s text, as well as remove the chip from a selection if it has a button.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following attributes have been added for you or are customizable in PatternFly:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              {`aria-label="`}
              {`[button label text]`}
              {`"`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              {`aria-labelledby="`}
              {`[id value of .pf-c-button]`}
              {`"`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              {`aria-hidden="true"`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<i>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Hides the icon from assistive technologies.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsChipAccessibilityDocs';
Component.pageData = pageData;

export default Component;
