import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Brand",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/brand/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/brand/brand.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`brand`}
      </strong>
      {` is used to place a product logotype on a screen.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should not be able to focus on the brand, as it is not interactive.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the brand and have a screen reader read the brand’s descriptive text.`}
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
              {`alt`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`Brand`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-brand`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Descriptive alternative text for the image of the Brand`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsBrandAccessibilityDocs';
Component.pageData = pageData;

export default Component;
