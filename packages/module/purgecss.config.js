/**
 * Removes unused CSS
 * Evaluate used CSS against the full (with dependencies) quick starts build
 */

module.exports = {
  content: ['dist/quickstarts-full.es.js'],
  css: ['dist/quickstarts-vendor.css'],
  fontFace: false,
  keyframes: true,
  variables: false,
  output: 'dist',
};
