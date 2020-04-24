import path from "path";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

export const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Polling Application",
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 1234,
    hot: true,
    open: true,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

export default config;
