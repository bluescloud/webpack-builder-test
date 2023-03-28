// 进一步分包预编译资源模块
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name]_[chunkhash].dll.js',
    path: path.join(__dirname, 'build/library'),
    library: '[name]_[chunkhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_[chunkhash]',
      path: path.join(__dirname, 'build/library/[name].json'),
    }),
  ],
};
