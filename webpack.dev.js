const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    compress: true,
    port: 1004,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/template.html" })],
});
