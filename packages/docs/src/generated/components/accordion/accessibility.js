import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Accordion",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/accordion/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/accordion/accordion.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`accordion`}
      </strong>
      {` is an interactive container that expands and collapses to hide or reveal the nested content. It takes advantage of progressive disclosure to help reduce page scrolling by allowing users to choose to show or hide more detailed information as needed.`}
    </p>
    <ins>
      <strong>
        {`To make accordion accessible:`}
      </strong>
</ins>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Make sure to include the `}
        <code {...{"className":"ws-code"}}>
          {`isExpanded`}
        </code>
        {` prop on the AccordionToggle based on the toggle’s state. This prop adds necessary accessibility attributes and styling such as `}
        <code {...{"className":"ws-code"}}>
          {`aria-expanded=”true/false”`}
        </code>
      </li>
    </ul>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`In general, the application launcher component already has accessibility built in. However, if you would like to customize it, you can edit the following:`}
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
              {`Accordion`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-accordion`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Adds accessible text to the Accordion - available for customization`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`AccordionContent`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-accordion__expanded-content`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Adds accessible text to the Accordion content - available for customization.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`AccordionToggle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`isExpanded`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-accordion__toggle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Flag to show if the expanded content of the Accordion item is visible.  This prop adds necessary accessibility attributes and styling such as `}
              <code {...{"className":"ws-code"}}>
                {`aria-expanded=”true/false”`}
              </code>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsAccordionAccessibilityDocs';
Component.pageData = pageData;

export default Component;
