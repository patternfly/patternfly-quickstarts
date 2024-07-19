const concat = require('concat-files');

concat(
  ['dist/quickstarts-base.css', 'dist/quickstarts-vendor.css'],
  'dist/quickstarts.css',
  function (err) {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line
    console.log('created quickstarts.css');
  },
);
