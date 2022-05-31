import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Context selector",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/context-selector/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/context-selector/context-selector.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`context selector`}
      </strong>
      {` can be used in addition to global navigation when the data or resources you show in the interface need to change depending on the user’s context.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Keyboard interaction of the context selector uses `}
      <strong>
        {`Tab`}
      </strong>
      {` to navigate to the context selector toggle, `}
      <strong>
        {`Enter`}
      </strong>
      {` or `}
      <strong>
        {`Space`}
      </strong>
      {` to activate the context selector, and `}
      <strong>
        {`Tab`}
      </strong>
      {` to navigate through the options. The `}
      <strong>
        {`Esc`}
      </strong>
      {` key should automatically close the menu.`}
    </p>
    <ins>
      <strong>
        {`To make context selector accessible:`}
      </strong>
</ins>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Add `}
        <code {...{"className":"ws-code"}}>
          {`screenReaderLabel={input label}`}
        </code>
        {`.`}
      </li>
    </ul>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`In general, the context selector component already has accessibility built in. HHowever, if you’d like to customize it, edit the following:`}
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
              {`ContextSelector`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`screenReaderLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`#pf-context-selector-label-id-0 hidden span on context selector`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Labels the Context Selector for screen readers.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ContextSelector`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`searchButtonAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button search button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Aria-label for the Context Selector Search button`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsContextSelectorAccessibilityDocs';
Component.pageData = pageData;

export default Component;
