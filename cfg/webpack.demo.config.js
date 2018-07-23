const HtmlWebpackPlugin = require('html-webpack-plugin');
const wpc = require('./webpack.common.config');
const path = require('path');
const paths = require('./paths.config');


module.exports = Object.assign(wpc, {
  entry: {
    'zidentifier-demo': './demo/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', paths.demo)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/index.html')
    })
  ]
});
