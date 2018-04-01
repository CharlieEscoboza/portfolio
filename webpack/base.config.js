const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './lib/public/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build/public'),
    publicPath: '/'
  },
  devtool: 'source-map',
  target: 'web',
  mode: 'development',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?importLoaders=2!postcss-loader!sass-loader'
        ]
      },
      {
        test: /\.(jpg|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles/style.css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: ['.js']
  }
};
