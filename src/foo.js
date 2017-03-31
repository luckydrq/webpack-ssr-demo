'use strict';

const bar = require('./bar');

bar.console();

exports.console = function() {
  console.log('foo console');
};
