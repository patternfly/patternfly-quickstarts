import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
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

// ES build
// Outputs the compiled dist/index.es.js
// as well as the main dist/quickstarts.css stylesheet
const esBuild = {
  input: 'src/index.ts',
  output: {
    file: packageJson.module,
    format: 'es',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    scss({
      output: 'dist/quickstarts.css',
      ...commonScssOptions,
    }),
    ...commonPlugins,
  ],
};

// This is just for building out the quickstarts-bootstrap.css stylesheet
const cssBootstrap = {
  input: 'src/quickstarts-bootstrap.ts',
  output: {
    file: 'dist/quickstarts-bootstrap.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    scss({
      output: 'dist/quickstarts-bootstrap.css',
      ...commonScssOptions,
    }),
  ],
};

export default [esBuild, cssBootstrap];
