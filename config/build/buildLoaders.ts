import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // лоадер для TS (для .ts, .tsx)
    use: 'ts-loader', // лоадер для TS который мы установили
    exclude: /node_modules/, // исключаем эту папку
  }

  return [
    // конфигурация лоадеров (обрабатывают файлы за рамками js, т.е png, jpg, svg, css, scss, ts)
    typescriptLoader,
  ]
}
