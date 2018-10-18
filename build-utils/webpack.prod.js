const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const commonPaths = require('./common-paths');

const config = {
  entry: [
    commonPaths.entryPath,
  ],
  module: {
    rules: [
      {
        test: /\.s(c|a)ss/,
        exclude: /node_modules/,
        use: ['css-loader', 'sass-loader'],
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
