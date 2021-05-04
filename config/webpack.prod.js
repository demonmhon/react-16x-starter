// const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    // new WorkboxPlugin.InjectManifest({
    //   swSrc: path.resolve(__dirname, '../src/sw.js'),
    //   swDest: 'sw.js',
    // }),
  ],
});
