import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import * as webpack from 'webpack';

export const config: webpack.Configuration = {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 1234,
  },
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new Dotenv({ defaults: true }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      title: 'Polling Application',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
};

export default config;
