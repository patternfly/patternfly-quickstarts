/* eslint-disable */

// Polyfill for Element.prototype.getRootNode (missing in older jsdom)
if (!Element.prototype.getRootNode) {
  Element.prototype.getRootNode = function (options) {
    var node = this;
    while (node.parentNode) {
      node = node.parentNode;
    }
    return node;
  };
}

// Polyfill for Element.prototype.closest (missing in older jsdom)
if (!Element.prototype.closest) {
  Element.prototype.closest = function (selector) {
    var el = this;
    while (el) {
      if (el.matches && el.matches(selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  };
}
