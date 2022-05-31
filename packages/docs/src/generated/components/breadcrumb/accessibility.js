import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Breadcrumb",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/breadcrumb/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/breadcrumb/breadcrumb.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`breadcrumb`}
      </strong>
      {` provides page context to help users navigate more efficiently and understand where they are in the application hierarchy.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Most frequently, breadcrumb consists of many links which will use `}
      <strong>
        {`Tab`}
      </strong>
      {` to navigate through them, `}
      <strong>
        {`Shift + Tab`}
      </strong>
      {` to go backwards, and `}
      <strong>
        {`Enter`}
      </strong>
      {` to activate each link.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In general, the breadcrumb component already has accessibility built in. However, if you would like to customize it, edit the following:`}
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
              {`Prop or attribute`}
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
              {`Breadcrumb`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-breadcrumb`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Label added to the breadcrumb nav`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsBreadcrumbAccessibilityDocs';
Component.pageData = pageData;

export default Component;
