import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // чтобв стили css создавались отдельным файлом в сборке
      filename: 'css/[name].[contenthans:8].css',
      chunkFilename: 'css/[name].[contenthans:8].css',
    }),
  ]
}
