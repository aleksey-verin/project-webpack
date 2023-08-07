import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }

  // JSX/TSX - если бы не было typescript, то понадобился бы babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/, // лоадер для TS (для .ts, .tsx)
    use: 'ts-loader', // лоадер для TS который мы установили
    exclude: /node_modules/, // исключаем эту папку
  }

  return [
    // конфигурация лоадеров (обрабатывают файлы за рамками js, т.е png, jpg, svg, css, scss, ts)
    typescriptLoader,
    cssLoader,
  ]
}
