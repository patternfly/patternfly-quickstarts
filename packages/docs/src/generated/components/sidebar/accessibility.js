import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Sidebar",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/sidebar/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/sidebar/sidebar.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`sidebar`}
      </strong>
      {` is a component which orients a panel relative to content. It was originally built to house jump links so that page
content could be oriented relative to the jump links.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to focus on interactive children of sidebar using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and
`}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backward through interactive elements. Additionally, a `}
      <code {...{"className":"ws-code"}}>
        {`tabindex`}
      </code>
      {`
should be added to the sidebar when there is scrollable content in order for the overflow content to be scrolled and
accessible via keyboard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the sidebar and all the contents of the sidebar should be read by
the screen reader.`}
    </p>
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
              {`React component it should be applied to`}
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
              {`tabindex`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`Sidebar`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-sidebar`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Tab index should be set to 0 if the content of the sidebar is scrollable`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsSidebarAccessibilityDocs';
Component.pageData = pageData;

export default Component;
