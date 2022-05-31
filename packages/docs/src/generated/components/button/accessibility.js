import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Button",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/button/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/button/button.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`button`}
      </strong>
      {` is a box area or text that communicates and triggers user actions when clicked or selected. Buttons are interactive elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to focus on the button using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backwards through interactive elements. They should be able to select a focused button using `}
      <strong>
        {`Space`}
      </strong>
      {` or `}
      <strong>
        {`Enter`}
      </strong>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the button and it should have text that can be read by a screen reader, or alternative text if it only contains an icon. For alternative text, `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` is the most common choice.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility-application","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility application:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A button containing only an icon without supporting text should be labeled with the `}
        <code {...{"className":"ws-code"}}>
          {`aria-label`}
        </code>
        {` prop.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A regular disabled button is not focusable, but an aria-disabled button is. `}
        <code {...{"className":"ws-code"}}>
          {`isAriaDisabled`}
        </code>
        {` should be used when a disabled button provides interactive elements (like a tooltip).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Screen readers may read buttons to users out of context. For example, screen reader users can navigate a page specifically by form controls. So button text should be unique and easily understood on its own. Refer to PatternFly's accessibility guide for more information.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The following props can be added or are customizable in PatternFly:`}
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
              {`React component that it should be applied to`}
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
              <code {...{"className":"ws-code"}}>
                {`aria-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button.pf-m-plain`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Adds accessible text to the button if the button doesn’t contain descriptive text on its own.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`isAriaDisabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`button.pf-c-button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsButtonAccessibilityDocs';
Component.pageData = pageData;

export default Component;
