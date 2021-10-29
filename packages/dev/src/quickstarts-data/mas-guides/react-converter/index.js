require('ts-node').register();

const Module = require('module');
const fs = require('fs');

const resolveTextFile = (module, path) => {
  const content = fs.readFileSync(path).toString();
  module.exports = content;
};

Module._extensions['.html'] = resolveTextFile;
Module._extensions['.css'] = resolveTextFile;

exports.addReactConverter = require('./add-react-converter').addReactConverter;
