import path from 'path'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'
import webpack from 'webpack'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options

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
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}
