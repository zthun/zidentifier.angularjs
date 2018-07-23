module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts$/,
      use: ['awesome-typescript-loader']
    }, {
      test: /\.html$/,
      use: ['raw-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'cheap-module-source-map'
};
