const path = require('path');

module.exports = (sourceMD, sourceProps) => {
  // Parse source content for props so that we can display them
  const propsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];
  // const extensionPath = path.join(__dirname, '../src');
  // sourceProps(path.join(extensionPath, '/**/*.tsx'), propsIgnore);

  // // Parse md files
  // const contentBase = path.join(__dirname, './content');
  // sourceMD(path.join(contentBase, 'extensions/**/*.md'), 'extensions');

  const extensionPath = require
    .resolve('@patternfly/quickstarts/package.json')
    .replace('package.json', 'src');
  sourceProps(path.join(extensionPath, '/**/*.tsx'), propsIgnore);

  sourceMD(
    path.join(extensionPath, '../patternfly-docs/**/design-guidelines/*.md'),
    'design-guidelines',
  );
  sourceMD(path.join(extensionPath, '../patternfly-docs/**/examples/*.md'));
};
