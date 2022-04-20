"use strict";
exports.id = 9305;
exports.ids = [9305];
exports.modules = {

/***/ 75013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99497);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48204);


var pageData = {
  "id": "Red Hat font",
  "section": "developer-resources",
  "source": "pages-overview",
  "slug": "/developer-resources/red-hat-font",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/node_modules/theme-patternfly-org/pages/red-hat-font.md"
};
pageData.examples = {};

var Component = function Component() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "PR - ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    "to": "https://github.com/patternfly/patternfly/pull/4476"
  }, "https://github.com/patternfly/patternfly/pull/4476")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Available in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    "to": "https://github.com/patternfly/patternfly/releases/tag/prerelease-v4.161.0"
  }, "v4.161.0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "overview",
    "size": "h2",
    "className": "ws-title ws-h2"
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "PatternFly has created opt-ins for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "v4.0.2"), " of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    "to": "https://github.com/RedHatOfficial/RedHatFont/"
  }, "RedHatFont"), ". This is an update from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "v2.x"), ". There are many new features in this update, including:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "className": "ws-ul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "Variable fonts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "New weights in Red Hat Display and Red Hat Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "Tabular figures (monospaced numbers) in Red Hat Display and Red Hat Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "Red Hat Mono typeface"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    "className": "ws-li"
  }, "Dropping support for IE11 (dropped the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".woff"), " format)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "available-opt-ins",
    "size": "h3",
    "className": "ws-title ws-h3"
  }, "Available Opt-ins"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": ".pf-m-redhat-updated-font",
    "size": "h4",
    "className": "ws-title ws-h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhat-updated-font")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Updates the Red Hat Text and Red Hat Display font stacks to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "v4.0.2"), ". This should be a safe, seamless opt-in, with small improvements to glyph shape, kerning, metadata across the entire family of fonts. Potential concerns may be that this will remove support for IE11 by removing the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".woff"), " format support, and small layout shifts as result of the small improvements."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": ".pf-m-redhatmono-font",
    "size": "h4",
    "className": "ws-title ws-h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhatmono-font")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Updates the monospaced font stack to use the Red Hat Mono font. This opt-in can be combined with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhat-updated-font"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": ".pf-m-redhatvf-font",
    "size": "h4",
    "className": "ws-title ws-h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhatVF-font")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "Updates the Red Hat Text, Red Hat Display, and Red Hat Mono font stacks to use the variable font files."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": ".pf-m-tabular-nums",
    "size": "h4",
    "className": "ws-title ws-h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-tabular-nums")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "This is a global class that can be applied to any element to enable monospaced numbers on that element and its children."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_patternfly_org_components__WEBPACK_IMPORTED_MODULE_1__/* .AutoLinkHeader */ .sg, {
    "id": "using-opt-in-classes",
    "size": "h3",
    "className": "ws-title ws-h3"
  }, "Using opt-in classes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "className": "ws-p"
  }, "To opt-in to any of the new fonts (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhat-updated-font"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhatmono-font"), ", and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-redhatVF-font"), "), add the opt-in class to the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "<body>"), " tag of your application. To opt-in to monospaced numbers globally across your application, apply ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, ".pf-m-tabular-nums"), " to any element that wraps your entire application (eg, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "<body>"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "<div id=\"root\">"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    "className": "ws-code"
  }, "<div class=\"pf-c-page\">"), ", etc). To opt-in to monospaced numbers on a particular element and its children, add the class to that element itself."));
};

Component.displayName = 'DeveloperResourcesRedHatFontDocs';
Component.pageData = pageData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ })

};
;