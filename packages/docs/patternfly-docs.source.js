const path = require('path');

module.exports = (sourceMD, sourceProps) => {
  // Content props
  const propsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];

  const quickStartsExtensionPath = require
    .resolve('@patternfly/quickstarts/package.json')
    .replace('package.json', 'src');
  sourceProps(path.join(quickStartsExtensionPath, '/**/*.tsx'), propsIgnore);

  // Content md
  const contentBase = path.join(__dirname, 'src/content');
  sourceMD(path.join(contentBase, 'extensions/**/*.md'), 'extensions');
}
