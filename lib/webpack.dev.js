const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'develepment',
  Plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devTool: 'cheap-source-map',
};
module.exports = merge(baseConfig, devConfig);
