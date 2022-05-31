import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Avatar",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/avatar/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/avatar/avatar.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`avatar`}
      </strong>
      {` is a visual used to represent a user. It may contain an image or a placeholder graphic. Typical usage is to represent the current user in the masthead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` shouldn’t be able to interact with the avatar on its own. Thus, the user should not be able to focus on the avatar using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backwards through interactive elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the avatar and it should have alternative text, since it’s an image element. You can use the `}
      <code {...{"className":"ws-code"}}>
        {`alt`}
      </code>
      {` prop to provide alternative text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re combining an avatar with another component, make sure to check accessibility guidelines for that component as well.`}
    </p>
    <AutoLinkHeader {...{"id":"to-make-avatar-accessible","size":"h2","className":"ws-title ws-h2"}}>
      {`To make avatar accessible:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You may use the `}
        <code {...{"className":"ws-code"}}>
          {`alt`}
        </code>
        {` React prop to provide alternative text for the avatar image.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you are using an SVG element for the avatar, `}
        <PatternflyThemeLink {...{"to":"https://www.deque.com/blog/creating-accessible-svgs/"}}>
          {`learn how to create accessible SVGs`}
        </PatternflyThemeLink>
        {` and reference the different SVG patterns. Screen reader accessibility for SVGs varies based on the pattern being used.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The following props/attributes have been added for you or are customizable in PatternFly:`}
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
                {`alt`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Avatar`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-avatar`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Provides an accessible description of the avatar as it uses an image instead of text.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsAvatarAccessibilityDocs';
Component.pageData = pageData;

export default Component;
