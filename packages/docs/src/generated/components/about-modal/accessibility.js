import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "About modal",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/about-modal/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/about-modal/about-modal.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`about modal`}
      </strong>
      {` displays information about an application like product version number(s), as well as any appropriate legal text. Like modal, this component is a secondary window that displays over the primary window to allow the user to maintain the context of a particular task. When the modal is displayed and active, the primary window is inert, so users cannot interact with content outside it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard and mouse users`}
      </strong>
      {` shouldn’t be able to interact with the rest of the page outside of an open modal. Set the initial focus on the first focusable element in the modal. The user should be able to `}
      <strong>
        {`Tab`}
      </strong>
      {` to any interactive elements within the modal and use `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backwards through interactive elements. Keyboard users should be able to leave the modal by pressing `}
      <strong>
        {`Esc`}
      </strong>
      {` and focus should return to the element that invoked the modal.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` shouldn’t be able to interact with the rest of the page outside an open modal. Add alternative text for any images or non-textual buttons (like icon buttons) . Images should use the alt attribute whereas `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` is most common to label icon buttons. Write a clear headline that describes the modal, organize contents in logical DOM order, and be sure to follow `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/modal/design-guidelines/"}}>
        {`our modal content guidelines`}
      </PatternflyThemeLink>
      {` to clearly communicate information contained within it.`}
    </p>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`To make About Modal accessible:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`If you use a brand image`}
        </strong>
        {`, use the React prop `}
        <code {...{"className":"ws-code"}}>
          {`brandImageAlt`}
        </code>
        {` on the AboutModal component to give the brand image alternative text for assistive technology and low bandwidth users. This will look like `}
        <code {...{"className":"ws-code"}}>
          {`alt=”[title of image]”`}
        </code>
        {` in the HTML markup on the image with class .pf-c-brand.`}
      </li>
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
              {`AboutModal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`brandImageAlt`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-about-modal-box__brand-image`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`The alternate text of the brand image`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`AboutModal`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`closeButtonAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-modal-box__close .pf-c-button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Provides an accessible name for the close button as it uses an icon instead of text. Default is “Close dialog”. Only used if you are customizing.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsAboutModalAccessibilityDocs';
Component.pageData = pageData;

export default Component;
