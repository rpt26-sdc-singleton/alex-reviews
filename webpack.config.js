const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  // the output bundle won't be optimized for production but suitable for development
  mode: 'development',
  // the app entry point is /client/index.js
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    // the output of the webpack build will be in /public directory
    path: path.resolve(__dirname, 'public'),
    // the filename of the JS bundle will be bundle.js
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
      }
    ]
  },
  // add a custom index.html as the template
  plugins: [new SourceMapDevToolPlugin({
    filename: '[file].map'
  }), new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })]
};
