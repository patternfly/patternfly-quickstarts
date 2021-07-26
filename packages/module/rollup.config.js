import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import externals from 'rollup-plugin-node-externals';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';
import packageJson from './package.json';
import scss from 'rollup-plugin-scss';

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

const commonScssOptions = {
  includePaths: ['node_modules/', '../../node_modules/'],
  importer(path) {
    return { file: path[0] !== '~' ? path : path.slice(1) };
  },
  sass: require('node-sass'),
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
// as well as the main dist/quickstarts.css stylesheet
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
      output: 'dist/quickstarts.css',
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

export default [cjsBuild, esBuild, esBuildWithDeps, cssVendor];
