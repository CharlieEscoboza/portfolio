const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack-hot-middleware/public?path=/__webpack_hmr&timeout=20000',
    './lib/public/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/'
  },
  devtool: "source-map",
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=2!postcss-loader!sass-loader',
          publicPath: 'build/public'
        })
      },
      {
        test: /\.(jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../',
            useRelativePath: true
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'styles/style.css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js']
  }
};
