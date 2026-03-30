/* eslint-env node */

import 'url-search-params-polyfill';

// Suppress act() warnings only for async markdown rendering (SyncMarkdownView /
// QuickStartMarkdownView). Other act warnings still surface so new tests stay honest.
const originalError = console.error;

const isMarkdownActWarning = (...args) => {
  const message = args
    .map((a) => {
      if (typeof a === 'string') {
        return a;
      }
      if (a instanceof Error && typeof a.message === 'string') {
        return a.message;
      }
      return '';
    })
    .join('\n');
  if (!message.includes('was not wrapped in act(')) {
    return false;
  }
  return (
    message.includes('SyncMarkdownView') || message.includes('QuickStartMarkdownView')
  );
};

console.error = (...args) => {
  if (isMarkdownActWarning(...args)) {
    return;
  }
  originalError.call(console, ...args);
};
