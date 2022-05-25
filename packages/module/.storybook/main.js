const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "webpackFinal": async config => {
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    return config
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // shouldExtractLiteralValuesFromEnum: true,
      // propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      // propFilter: (prop) => ( prop.parent ? !/node_modules\/(?!@patternfly).*/.test(prop.parent.fileName) : true),
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
}