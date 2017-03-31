'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {
    entry1: './entry1.js',
    entry2: './entry2.js',
  },

  output: {
    path: __dirname + '/build',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    }),
  ],

  target: 'node',
};
