/**
 * Removes unused CSS
 * Evaluate used CSS against the full (with dependencies) quick starts build
 */

module.exports = {
  content: ['dist/quickstarts-full.es.js'],
  css: ['dist/quickstarts.css', 'dist/quickstarts-bootstrap.css'],
  fontFace: false,
  keyframes: true,
  variables: false,
  output: 'dist',
};
