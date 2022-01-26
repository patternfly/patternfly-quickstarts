/**
 * Wait for a selector before running axe
 *
 * @param page page from puppeteer
 */
async function waitFor(page) {
  await page.waitForSelector('.pfext-quick-start-catalog__gallery');
}

module.exports = {
  prefix: 'http://localhost:3000',
  waitFor,
  crawl: false,
  urls: [
    '/quickstarts-props',
    '?quickstart=add-healthchecks',
    '?quickstart=install-app-and-associate-pipeline',
    {
      url: '?quickstart=add-healthchecks',
      label: 'quickstart-detail-start',
      afterNav: async (page) => {
        const buttons = await page.$$('.pfext-quick-start-footer__actionbtn');
        await buttons[0].click();
      },
    },
    {
      url: '?quickstart=add-healthchecks',
      label: 'quickstart-detail-next',
      afterNav: async (page) => {
        const buttons = await page.$$('.pfext-quick-start-footer__actionbtn');
        await buttons[0].click();
        const buttons2 = await page.$$('.pfext-quick-start-footer__actionbtn');
        await buttons2[0].click();
      },
    },
    {
      url: '?quickstart=add-healthchecks',
      label: 'quickstart-detail-check-work',
      afterNav: async (page) => {
        const buttons = await page.$$('.pfext-quick-start-footer__actionbtn');
        await buttons[0].click();
        const radio = await page.$$('.pfext-quick-start-task-review__radio');
        await radio[0].click();
      },
    },
    {
      url: '?quickstart=add-healthchecks',
      label: 'quickstart-detail-check-work-fail',
      afterNav: async (page) => {
        const buttons = await page.$$('.pfext-quick-start-footer__actionbtn');
        await buttons[0].click();
        const radio = await page.$$('.pfext-quick-start-task-review__radio');
        await radio[1].click();
      },
    },
  ],
  ignoreIncomplete: true,
};
