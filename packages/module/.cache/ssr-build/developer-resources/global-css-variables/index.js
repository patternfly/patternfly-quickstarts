exports.id = 8175;
exports.ids = [8175];
exports.modules = {

/***/ 36062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99497);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48204);
/* harmony import */ var _node_modules_theme_patternfly_org_pages_img_component_variable_mapping_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15010);
/* harmony import */ var _node_modules_theme_patternfly_org_pages_img_component_variable_mapping_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_theme_patternfly_org_pages_img_component_variable_mapping_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_theme_patternfly_org_pages_components_cssVariables_cssVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12476);




var pageData = {
  "id": "Global CSS variables",
  "section": "developer-resources",
  "source": "pages-overview",
  "slug": "/developer-resources/global-css-variables",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/node_modules/theme-patternfly-org/pages/global-css-variables.md"
};
pageData.liveContext = {
  CSSVariables: _node_modules_theme_patternfly_org_pages_components_cssVariables_cssVariables__WEBPACK_IMPORTED_MODULE_3__/* .CSSVariables */ .N
};
pageData.examples = {};

var Component = function Component() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "about-css-variables",
    "size": "h2",
    "className": "ws-title ws-h2"
  }, "About CSS variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "The CSS variable system is a two-layer theming system where global variables inform component variables."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "global-variables",
    "size": "h3",
    "className": "ws-title ws-h3"
  }, "Global variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Global variables define and enforce global style elements (like values for color, spacing, and font size) across the entire system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Global variables follow this formula:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "--pf-global--concept--PropertyCamelCase--modifier--state")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Where..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "className": "ws-ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "concept"), " is something like a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "spacer"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "main-title"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "PropertyCamelCase"), " is something like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "BackgroundColor"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "FontSize"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "modifier"), " is something like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "sm"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "lg"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "A ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "state"), " is something like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "hover"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "expanded"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Example:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "className": "ws-ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "Note: global variables are scoped to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ":root"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Example */ .en, {
    "code": ":root {\n  /* Default & hovered link colors */\n  --pf-global--link--Color: #06c;\n  --pf-global--link--Color--hover: #004080;\n}",
    "lang": "css"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "The ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    "to": "#global-css-variables"
  }, "full list of global CSS variables"), " can be found below."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "component-variables",
    "size": "h3",
    "className": "ws-title ws-h3"
  }, "Component variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Component variables are used to define custom properties at the component-level. Component variables are always defined by global variables."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Component variables follow this formula:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "--pf-c-block__element--modifier--state--breakpoint--pseudo-element--PropertyCamelCase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Where..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "className": "ws-ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "pf-c-block"), " refers to the block, usually the component or layout name, like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "pf-c-alert"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "__element"), " refers to the element inside of the block, like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "__title"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "modifier"), " is prefixed with", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "-m"), " and refers to a modifier class such as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-danger"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "state"), " is something like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "hover"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "active"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "breakpoint"), " is a media query breakpoint such as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "sm"), " for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "$pf-global--breakpoint--xs"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "pseudo-element"), " is either ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "before"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "after"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Example:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "className": "ws-ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "Note: component variables are scoped to the top-level component selector", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Example */ .en, {
    "code": ".pf-c-button {\n  /* Default, primary, and primary hovered button background colors */\n  --pf-c-button--BackgroundColor: transparent;\n  --pf-c-button--m-primary--BackgroundColor: var(--pf-global--primary-color--100);\n  --pf-c-button--m-primary--hover--BackgroundColor: var(--pf-global--primary-color--200);\n}",
    "lang": "css"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Component variables are listed at the bottom of each component page (for example, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    "to": "/components/button#css-variables"
  }, "button css variables"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Note that all component variables are declared at the top component level (for example, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-c-button"), "). The component variable table linked above also shows all usages of each variable and the values they evaluate to in each case - expand any component variable row to view the global variable it is mapped to."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: (_node_modules_theme_patternfly_org_pages_img_component_variable_mapping_png__WEBPACK_IMPORTED_MODULE_2___default()),
    width: (_node_modules_theme_patternfly_org_pages_img_component_variable_mapping_png__WEBPACK_IMPORTED_MODULE_2___default().width),
    height: (_node_modules_theme_patternfly_org_pages_img_component_variable_mapping_png__WEBPACK_IMPORTED_MODULE_2___default().height),
    "alt": "Component variable mapping",
    "className": "ws-img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "breakpoint-variables-and-class-suffixes",
    "size": "h3",
    "className": "ws-title ws-h3"
  }, "Breakpoint variables and class suffixes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "PatternFly defines a number of standard breakpoints. These are always used as a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "min-width"), " breakpoint; i.e. using the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "-md"), " breakpoint would apply to everything at the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "-md"), " width and wider. (There is one exception to this, which is in the responsive behavior of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    "to": "/components/table"
  }, "table component"), ".)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Breakpoint suffixes are used in utility classes and layouts as well as in many components as a way to apply class styles at a specified breakpoint. When available, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "{-on-[breakpoint]}"), " will be shown as an available suffix for the class in the usage section of the documentation. The breakpoint suffix is optional and if not specified, the base class will be used. There are breakpoints for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "sm"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "md"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "lg"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "xl"), ", and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "2xl"), ", and the values for the corresponding breakpoints are defined below in the global variables ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "\u2014pf-global\u2014breakpoint\u2014[breakpoint]"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "using-the-variable-system",
    "size": "h3",
    "className": "ws-title ws-h3"
  }, "Using the variable system"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "PatternFly 4 styles provide a default starting point. You can use the variable system to make adjustments to that default styling. When you change one or more elements, you should package those values into a new SCSS stylesheet to replace the default styling."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Overrides to PatternFly variables should be made at the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ":root"), " level for global variables or at the top-level component selector for component variables (for example, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-c-button"), "), as these overrides will cascade down to children elements accordingly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Example:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "className": "ws-ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Change the global primary color to red, but keep the original primary blue color as the background for primary buttons."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Example */ .en, {
    "code": "/* Override global primary color 100 to red */\n:root {\n  --pf-global--primary-color--100: var(--pf-global--palette--red-400);\n}\n\n/* Override the above override for only the primary button background color */\n.pf-c-button {\n  --pf-c-button--m-primary--BackgroundColor: var(--pf-global--palette--blue-400);\n}",
    "lang": "css"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "global-css-variables",
    "size": "h2",
    "className": "ws-title ws-h2"
  }, "Global CSS variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_node_modules_theme_patternfly_org_pages_components_cssVariables_cssVariables__WEBPACK_IMPORTED_MODULE_3__/* .CSSVariables */ .N, {
    prefix: "patternfly_variables",
    selector: ":root",
    hideSelectorColumn: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "chart-css-variables",
    "size": "h2",
    "className": "ws-title ws-h2"
  }, "Chart CSS variables"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_node_modules_theme_patternfly_org_pages_components_cssVariables_cssVariables__WEBPACK_IMPORTED_MODULE_3__/* .CSSVariables */ .N, {
    prefix: "patternfly_charts",
    hideSelectorColumn: true
  }));
};

Component.displayName = 'DeveloperResourcesGlobalCssVariablesDocs';
Component.pageData = pageData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ 15010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
          srcSet: __webpack_require__.p + "images/component-variable-mapping.a03d0422a48676f95cdebc876073af56.png"+" 709w",
          images:[ {path: __webpack_require__.p + "images/component-variable-mapping.a03d0422a48676f95cdebc876073af56.png",width: 709,height: 261}],
          src: __webpack_require__.p + "images/component-variable-mapping.a03d0422a48676f95cdebc876073af56.png",
          toString:function(){return __webpack_require__.p + "images/component-variable-mapping.a03d0422a48676f95cdebc876073af56.png"},
          
          width: 709,
          height: 261
        }

/***/ })

};
;