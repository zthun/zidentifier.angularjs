/* global __dirname */

module.exports = (function() {
  var path = require('path');
  var paths = require('./paths.config');

  var entry = {
    zidentifier: './src/index.ts'
  };

  var output = {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', paths.umd),
    libraryTarget: 'umd',
    library: 'zidentifier'
  };

  var module = {
    rules: [{
      test: /\.ts$/,
      use: ['awesome-typescript-loader']
    }]
  };

  var externals = {
    angular: 'angular'
  };

  var resolve = {
    extensions: ['.ts', '.js']
  };

  return {
    entry: entry,
    output: output,
    module: module,
    resolve: resolve,
    externals: externals,
    devtool: 'cheap-module-source-map'
  };
})();
