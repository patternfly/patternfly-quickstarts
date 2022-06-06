import commonjs from '@rollup/plugin-commonjs';
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
    sourceMap: true,
    inlineSources: true,
  })
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
    // sourcemap: true,
    inlineDynamicImports: true
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
// as well as the main dist/transform-adoc.css stylesheet
export const esBuild = {
  input: 'src/index.ts',
  output: {
    file: packageJson.module,
    format: 'es',
    // sourcemap: true,
  },
  external: ['react', 'react-dom', '@patternfly/react-core', '@patternfly/react-styles'],
  plugins: [
    externals(),
    scss({
      output: 'dist/transform-adoc.css',
      ...commonScssOptions,
    }),
    ...commonPlugins,
    analyze({ summaryOnly: true, limit: 5 }),
    visualizer({ template: 'treemap' }), // sunburst, treemap, network
  ],
};

export default [cjsBuild, esBuild];
