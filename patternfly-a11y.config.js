// const { fullscreenRoutes } = require('theme-patternfly-org/routes');

/**
 * Wait for a selector before running axe
 *
 * @param page page from puppeteer
 */
async function waitFor(page) {
  await page.waitForSelector('#root > *');
}

module.exports = {
  prefix: 'http://localhost:3000',
  waitFor,
  crawl: false,
  urls: ['/custom-catalog/', '/quickstarts-props'],
  // ignoreRules: [
  //   'color-contrast',
  //   'page-has-heading-one',
  //   'scrollable-region-focusable',
  //   'aria-allowed-attr',
  //   'bypass',
  //   'aria-progressbar-name',
  //   'aria-required-parent',
  //   'aria-required-children',
  //   'nested-interactive',
  // ].join(','),
  ignoreIncomplete: true,
};
