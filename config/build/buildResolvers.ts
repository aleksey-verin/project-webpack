import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // для этих файлов мы не будем указывать расширение при импорте
    preferAbsolute: true,
    modules: [options.paths.scr, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
