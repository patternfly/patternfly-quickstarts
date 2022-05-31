import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Background color",
  "section": "utilities",
  "source": "html",
  "slug": "/utilities/background-color/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/utilities/BackgroundColor/examples/BackgroundColor.md",
  "beta": true,
  "examples": [
    "White",
    "Gray",
    "Dark 100",
    "Dark 200",
    "Dark 300",
    "Dark 400"
  ]
};
pageData.examples = {
  'White': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-100\">Background Color 100</div>","title":"White","lang":"html"}}>
      
    </Example>,
  'Gray': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-200\">Background Color 200</div>","title":"Gray","lang":"html"}}>
      
    </Example>,
  'Dark 100': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-dark-100\">\n  <div class=\"pf-u-color-400\">Background Color Dark 100</div>\n</div>","title":"Dark 100","lang":"html"}}>
      
    </Example>,
  'Dark 200': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-dark-200\">\n  <div class=\"pf-u-color-400\">Background Color Dark 200</div>\n</div>","title":"Dark 200","lang":"html"}}>
      
    </Example>,
  'Dark 300': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-dark-300\">\n  <div class=\"pf-u-color-400\">Background Color Dark 300</div>\n</div>","title":"Dark 300","lang":"html"}}>
      
    </Example>,
  'Dark 400': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-u-background-color-dark-400\">\n  <div class=\"pf-u-color-400\">Background Color Dark 400</div>\n</div>","title":"Dark 400","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["White"])}
    {React.createElement(pageData.examples["Gray"])}
    {React.createElement(pageData.examples["Dark 100"])}
    {React.createElement(pageData.examples["Dark 200"])}
    {React.createElement(pageData.examples["Dark 300"])}
    {React.createElement(pageData.examples["Dark 400"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Background color utility`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-background-color-100`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies background-color 100.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-background-color-200`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies background-color 200.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-background-color-dark-100`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies background-color-dark 100.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-background-color-dark-200`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies background-color-dark 200.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-background-color-dark-300`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies background-color-dark 300.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-u-background-color-dark-400`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`*`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Applies background-color-dark 200.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UtilitiesBackgroundColorHtmlDocs';
Component.pageData = pageData;

export default Component;
