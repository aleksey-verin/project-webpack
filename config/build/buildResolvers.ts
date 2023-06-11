import { ResolveOptions } from 'webpack'

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // для этих файлов мы не будем указывать расширение при импорте
  }
}
