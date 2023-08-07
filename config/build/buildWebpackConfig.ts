import path from 'path'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode: mode, // версия для сборки; development | production
    entry: paths.entry, // точка входа / поменяли с js на ts при подключении TS

    output: {
      filename: '[name].[contenthash].js', // файл на выходе, contenthash для хеш номера
      path: paths.build,
      clean: true, // удаление старых файлов
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
