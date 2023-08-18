import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
          },
        },
      },
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
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ]
}
