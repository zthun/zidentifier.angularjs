var wpc = require('./webpack.common.config');
var path = require('path');
var paths = require('./paths.config');

module.exports = Object.assign(wpc, {
  entry: {
    zidentifier: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', paths.umd),
    libraryTarget: 'umd',
    library: 'zidentifier'
  },
  externals: {
    angular: 'angular'
  }
});
