/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
  SRC: 'client',
  DIST: 'dist'
}


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `./${PATH.SRC}/index.html`,
  filename: `index.html`,
  inject: 'body'
})

module.exports = {
  entry: `./${PATH.SRC}/index.js`,
  output: {
    path: path.resolve('build'),
    filename: `${PATH.DIST}/app_bundle.js`
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'resolve-url-loader','sass-loader?sourceMap'])},
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      }
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin(`${PATH.DIST}/style.bundle.css`)
  ]

}
