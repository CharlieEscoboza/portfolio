const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './lib/client/scripts/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: "source-map",
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=2!postcss-loader!sass-loader',
          publicPath: 'build'
        })
      },
      {
        test: /\.(jpg|svg)$/,
        use: {
          loader: 'url-loader'
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
