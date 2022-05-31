import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../node_modules/@patternfly/patternfly/docs/components/Popover/examples/./Popover.css'
const pageData = {
  "id": "Popover",
  "section": "components",
  "source": "html",
  "slug": "/components/popover/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/components/Popover/examples/Popover.md",
  "cssPrefix": [
    "pf-c-popover"
  ],
  "examples": [
    "Top",
    "Right",
    "Bottom",
    "Left",
    "Without header/footer",
    "No padding",
    "Width auto"
  ]
};
pageData.examples = {
  'Top': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-top\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-top-header\"\n  aria-describedby=\"popover-top-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-top-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-top-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Top","lang":"html"}}>
      
    </Example>,
  'Right': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-right-header\"\n  aria-describedby=\"popover-right-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-right-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-right-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Right","lang":"html"}}>
      
    </Example>,
  'Bottom': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-bottom\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-bottom-header\"\n  aria-describedby=\"popover-bottom-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-bottom-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-bottom-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Bottom","lang":"html"}}>
      
    </Example>,
  'Left': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-left\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-left-header\"\n  aria-describedby=\"popover-left-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-left-header\">Popover header</h1>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-left-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Left","lang":"html"}}>
      
    </Example>,
  'Without header/footer': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-label=\"Popover with no header example\"\n  aria-describedby=\"popover-no-header-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-no-header-body\"\n    >Popovers are triggered by click rather than hover. Click again to close.</div>\n  </div>\n</div>","title":"Without header/footer","lang":"html"}}>
      
    </Example>,
  'No padding': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right pf-m-no-padding\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-label=\"Popover with no padding example\"\n  aria-describedby=\"popover-no-padding-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <div\n      class=\"pf-c-popover__body\"\n      id=\"popover-no-padding-body\"\n    >This popover has no padding and is intended for use with content that has its own spacing and should touch the edges of the popover container.</div>\n  </div>\n</div>","title":"No padding","lang":"html"}}>
      
    </Example>,
  'Width auto': props => 
    <Example {...pageData} {...props} {...{"code":"<div\n  class=\"pf-c-popover pf-m-right pf-m-width-auto\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-labelledby=\"popover-width-auto-header\"\n  aria-describedby=\"popover-width-auto-body\"\n>\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-width-auto-header\">Popover header</h1>\n    <div class=\"pf-c-popover__body\" id=\"popover-width-auto-body\">Popovers body</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Width auto","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Top"])}
    {React.createElement(pageData.examples["Right"])}
    {React.createElement(pageData.examples["Bottom"])}
    {React.createElement(pageData.examples["Left"])}
    {React.createElement(pageData.examples["Without header/footer"])}
    {React.createElement(pageData.examples["No padding"])}
    {React.createElement(pageData.examples["Width auto"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-left`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-top`}
      </code>
      {`, etc.) is required on the popover component`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applies to`}
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="dialog"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies the element that serves as the popover container. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id value of .pf-c-title]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the popover an accessible name by referring to the element that provides the dialog title. `}
              <strong>
                {`Required when .pf-c-title is present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="[title of popover]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the popover an accessible name. `}
              <strong>
                {`Required when .pf-c-title is `}
                <em>
                  {`not`}
                </em>
                {` present`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-describedby="[id value of applicable content]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-modal="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Tells assistive technologies that the windows underneath the current popover are not available for interaction. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Close"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible name for the close button as it uses an icon instead of text. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applies to"}}>
            <div>
              {`Parent element containing the page contents when the popover is open.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides main contents of the page from screen readers. The element with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
              {` must not be a descendent of the element with `}
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
              {`. For more info see `}
              <PatternflyThemeLink {...{"to":"https://pf4.patternfly.org/accessibility-guide#trapping-focus"}}>
                {`trapping focus`}
              </PatternflyThemeLink>
              {`. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__arrow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates an arrow pointing towards the element the popover describes. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Creates the content area of the popover. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the close icon in the top-right corner of the popover. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h3>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h4>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h5>`}
              </code>
              {`,`}
              <code {...{"className":"ws-code"}}>
                {`<h6>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a title. Always use it with a modifier class. See `}
              <PatternflyThemeLink {...{"to":"/documentation/core/components/title"}}>
                {`title component`}
              </PatternflyThemeLink>
              {` for more info.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__body`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`The popover's body text. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover__footer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<footer>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a popover footer.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-left`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the left of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-right`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the right of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-top`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the top of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-bottom`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Positions the popover to the bottom of the element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-padding`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Removes the outer padding from the popover content.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-width-auto`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-popover`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Allows popover width to be defined by the popover content.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsPopoverHtmlDocs';
Component.pageData = pageData;

export default Component;
