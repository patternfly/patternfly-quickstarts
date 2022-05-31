import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../node_modules/@patternfly/patternfly/docs/components/Nav/examples/./Navigation.css'
const pageData = {
  "id": "Navigation",
  "section": "components",
  "source": "html",
  "slug": "/components/navigation/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/components/Nav/examples/Navigation.md",
  "cssPrefix": [
    "pf-c-nav"
  ],
  "examples": [
    "Default",
    "Grouped nav",
    "Expanded",
    "Expanded with subnav titles",
    "Mixed",
    "Horizontal",
    "Horizontal overflow",
    "Tertiary",
    "Tertiary overflow",
    "Default in light mode",
    "Expanded in light mode"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Current link</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 4</a>\n    </li>\n  </ul>\n</nav>","title":"Default","lang":"html"}}>
      
    </Example>,
  'Grouped nav': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <section class=\"pf-c-nav__section\" aria-labelledby=\"grouped-title1\">\n    <h2 class=\"pf-c-nav__section-title\" id=\"grouped-title1\">Section title 1</h2>\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 2</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n  <section class=\"pf-c-nav__section\" aria-labelledby=\"grouped-title2\">\n    <h2 class=\"pf-c-nav__section-title\" id=\"grouped-title2\">Section title 2</h2>\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a\n          href=\"#\"\n          class=\"pf-c-nav__link pf-m-current\"\n          aria-current=\"page\"\n        >Current link</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n</nav>","title":"Grouped nav","lang":"html"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example1\"\n        aria-expanded=\"true\"\n      >\n        Link 1 (current and expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example1\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example2\"\n        aria-expanded=\"true\"\n      >\n        Link 2 (expanded, but not current example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example3\"\n        aria-expanded=\"false\"\n      >\n        Link 3\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"expandable-example3\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded","lang":"html"}}>
      
    </Example>,
  'Expanded with subnav titles': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button class=\"pf-c-nav__link\" aria-expanded=\"true\">\n        Link 1\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"subnav-title1\">\n        <h2\n          class=\"pf-c-nav__subnav-title pf-screen-reader\"\n          id=\"subnav-title1\"\n        >Current and expanded example sub-navigation</h2>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" aria-expanded=\"true\">\n        Link 2\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"subnav-title2\">\n        <h2\n          class=\"pf-c-nav__subnav-title pf-screen-reader\"\n          id=\"subnav-title2\"\n        >Expanded, but not current example sub-navigation</h2>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded with subnav titles","lang":"html"}}>
      
    </Example>,
  'Mixed': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 1 (not expandable)</a>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" id=\"nav-mixed-link2\" aria-expanded=\"true\">\n        Link 2 (expanded, but not current example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"nav-mixed-link2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-current\">\n      <button class=\"pf-c-nav__link\" id=\"nav-mixed-link4\" aria-expanded=\"false\">\n        Link 3 (current, but not expanded example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"nav-mixed-link4\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Mixed","lang":"html"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal\" aria-label=\"Global\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal","lang":"html"}}>
      
    </Example>,
  'Horizontal overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal pf-m-scrollable\" aria-label=\"Global\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Horizontal nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal overflow","lang":"html"}}>
      
    </Example>,
  'Tertiary': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-tertiary\" aria-label=\"Local\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Tertiary","lang":"html"}}>
      
    </Example>,
  'Tertiary overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-tertiary pf-m-scrollable\" aria-label=\"Local\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a\n        href=\"#\"\n        class=\"pf-c-nav__link pf-m-current\"\n        aria-current=\"page\"\n      >Tertiary nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Tertiary overflow","lang":"html"}}>
      
    </Example>,
  'Default in light mode': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-light\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Link 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 4</a>\n    </li>\n  </ul>\n</nav>","title":"Default in light mode","lang":"html"}}>
      
    </Example>,
  'Expanded in light mode': props => 
    <Example {...pageData} {...props} {...{"code":"<nav class=\"pf-c-nav pf-m-light\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example1\"\n        aria-expanded=\"true\"\n      >\n        Link 1 (current and expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example1\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a\n              href=\"#\"\n              class=\"pf-c-nav__link pf-m-current\"\n              aria-current=\"page\"\n            >Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example2\"\n        aria-expanded=\"true\"\n      >\n        Link 2 (expanded, but not current example)\n        <span\n          class=\"pf-c-nav__toggle\"\n        >\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button\n        class=\"pf-c-nav__link\"\n        id=\"expandable-example3\"\n        aria-expanded=\"false\"\n      >\n        Link 3\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section\n        class=\"pf-c-nav__subnav\"\n        aria-labelledby=\"expandable-example3\"\n        hidden\n      >\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded in light mode","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["Grouped nav"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Expanded with subnav titles"])}
    {React.createElement(pageData.examples["Mixed"])}
    {React.createElement(pageData.examples["Horizontal"])}
    {React.createElement(pageData.examples["Horizontal overflow"])}
    {React.createElement(pageData.examples["Tertiary"])}
    {React.createElement(pageData.examples["Tertiary overflow"])}
    {React.createElement(pageData.examples["Default in light mode"])}
    {React.createElement(pageData.examples["Expanded in light mode"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"overview","size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The navigation system relies on several different sub-components:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__list`}
        </code>
        {` - default navigation list. It is the basis for both default and expandable, vertical navigation.`}
      </li>
    </ul>
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
              <code {...{"className":"ws-code"}}>
                {`aria-label="[landmark description]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Describes `}
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
              {` landmark.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby="[id value of link describing subnav]"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Gives the subnav `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {` landmark an accessible name by referring to the element that provides the subnav `}
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
              {` landmark title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="false"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that subnav section is hidden.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-expanded="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that subnav section is visible.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`hidden`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`disabled`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__scroll-button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that a scroll button is disabled, when at the first or last item of a list. `}
              <strong>
                {`Required when disabled`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-current="page"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates the current page link. Can only occur once on page.`}
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
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a primary nav element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__subnav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a subnav section.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__list`}
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
              {`Initiates nav list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__item`}
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
              {`Initiates nav list item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates nav list link.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<section>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a nav section element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__section-title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<h1>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h2>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h3>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h4>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h5>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<h6>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a nav section title.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the nav toggle wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a nav toggle icon wrapper.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__scroll-button`}
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
              {`Initiates a nav scroll button. `}
              <strong>
                {`Required for horizontal navs`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-horizontal`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the horizontal variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-tertiary`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the tertiary variation.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-light`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the light variation. `}
              <strong>
                {`Note: only for use with vertical navs, and requires `}
                <code {...{"className":"ws-code"}}>
                  {`.pf-m-light`}
                </code>
                {` on the page component's sidebar element (`}
                <code {...{"className":"ws-code"}}>
                  {`.pf-c-page__sidebar`}
                </code>
                {`)`}
              </strong>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-scrollable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies nav for the scrollable state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expandable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-nav__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the expandable state.`}
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
                {`.pf-c-nav__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the expanded state.`}
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
                {`.pf-c-nav__link`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies for the current state.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsNavigationHtmlDocs';
Component.pageData = pageData;

export default Component;
