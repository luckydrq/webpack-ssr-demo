'use strict';

const foo = require('./src/foo');
const bar = require('./src/bar');

module.exports = {
  console: foo.console,
  console2: bar.console,
};
