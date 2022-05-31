const path = require('path');

module.exports = (sourceMD, sourceProps) => {
  // Content md
  const contentBase = path.join(__dirname, 'src/content');
  sourceMD(path.join(contentBase, 'extensions/**/*.md'), 'extensions');

  // Theme pages
  const themePagesPath = require
    .resolve('theme-patternfly-org/package.json')
    .replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');
}
