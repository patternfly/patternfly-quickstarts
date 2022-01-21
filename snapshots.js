const PercyScript = require('@percy/script');
const options = { headless: true };
const withSnapshots = true;

const runThroughQuickStart = async (id, page, percySnapshot) => {
  const snapshotOptions = {
    widths: [375],
  };
  await page.goto(`http://localhost:3000?quickstart=${id}`);
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor('.pf-c-drawer__panel');
  withSnapshots && (await percySnapshot(`${id}__intro`, snapshotOptions));

  await page.click('[data-test="Start button"]');
  withSnapshots && (await percySnapshot(`${id}__step-1`, snapshotOptions));
  await page.click('[data-test="Next button"]');
  withSnapshots && (await percySnapshot(`${id}__step-1-verify`, snapshotOptions));

  let sawCloseButton = false;
  let isVerifyStep = false;
  let step = 1;
  while (!sawCloseButton) {
    if ((await page.$('[data-test="Next button"]')) !== null) {
      step = step + 1;
      await page.click('[data-test="Next button"]');
      if (isVerifyStep) {
        withSnapshots && (await percySnapshot(`${id}__step-${step}-verify`, snapshotOptions));
      } else {
        withSnapshots && (await percySnapshot(`${id}__step-${step}`, snapshotOptions));
      }
      isVerifyStep = !isVerifyStep;
    } else {
      sawCloseButton = true;
      await page.waitForSelector('[data-test="Close button"]');
      withSnapshots && (await percySnapshot(`${id}__conclusion`, snapshotOptions));
      await page.click('[data-test="Close button"]');
    }
  }
};

PercyScript.run(async (page, percySnapshot) => {
  // catalog screenshot
  await page.goto('http://localhost:3000');
  await page.waitFor('.pfext-quick-start-tile');
  withSnapshots && (await percySnapshot('catalog', { widths: [1280] }));

  // quick starts
  const quickStarts = [
    'getting-started-with-quick-starts',
    'mas-alert-note-prereq',
    'add-healthchecks',
    'install-app-and-associate-pipeline',
    'serverless-application',
    'node-with-s2i',
    'spring-with-s2i',
  ];
  for (const qs of quickStarts) {
    await runThroughQuickStart(qs, page, percySnapshot);
  }
}, options);
