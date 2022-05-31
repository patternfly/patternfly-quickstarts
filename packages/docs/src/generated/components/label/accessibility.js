import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Label",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/label/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/label/label.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`label`}
      </strong>
      {` highlights an element on a page to draw attention to it or make it more searchable. Labels can also be used to tag items of the same category.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to interact with the label if it contains interactive elements such as a link or close button. The user should be able to focus on an interactive part of a label using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backward through interactive elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the label and read the label text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following props/attributes have been added for you or are customizable in PatternFly:`}
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
              {`Label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`closeBtnProps`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Customize the props on the close button of the label. For example, to change the `}
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
              {`, pass `}
              <code {...{"className":"ws-code"}}>
                {`closeBtnProps={{'aria-label': 'new label'}}`}
              </code>
              {` to the Label component.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelAccessibilityDocs';
Component.pageData = pageData;

export default Component;
