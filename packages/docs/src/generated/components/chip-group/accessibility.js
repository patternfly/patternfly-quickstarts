import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip group",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/chip-group/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/chip-group/chip-group.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`chip group`}
      </strong>
      {` represents an attribute that has been assigned one or more values. An OR relationship is implied between values in the group. Chip groups are useful to express complex filters to a data set, for example.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Keyboard users will be able to press `}
      <strong>
        {`Tab`}
      </strong>
      {` to navigate through all interactive elements of the chip group (this will include close buttons, any overflow chips with tooltips,  view more buttons, etc). The screen reader experience, likewise, will mostly be based on native interaction expectations.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Bear in mind that the `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
      {` attribute on the close button is based on the ID of the chip itself. So, if you are `}
      <strong>
        {`changing the id of the chip`}
      </strong>
      {`, you will need to update the `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
      {` on the chip.`}
    </p>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`In general, the chip group component already has accessibility built in. However, if you’d like to customize it, edit the following:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React component`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React prop`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Which HTML element it appears on in markup`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Explanation`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Chip`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`closeBtnAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`'close'	Aria Label for close button on the chip`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ChipGroup`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-chip-group__list`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Aria label for chip group that does not have a category name (will not work when `}
              <code {...{"className":"ws-code"}}>
                {`categoryName`}
              </code>
              {` included)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ChipGroup`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`closeBtnAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`'Close chip group' Aria label for close button`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsChipGroupAccessibilityDocs';
Component.pageData = pageData;

export default Component;
