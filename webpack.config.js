const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {import("webpack").Configuration} */
const config = {
  entry: {
    main: "./src/food-app/main.ts"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "./docs")
  },
  devtool: 'source-map',
  mode: 'development',
  resolve: {
    extensions: ["", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
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
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new HtmlWebpackPlugin({
      template: './src/template/index.html',
      filename: 'index.html',
      chunks: ["main"],
      inject: "body"
    })
  ]
}

module.exports = config
