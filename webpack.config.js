const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin()],
  mode: 'production',
  entry: {
    bundled: ['@babel/polyfill', './src/index.js'],
    es5: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build', './'),
    filename: '[name].js',
    library: 'frowser',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
