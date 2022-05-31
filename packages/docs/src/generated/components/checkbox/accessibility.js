import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Checkbox",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/checkbox/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/checkbox/checkbox.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`checkbox`}
      </strong>
      {` is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Keyboard users will be able to interact with the checkbox component by pressing `}
      <strong>
        {`Space`}
      </strong>
      {` to select the input. We have added any attributes necessary to make it properly announced to screen readers.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In general, the checkbox component already has accessibility built in. The `}
      <strong>
        {`standalone input variant`}
      </strong>
      {` will need special consideration.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To make the checkbox `}
      <strong>
        {`standalone input variant`}
      </strong>
      {` accessible, add an `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` with a label for the input. You can also use `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
      {` to associate the checkbox with visible text on the page to explain the checkbox.`}
    </p>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`If you’d like to customize the checkbox component’s accessibility, edit the following:`}
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
              {`Checkbox`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-check__input`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Aria-label or accessible text for the checkbox.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsCheckboxAccessibilityDocs';
Component.pageData = pageData;

export default Component;
