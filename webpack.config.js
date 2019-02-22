/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/, use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },  
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
    new MiniCssExtractPlugin({ filename: `${PATH.DIST}/style.bundle.css`})
  ]

}
