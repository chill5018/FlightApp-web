const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
require('babel-polyfill');

const commonPaths = require('./common-paths');

const config = {
  entry: [
    'babel-polyfill',
    commonPaths.entryPath,
  ],
  module: {
    rules: [
      {
        test: /\.s(c|a)ss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new UglifyJsWebpackPlugin({
      sourceMap: true,
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devtool: 'source-map',
};

module.exports = config;
