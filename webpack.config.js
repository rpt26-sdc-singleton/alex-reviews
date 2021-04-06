const path = require('path');

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
  devServer: {
    port: 3007
  },
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        enforce: 'pre',
        // use: ['source-map-loader'],
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        use: ['babel-loader']
      }
    ]
  }
};
