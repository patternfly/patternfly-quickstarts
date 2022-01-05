import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import externals from 'rollup-plugin-node-externals';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';
import packageJson from './package.json';
import scss from 'rollup-plugin-scss';

const globImporter = require('node-sass-glob-importer');

const commonPlugins = [
  resolve({
    preferBuiltins: true,
  }),
  commonjs(),
  typescript({
    typescript: require('typescript'),
    tsconfig: 'tsconfig.json',
  }),
  json(),
];

const includePaths = ['node_modules/', '../../node_modules/'];
const commonScssOptions = {
  includePaths,
  sass: require('node-sass'),
  importer: globImporter(),
};

// CommonJS build
const cjsBuild = {
  input: 'src/index.ts',
  output: {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    externals({ builtins: false }),
    scss({
      output: false,
      ...commonScssOptions,
    }),
    ...commonPlugins,
  ],
};

// ES build
// Outputs the compiled dist/index.es.js
// as well as the dist/quickstarts-base.css stylesheet
// (which will be merged with quickstarts-vendor.css into quickstarts.css)
export const esBuild = {
  input: 'src/index.ts',
  output: {
    file: packageJson.module,
    format: 'es',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    externals(),
    scss({
      output: 'dist/quickstarts-base.css',
      ...commonScssOptions,
    }),
    ...commonPlugins,
    analyze({ summaryOnly: true, limit: 5 }),
    visualizer({ template: 'treemap' }), // sunburst, treemap, network
  ],
};

// Build out the full version of quick starts including the dependencies
// (showdown, PatternFly, ...)
// This is useful also for evaluating the CSS against so we can remove unused styles
const esBuildWithDeps = {
  input: 'src/index.ts',
  output: {
    file: 'dist/quickstarts-full.es.js',
    format: 'es',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    scss({
      output: false,
      ...commonScssOptions,
    }),
    ...commonPlugins,
  ],
};

// This is just for building out the quickstarts-vendor.css stylesheet
// bundles in react-catalog-view-extension, CodeBlock, and ClipboardCopy styles
export const cssVendor = {
  input: 'src/styles/vendor-entry.ts',
  output: {
    file: 'dist/vendor.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    scss({
      output: 'dist/quickstarts-vendor.css',
      ...commonScssOptions,
    }),
  ],
};

// wraps the quick starts styles within .pfext-quick-start__base
// quickstarts-standalone.scss is used in conjunction with patternfly-nested.scss,
// for consumers that have a different major version of PatternFly
export const quickStartsStyles = {
  input: 'src/styles/quickstarts-standalone-entry.ts',
  output: false,
  plugins: [
    scss({
      output: 'dist/quickstarts-standalone.css',
      ...commonScssOptions,
    }),
  ],
};

// wraps PatternFly styles within .pfext-quick-start__base
// useful for consumers that use a different major version of PatternFly
// which might be incompatible with the PatternFly styles we depend upon
export const pfStyles = {
  input: 'src/styles/patternfly-nested-entry.ts',
  output: false,
  plugins: [
    scss({
      output: 'dist/patternfly-nested.css',
      ...commonScssOptions,
    }),
  ],
};

// Drawer, Popover, and Modal (including Backdrop and Bullseye) styles
export const pfGlobalStyles = {
  input: 'src/styles/patternfly-global-entry.ts',
  output: false,
  plugins: [
    scss({
      output: 'dist/patternfly-global.css',
      ...commonScssOptions,
    }),
  ],
};

export default [
  cjsBuild,
  esBuild,
  esBuildWithDeps,
  cssVendor,
  pfStyles,
  pfGlobalStyles,
  quickStartsStyles,
];
