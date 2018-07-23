/* global __dirname */

module.exports = (function() {
  var path = require('path');
  var paths = require('./paths.config');

  return {
    entry: {
      zidentifier: './src/index.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '..', paths.umd),
      libraryTarget: 'umd',
      library: 'zidentifier'
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      }]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    externals: {
      angular: 'angular'
    },
    devtool: 'cheap-module-source-map'
  };
})();
