import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Dual list selector",
  "section": "components",
  "source": "html",
  "slug": "/components/dual-list-selector/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/components/DualListSelector/examples/DualListSelector.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-dual-list-selector"
  ],
  "examples": [
    "Basic",
    "Available item selected",
    "Multiple available items selected",
    "Chosen item",
    "Chosen item selected",
    "Tree view",
    "Tree view chosen options"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"basic-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-basic-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-basic-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 5 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item1</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item2</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item3</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item4</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item5</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"basic-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-basic-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-basic-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 0 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\"></ul>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
      
    </Example>,
  'Available item selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"available-item-selected-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-available-item-selected-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-available-item-selected-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">1 of 5 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item1</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button\n            class=\"pf-c-dual-list-selector__item pf-m-selected\"\n            type=\"button\"\n          >\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item2</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item3</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item4</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item5</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"available-item-selected-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-available-item-selected-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-available-item-selected-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 0 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\"></ul>\n    </div>\n  </div>\n</div>","title":"Available item selected","lang":"html"}}>
      
    </Example>,
  'Multiple available items selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"multiple-available-items-selected-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-multiple-available-items-selected-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-multiple-available-items-selected-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">1 of 5 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item1</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button\n            class=\"pf-c-dual-list-selector__item pf-m-selected\"\n            type=\"button\"\n          >\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item2</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button\n            class=\"pf-c-dual-list-selector__item pf-m-selected\"\n            type=\"button\"\n          >\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item3</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item4</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button\n            class=\"pf-c-dual-list-selector__item pf-m-selected\"\n            type=\"button\"\n          >\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item5</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"multiple-available-items-selected-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-multiple-available-items-selected-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-multiple-available-items-selected-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 0 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\"></ul>\n    </div>\n  </div>\n</div>","title":"Multiple available items selected","lang":"html"}}>
      
    </Example>,
  'Chosen item': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"chosen-item-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-chosen-item-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-chosen-item-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 4 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item1</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item2</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item3</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item4</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item5</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"chosen-item-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-chosen-item-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-chosen-item-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 1 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item1</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Chosen item","lang":"html"}}>
      
    </Example>,
  'Chosen item selected': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"chosen-item-selected-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-chosen-item-selected-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-chosen-item-selected-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 4 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item1</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item2</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item3</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item4</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button class=\"pf-c-dual-list-selector__item\" type=\"button\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item5</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"chosen-item-selected-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-chosen-item-selected-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-chosen-item-selected-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">1 of 1 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <button\n            class=\"pf-c-dual-list-selector__item pf-m-selected\"\n            type=\"button\"\n          >\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-text\">Item5</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Chosen item selected","lang":"html"}}>
      
    </Example>,
  'Tree view': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"basic-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-basic-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-basic-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">1 of 11 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable pf-m-expanded\"\n          aria-expanded=\"true\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-0\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Colors</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\">6</span>\n            </span>\n          </div>\n\n          <ul class=\"pf-c-dual-list-selector__list\">\n            <li class=\"pf-c-dual-list-selector__list-item\">\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-1\"\n                        aria-label=\"Dual list selector item check\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Red</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n            </li>\n            <li class=\"pf-c-dual-list-selector__list-item\">\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check pf-m-selected\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-2\"\n                        checked\n                        aria-label=\"Dual list selector item check checked\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Orange</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n            </li>\n            <li class=\"pf-c-dual-list-selector__list-item\">\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-3\"\n                        aria-label=\"Dual list selector item check\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Yellow</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-dual-list-selector__list-item pf-m-expandable pf-m-expanded\"\n              aria-expanded=\"true\"\n            >\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <div class=\"pf-c-dual-list-selector__item-toggle\">\n                    <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                    </span>\n                  </div>\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-4\"\n                        aria-label=\"Dual list selector item check\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Green</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n\n              <ul class=\"pf-c-dual-list-selector__list\">\n                <li class=\"pf-c-dual-list-selector__list-item\">\n                  <div\n                    class=\"pf-c-dual-list-selector__item pf-m-check\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-dual-list-selector__item-main\">\n                      <span class=\"pf-c-dual-list-selector__item-check\">\n                        <div class=\"pf-c-check pf-m-standalone\">\n                          <input\n                            class=\"pf-c-check__input\"\n                            type=\"checkbox\"\n                            id=\"check-5\"\n                            aria-label=\"Dual list selector item check\"\n                          />\n                        </div>\n                      </span>\n                      <span\n                        class=\"pf-c-dual-list-selector__item-text\"\n                      >Light green</span>\n                    </span>\n                    <span class=\"pf-c-dual-list-selector__item-count\">\n                      <span class=\"pf-c-badge pf-m-read\"></span>\n                    </span>\n                  </div>\n                </li>\n                <li class=\"pf-c-dual-list-selector__list-item\">\n                  <div\n                    class=\"pf-c-dual-list-selector__item pf-m-check\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-dual-list-selector__item-main\">\n                      <span class=\"pf-c-dual-list-selector__item-check\">\n                        <div class=\"pf-c-check pf-m-standalone\">\n                          <input\n                            class=\"pf-c-check__input\"\n                            type=\"checkbox\"\n                            id=\"check-6\"\n                            aria-label=\"Dual list selector item check\"\n                          />\n                        </div>\n                      </span>\n                      <span\n                        class=\"pf-c-dual-list-selector__item-text\"\n                      >Medium green</span>\n                    </span>\n                    <span class=\"pf-c-dual-list-selector__item-count\">\n                      <span class=\"pf-c-badge pf-m-read\"></span>\n                    </span>\n                  </div>\n                </li>\n                <li class=\"pf-c-dual-list-selector__list-item\">\n                  <div\n                    class=\"pf-c-dual-list-selector__item pf-m-check\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-dual-list-selector__item-main\">\n                      <span class=\"pf-c-dual-list-selector__item-check\">\n                        <div class=\"pf-c-check pf-m-standalone\">\n                          <input\n                            class=\"pf-c-check__input\"\n                            type=\"checkbox\"\n                            id=\"check-7\"\n                            aria-label=\"Dual list selector item check\"\n                          />\n                        </div>\n                      </span>\n                      <span\n                        class=\"pf-c-dual-list-selector__item-text\"\n                      >Dark green</span>\n                    </span>\n                    <span class=\"pf-c-dual-list-selector__item-count\">\n                      <span class=\"pf-c-badge pf-m-read\"></span>\n                    </span>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable\"\n          aria-expanded=\"false\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-8\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Type something</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n        </li>\n\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-9\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Type something</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n        </li>\n\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable\"\n          aria-expanded=\"false\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-10\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Type something</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"basic-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-basic-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-basic-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 0 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\"></ul>\n    </div>\n  </div>\n</div>","title":"Tree view","lang":"html"}}>
      
    </Example>,
  'Tree view chosen options': props => 
    <Example {...pageData} {...props} {...{"code":"<div class=\"pf-c-dual-list-selector\">\n  <div class=\"pf-c-dual-list-selector__pane pf-m-available\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Available options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"basic-available-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-basic-available-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-basic-available-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 10 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable pf-m-expanded\"\n          aria-expanded=\"true\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-11\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Colors</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n\n          <ul class=\"pf-c-dual-list-selector__list\">\n            <li class=\"pf-c-dual-list-selector__list-item\">\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check pf-m-selected\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-12\"\n                        checked\n                        aria-label=\"Dual list selector item check checked\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Orange</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n            </li>\n            <li class=\"pf-c-dual-list-selector__list-item\">\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-13\"\n                        aria-label=\"Dual list selector item check\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Yellow</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n            </li>\n            <li\n              class=\"pf-c-dual-list-selector__list-item pf-m-expandable pf-m-expanded\"\n              aria-expanded=\"true\"\n            >\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <div class=\"pf-c-dual-list-selector__item-toggle\">\n                    <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                    </span>\n                  </div>\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-14\"\n                        aria-label=\"Dual list selector item check\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Green</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n\n              <ul class=\"pf-c-dual-list-selector__list\">\n                <li class=\"pf-c-dual-list-selector__list-item\">\n                  <div\n                    class=\"pf-c-dual-list-selector__item pf-m-check\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-dual-list-selector__item-main\">\n                      <span class=\"pf-c-dual-list-selector__item-check\">\n                        <div class=\"pf-c-check pf-m-standalone\">\n                          <input\n                            class=\"pf-c-check__input\"\n                            type=\"checkbox\"\n                            id=\"check-15\"\n                            aria-label=\"Dual list selector item check\"\n                          />\n                        </div>\n                      </span>\n                      <span\n                        class=\"pf-c-dual-list-selector__item-text\"\n                      >Light green</span>\n                    </span>\n                    <span class=\"pf-c-dual-list-selector__item-count\">\n                      <span class=\"pf-c-badge pf-m-read\"></span>\n                    </span>\n                  </div>\n                </li>\n                <li class=\"pf-c-dual-list-selector__list-item\">\n                  <div\n                    class=\"pf-c-dual-list-selector__item pf-m-check\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-dual-list-selector__item-main\">\n                      <span class=\"pf-c-dual-list-selector__item-check\">\n                        <div class=\"pf-c-check pf-m-standalone\">\n                          <input\n                            class=\"pf-c-check__input\"\n                            type=\"checkbox\"\n                            id=\"check-16\"\n                            aria-label=\"Dual list selector item check\"\n                          />\n                        </div>\n                      </span>\n                      <span\n                        class=\"pf-c-dual-list-selector__item-text\"\n                      >Medium green</span>\n                    </span>\n                    <span class=\"pf-c-dual-list-selector__item-count\">\n                      <span class=\"pf-c-badge pf-m-read\"></span>\n                    </span>\n                  </div>\n                </li>\n                <li class=\"pf-c-dual-list-selector__list-item\">\n                  <div\n                    class=\"pf-c-dual-list-selector__item pf-m-check\"\n                    tabindex=\"0\"\n                  >\n                    <span class=\"pf-c-dual-list-selector__item-main\">\n                      <span class=\"pf-c-dual-list-selector__item-check\">\n                        <div class=\"pf-c-check pf-m-standalone\">\n                          <input\n                            class=\"pf-c-check__input\"\n                            type=\"checkbox\"\n                            id=\"check-17\"\n                            aria-label=\"Dual list selector item check\"\n                          />\n                        </div>\n                      </span>\n                      <span\n                        class=\"pf-c-dual-list-selector__item-text\"\n                      >Dark green</span>\n                    </span>\n                    <span class=\"pf-c-dual-list-selector__item-count\">\n                      <span class=\"pf-c-badge pf-m-read\"></span>\n                    </span>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable\"\n          aria-expanded=\"false\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-18\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Type something</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n        </li>\n        <li class=\"pf-c-dual-list-selector__list-item\">\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-19\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Type something</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n        </li>\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable\"\n          aria-expanded=\"false\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-20\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Type something</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__controls\">\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Add selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Add all\">\n        <i class=\"fas fa-fw fa-angle-double-right\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove all\"\n      >\n        <i class=\"fas fa-fw fa-angle-double-left\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-dual-list-selector__controls-item\">\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        disabled\n        aria-label=\"Remove selected\"\n      >\n        <i class=\"fas fa-fw fa-angle-left\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-dual-list-selector__pane pf-m-chosen\">\n    <div class=\"pf-c-dual-list-selector__header\">\n      <div class=\"pf-c-dual-list-selector__title\">\n        <div class=\"pf-c-dual-list-selector__title-text\">Chosen options</div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__tools\">\n      <div class=\"pf-c-dual-list-selector__tools-filter\">\n        <input\n          class=\"pf-c-form-control pf-m-search\"\n          type=\"text\"\n          placeholder=\"Filter options\"\n          id=\"basic-chosen-filter\"\n          aria-label=\"Filter options\"\n        />\n      </div>\n      <div class=\"pf-c-dual-list-selector__tools-actions\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sort\">\n          <i class=\"fas fa-sort-amount-down\" aria-hidden=\"true\"></i>\n        </button>\n        <div class=\"pf-c-dropdown\">\n          <button\n            class=\"pf-c-dropdown__toggle pf-m-plain\"\n            id=\"dropdown-kebab-basic-chosen-button\"\n            aria-expanded=\"false\"\n            type=\"button\"\n            aria-label=\"Actions\"\n          >\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul\n            class=\"pf-c-dropdown__menu\"\n            aria-labelledby=\"dropdown-kebab-basic-chosen-button\"\n            hidden\n          >\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a\n                class=\"pf-c-dropdown__menu-item pf-m-disabled\"\n                href=\"#\"\n                aria-disabled=\"true\"\n                tabindex=\"-1\"\n              >Disabled link</a>\n            </li>\n            <li>\n              <button\n                class=\"pf-c-dropdown__menu-item\"\n                type=\"button\"\n                disabled\n              >Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-dual-list-selector__status\">\n      <span class=\"pf-c-dual-list-selector__status-text\">0 of 0 items selected</span>\n    </div>\n    <div class=\"pf-c-dual-list-selector__menu\">\n      <ul class=\"pf-c-dual-list-selector__list\">\n        <li\n          class=\"pf-c-dual-list-selector__list-item pf-m-expandable pf-m-expanded\"\n          aria-expanded=\"true\"\n        >\n          <div class=\"pf-c-dual-list-selector__item pf-m-check\" tabindex=\"0\">\n            <span class=\"pf-c-dual-list-selector__item-main\">\n              <div class=\"pf-c-dual-list-selector__item-toggle\">\n                <span class=\"pf-c-dual-list-selector__item-toggle-icon\">\n                  <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n              <span class=\"pf-c-dual-list-selector__item-check\">\n                <div class=\"pf-c-check pf-m-standalone\">\n                  <input\n                    class=\"pf-c-check__input\"\n                    type=\"checkbox\"\n                    id=\"check-21\"\n                    aria-label=\"Dual list selector item check\"\n                  />\n                </div>\n              </span>\n              <span class=\"pf-c-dual-list-selector__item-text\">Colors</span>\n            </span>\n            <span class=\"pf-c-dual-list-selector__item-count\">\n              <span class=\"pf-c-badge pf-m-read\"></span>\n            </span>\n          </div>\n\n          <ul class=\"pf-c-dual-list-selector__list\">\n            <li class=\"pf-c-dual-list-selector__list-item\">\n              <div\n                class=\"pf-c-dual-list-selector__item pf-m-check pf-m-selected\"\n                tabindex=\"0\"\n              >\n                <span class=\"pf-c-dual-list-selector__item-main\">\n                  <span class=\"pf-c-dual-list-selector__item-check\">\n                    <div class=\"pf-c-check pf-m-standalone\">\n                      <input\n                        class=\"pf-c-check__input\"\n                        type=\"checkbox\"\n                        id=\"check-22\"\n                        checked\n                        aria-label=\"Dual list selector item check checked\"\n                      />\n                    </div>\n                  </span>\n                  <span class=\"pf-c-dual-list-selector__item-text\">Orange</span>\n                </span>\n                <span class=\"pf-c-dual-list-selector__item-count\">\n                  <span class=\"pf-c-badge pf-m-read\"></span>\n                </span>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Tree view chosen options","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Available item selected"])}
    {React.createElement(pageData.examples["Multiple available items selected"])}
    {React.createElement(pageData.examples["Chosen item"])}
    {React.createElement(pageData.examples["Chosen item selected"])}
    {React.createElement(pageData.examples["Tree view"])}
    {React.createElement(pageData.examples["Tree view chosen options"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
              {`Applied`}
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
                {`.pf-c-dual-list-selector`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector component. `}
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
                {`.pf-c-dual-list-selector__pane`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane. `}
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
                {`.pf-c-dual-list-selector__header`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane header. `}
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
                {`.pf-c-dual-list-selector__title`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane title. `}
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
                {`.pf-c-dual-list-selector__title-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane title text. `}
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
                {`.pf-c-dual-list-selector__tools`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector tools. `}
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
                {`.pf-c-dual-list-selector__filter`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane filter. `}
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
                {`.pf-c-dual-list-selector__actions`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane actions.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__actions-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane actions item.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__status`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane selected status. `}
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
                {`.pf-c-dual-list-selector__status-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane selected status text. `}
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
                {`.pf-c-dual-list-selector__menu`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane menu container. `}
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
                {`.pf-c-dual-list-selector__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane menu list. `}
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
                {`.pf-c-dual-list-selector__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane menu list item. `}
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
                {`.pf-c-dual-list-selector__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane menu item. `}
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
                {`.pf-c-dual-list-selector__item-main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane menu item main container. `}
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
                {`.pf-c-dual-list-selector__item-check`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector item check.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__item-count`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector item count.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__item-toggle-icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector item toggle icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__item-toggle`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector item toggle.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__item-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a dual list selector pane menu item text. `}
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
                {`.pf-c-dual-list-selector__controls`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector controls. `}
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
                {`.pf-c-dual-list-selector__controls-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the dual list selector controls item. `}
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
                {`.pf-m-available`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__pane`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a pane as the available list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-chosen`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__pane`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Defines a pane as the chosen list.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-selected`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the menu item for the selected state.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-check`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that an item is selectable with a checkbox.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that an item is expandable.`}
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
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-dual-list-selector__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates that an item is expanded.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsDualListSelectorHtmlDocs';
Component.pageData = pageData;

export default Component;
