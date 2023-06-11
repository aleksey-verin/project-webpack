import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack') //to access built-in plugins

const config: webpack.Configuration = {
  mode: 'development', // версия для сборки; development | production
  entry: path.resolve(__dirname, 'src', 'index.ts'), // точка входа / поменяли с js на ts при подключении TS

  output: {
    filename: '[name].[contenthash].js', // файл на выходе, contenthash для хеш номера
    path: path.resolve(__dirname, 'build'),
    clean: true, // удаление старых файлов
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      // конфигурация лоадеров (обрабатывают файлы за рамками js, т.е png, jpg, svg, css, scss, ts)
      {
        test: /\.tsx?$/, // лоадер для TS (для .ts, .tsx)
        use: 'ts-loader', // лоадер для TS который мы установили
        exclude: /node_modules/, // исключаем эту папку
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // для этих файлов мы не будем указывать расширение при импорте
  },
}

export default config
