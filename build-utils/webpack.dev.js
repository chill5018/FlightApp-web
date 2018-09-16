/* eslint-disable */ 
const webpack = require('webpack');
const commonPaths = require('./common-paths');

const config = {
  entry: [
    'react-hot-loader/patch',
    commonPaths.entryPath,
  ],
  module: {
    rules: [
      {
        test: /\.s(a|c)ss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
  },
  devtool: 'eval-source-map',
};

module.exports = config;
