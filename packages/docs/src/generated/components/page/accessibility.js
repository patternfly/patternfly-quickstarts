import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Page",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/page/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/page/page.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <strong>
        {`page`}
      </strong>
      {` component is used to define the basic layout of a page with either vertical or horizontal navigation. Page layouts are defined using page sections, such as the header, body, and footer of a page. The basic layout of a page depends on whether your page uses vertical or horizontal navigation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A page can be combined with many other components, so to create an accessible page, refer to the accessibility recommendations for each component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to navigate through the masthead of the page and into other interactive elements of the page using `}
      <strong>
        {`Tab`}
      </strong>
      {` and `}
      <strong>
        {`Shift + Tab`}
      </strong>
      {` to move forward and backward through interactive elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate through and interact with the masthead of the page using the same interactions as keyboard users. Elements of a page that do not have visible descriptive text, such as toggle icons, should have alternative text for screen readers.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Consider using a `}
      <strong>
        {`skip to content`}
      </strong>
      {` component on your page so that assistive technology users don’t need to make their way through the entire navigation menu each time they go to another page.`}
    </p>
    <AutoLinkHeader {...{"id":"to-make-a-page-accessible","size":"h2","className":"ws-title ws-h2"}}>
      {`To make a page accessible:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use semantic elements when possible, as these will have default roles. If this is not possible, manually add roles to identify different regions of the page as needed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If there are multiple instances of one type of semantic element (for instance, two `}
        <code {...{"className":"ws-code"}}>
          {`<nav>`}
        </code>
        {` items), label the elements.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For every element that does not contain text, add an `}
        <code {...{"className":"ws-code"}}>
          {`aria-label`}
        </code>
        {` attribute that contains alternative text.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If using notifications in the masthead, refer to notification badge accessibility guidelines.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The following props/attributes have been added for you or are props/attributes that can be customized:`}
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
              {`PageHeader`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button.pf-m-plain`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Labels the navigation toggle button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-controls`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`PageHeader`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button.pf-m-plain`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Identifies the element controlled by the toggle`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mainAriaLabel`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Page`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-page__main`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Labels the main section`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mainContainerId`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Page`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-page__main`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`An id to use for the `}
              {`[role="main"]`}
              {` element`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`mainTabIndex`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Page`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-page__main`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`A tabIndex to use for the `}
              {`[role="main"]`}
              {` element. Defaults to -1; make this value null to unset it`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`skipToContent`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Page`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button.pf-m-primary.pf-c-skip-to-content`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Skip to content component for the page`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`Page`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-page__main`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Value for the role on the `}
              <code {...{"className":"ws-code"}}>
                {`<main>`}
              </code>
              {` element`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsPageAccessibilityDocs';
Component.pageData = pageData;

export default Component;
