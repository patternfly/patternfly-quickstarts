import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Jump links",
  "section": "components",
  "source": "html",
  "slug": "/components/jump-links/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/components/JumpLinks/examples/JumpLinks.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-jump-links"
  ],
  "examples": [
    "Horizontal default",
    "Horizontal with centered list",
    "Horizontal with label",
    "Vertical default",
    "Vertical with label",
    "Vertical with inactive subsections",
    "Vertical with active subsections",
    "Expandable",
    "Expanded",
    "Expandable (responsive)",
    "Expandable (responsive) with toggle label"
  ]
};
pageData.examples = {
  'Horizontal default': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links\" aria-label=\"Local\">\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Horizontal default","lang":"html"}}>
      
    </Example>,
  'Horizontal with centered list': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links pf-m-center\" aria-label=\"Local\">\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Horizontal with centered list","lang":"html"}}>
      
    </Example>,
  'Horizontal with label': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links\" aria-label=\"Local\">\n  <div class=\"pf-c-jump-links__main\">\n    <div class=\"pf-c-jump-links__header\">\n      <div class=\"pf-c-jump-links__label\">Jump to section</div>\n    </div>\n    <ul class=\"pf-c-jump-links__list\">\n      <li class=\"pf-c-jump-links__item\">\n        <a class=\"pf-c-jump-links__link\" href=\"#\">\n          <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n        </a>\n      </li>\n      <li class=\"pf-c-jump-links__item pf-m-current\">\n        <a class=\"pf-c-jump-links__link\" href=\"#\">\n          <span class=\"pf-c-jump-links__link-text\">Active section</span>\n        </a>\n      </li>\n      <li class=\"pf-c-jump-links__item\">\n        <a class=\"pf-c-jump-links__link\" href=\"#\">\n          <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<br />\n<nav class=\"pf-c-jump-links pf-m-center\" aria-label=\"Local\">\n  <div class=\"pf-c-jump-links__main\">\n    <div class=\"pf-c-jump-links__header\">\n      <div class=\"pf-c-jump-links__label\">Jump to section</div>\n    </div>\n    <ul class=\"pf-c-jump-links__list\">\n      <li class=\"pf-c-jump-links__item\">\n        <a class=\"pf-c-jump-links__link\" href=\"#\">\n          <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n        </a>\n      </li>\n      <li class=\"pf-c-jump-links__item pf-m-current\">\n        <a class=\"pf-c-jump-links__link\" href=\"#\">\n          <span class=\"pf-c-jump-links__link-text\">Active section</span>\n        </a>\n      </li>\n      <li class=\"pf-c-jump-links__item\">\n        <a class=\"pf-c-jump-links__link\" href=\"#\">\n          <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>","title":"Horizontal with label","lang":"html"}}>
      
    </Example>,
  'Vertical default': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links pf-m-vertical\" aria-label=\"Local\">\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Vertical default","lang":"html"}}>
      
    </Example>,
  'Vertical with label': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links pf-m-vertical\" aria-label=\"Local\">\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__label\">Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Vertical with label","lang":"html"}}>
      
    </Example>,
  'Vertical with inactive subsections': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links pf-m-vertical\" aria-label=\"Local\">\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__label\">Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n      <ul class=\"pf-c-jump-links__list\">\n        <li class=\"pf-c-jump-links__item\">\n          <a class=\"pf-c-jump-links__link\" href=\"#\">\n            <span class=\"pf-c-jump-links__link-text\">Inactive subsection</span>\n          </a>\n        </li>\n        <li class=\"pf-c-jump-links__item\">\n          <a class=\"pf-c-jump-links__link\" href=\"#\">\n            <span class=\"pf-c-jump-links__link-text\">Inactive subsection</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Vertical with inactive subsections","lang":"html"}}>
      
    </Example>,
  'Vertical with active subsections': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links pf-m-vertical\" aria-label=\"Local\">\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__label\">Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n      <ul class=\"pf-c-jump-links__list\">\n        <li class=\"pf-c-jump-links__item pf-m-current\">\n          <a class=\"pf-c-jump-links__link\" href=\"#\">\n            <span class=\"pf-c-jump-links__link-text\">Active subsection</span>\n          </a>\n        </li>\n        <li class=\"pf-c-jump-links__item\">\n          <a class=\"pf-c-jump-links__link\" href=\"#\">\n            <span class=\"pf-c-jump-links__link-text\">Inactive subsection</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Vertical with active subsections","lang":"html"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-jump-links pf-m-vertical pf-m-expandable\" aria-label=\"Local\">\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__toggle\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Details\"\n        aria-expanded=\"false\"\n        id=\"jump-links-expandable-toggle\"\n        aria-labelledby=\"jump-links-expandable-label jump-links-expandable-toggle\"\n      >\n        <span class=\"pf-c-jump-links__toggle-icon\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <div\n      class=\"pf-c-jump-links__label\"\n      id=\"jump-links-expandable-label\"\n    >Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Expandable","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<nav\n  class=\"pf-c-jump-links pf-m-vertical pf-m-expandable pf-m-expanded\"\n  aria-label=\"Local\"\n>\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__toggle\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Details\"\n        aria-expanded=\"true\"\n        id=\"jump-links-expanded-toggle\"\n        aria-labelledby=\"jump-links-expanded-label jump-links-expanded-toggle\"\n      >\n        <span class=\"pf-c-jump-links__toggle-icon\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <div\n      class=\"pf-c-jump-links__label\"\n      id=\"jump-links-expanded-label\"\n    >Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Expandable (responsive)': props => 
    <Example {...pageData} {...props} {...{"code":"<nav\n  class=\"pf-c-jump-links pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl pf-m-expandable\"\n  aria-label=\"Local\"\n>\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__toggle\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Details\"\n        aria-expanded=\"false\"\n        id=\"jump-links-expandable-responsive-toggle\"\n        aria-labelledby=\"jump-links-expandable-responsive-label jump-links-expandable-responsive-toggle\"\n      >\n        <span class=\"pf-c-jump-links__toggle-icon\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <div\n      class=\"pf-c-jump-links__label\"\n      id=\"jump-links-expandable-responsive-label\"\n    >Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Expandable (responsive)","lang":"html"}}>
      
    </Example>,
  'Expandable (responsive) with toggle label': props => 
    <Example {...pageData} {...props} {...{"code":"<nav\n  class=\"pf-c-jump-links pf-m-vertical pf-m-non-expandable-on-md pf-m-expandable-on-lg pf-m-non-expandable-on-xl pf-m-expandable\"\n  aria-label=\"Local\"\n>\n  <div class=\"pf-c-jump-links__header\">\n    <div class=\"pf-c-jump-links__toggle\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Details\"\n        aria-expanded=\"false\"\n        id=\"jump-links-expandable-responsive-with-toggle-label-toggle\"\n        aria-labelledby=\"jump-links-expandable-responsive-with-toggle-label-label jump-links-expandable-responsive-with-toggle-label-toggle\"\n      >\n        <span class=\"pf-c-jump-links__toggle-icon\">\n          <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <div\n      class=\"pf-c-jump-links__label pf-m-toggle\"\n      id=\"jump-links-expandable-responsive-with-toggle-label-label\"\n    >Jump to section</div>\n  </div>\n  <ul class=\"pf-c-jump-links__list\">\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item pf-m-current\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Active section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n    <li class=\"pf-c-jump-links__item\">\n      <a class=\"pf-c-jump-links__link\" href=\"#\">\n        <span class=\"pf-c-jump-links__link-text\">Inactive section</span>\n      </a>\n    </li>\n  </ul>\n</nav>","title":"Expandable (responsive) with toggle label","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Horizontal default"])}
    {React.createElement(pageData.examples["Horizontal with centered list"])}
    {React.createElement(pageData.examples["Horizontal with label"])}
    {React.createElement(pageData.examples["Vertical default"])}
    {React.createElement(pageData.examples["Vertical with label"])}
    {React.createElement(pageData.examples["Vertical with inactive subsections"])}
    {React.createElement(pageData.examples["Vertical with active subsections"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Expandable (responsive)"])}
    {React.createElement(pageData.examples["Expandable (responsive) with toggle label"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
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
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
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
                {`.pf-c-jump-links`}
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
              {`Initiates the jump links container.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__main`}
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
              {`Initiates the jump links main container for when a label and list is used in the horizontal variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the jump links list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the jump links list item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__link`}
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
              {`Initiates the jump links link.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__header`}
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
              {`Initiates the jump links header.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__toggle`}
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
              {`Initiates the jump links expandable toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__toggle-icon`}
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
              {`Initiates the jump links expandable toggle icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__label`}
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
              {`Initiates the jump links label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__link-text`}
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
              {`Initiates the jump links link text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-vertical`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the jump links component to be vertical.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-center`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the jump links component to center its list and label.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expandable{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the jump links component to be expandable via a toggle. `}
              <strong>
                {`Note:`}
              </strong>
              {` works with vertical jump links only.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-non-expandable{-on-[breakpoint]}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the jump links component to be non-expandable.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expanded`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the expandable jump links component for the expanded state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the jump links item to be current.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-jump-links__label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the jump links label to serve as toggle text for when the jump links are expandable.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsJumpLinksHtmlDocs';
Component.pageData = pageData;

export default Component;
