const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** @type {import("webpack").Configuration} */
const config = {
  entry: {
    main: "./src/library.ts"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist")
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new HtmlWebpackPlugin({
      template: './src/template/test.html',
      filename: 'index.html',
      chunks: ["main"],
      inject: "body"
    })
  ]
}

module.exports = config
