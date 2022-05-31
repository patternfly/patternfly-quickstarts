import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Modal",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/modal/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/modal/modal.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`modal`}
      </strong>
      {` displays important information to a user without requiring them to navigate to a new page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard and mouse users`}
      </strong>
      {` shouldn’t be able to interact with the rest of the page outside of an open modal. Set initial focus on the first focusable element in the modal. The user should be able to Tab to any interactive elements within the modal and use Tab + Shift to move backward through interactive elements. Keyboard users should be able to leave the modal by pressing Esc and focus should return to the element that invoked the modal.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` shouldn’t be able to interact with the rest of the page outside an open modal. Add alternative text for any images or non-textual buttons (like icon buttons). Images should use the alt attribute: `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` is most common to label icon buttons. Write a clear headline that describes the modal, and be sure to follow our modal content guidelines to clearly communicate information contained within it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Bear in mind that any components placed inside the modal should also follow that component’s accessibility requirements.
`}
            <br/>
      {`
`}
            <br/>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`To make modal accessible:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`If you don’t use a title in your modal`}
        </strong>
        {`, add an `}
        <code {...{"className":"ws-code"}}>
          {`aria-label`}
        </code>
        {` to give the modal an accessible name. It will look like \`aria-label=”`}
        {`[title of modal]`}
        {`” on the AboutModal and will appear directly on the class .pf-c-about-modal-box.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use `}
        <code {...{"className":"ws-code"}}>
          {`aria-describedby`}
        </code>
        {` for any description you add to the modal.`}
      </li>
    </ul>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`The following props can be added or are customizable in PatternFly:`}
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
              {`Modal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`aria-describedby`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-modal-box`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Id to use for Modal Box descriptor`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Modal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-modal-box`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Accessible descriptor of modal (use if no title)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Modal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`aria-labelledby`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-modal-box`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Id to use for Modal Box label (use if no title)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Modal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`title`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-modal-box`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Simple text content of the Modal Header, also used for aria-label on the body`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Modal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`titleLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-modal-box__title`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Optional title label text for screen readers`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsModalAccessibilityDocs';
Component.pageData = pageData;

export default Component;
