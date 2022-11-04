const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    //name e contenthash para não termos problemas de cache a cada novo bundle
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //plugin extrair arquivo css separado
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    //plugin limpar arquivos desnecessarios
    new CleanWebpackPlugin(),
    //nome de arquivo final de bundle css
    //name e contenthash para não termos problemas de cache a cada novo bundle
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    //plugin de variaveis globais
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("1.0.2"),
      PORT: JSON.stringify("8080"),
    }),
    //plugin acesso variaveis de arquivo env
    new DotenvPlugin(),
    //plugin arquivos html
    new HtmlWebpackPlugin(),
  ],
};