// Configuration Webpack
// =====================

const Path = require('path')
const parts = require('./webpack.config.parts')
const { merge } = require('webpack-merge')

const root = Path.resolve(__dirname, '..')

const PATHS = {
  app: Path.resolve(root, 'src'),
  build: Path.resolve(root, 'public'),
  root,
  static: Path.resolve(root, 'static'),
  template: Path.resolve(root, 'src/index.html'),
}

const CORE_CONFIG = merge([
  {
    entry: {
      main: [PATHS.app],
    },
    output: {
      crossOriginLoading: 'anonymous',
      devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
      filename: '[name].js',
      path: PATHS.build,
      publicPath: '/',
    },
    resolve: {
      alias: {
        '@@assets': Path.resolve(__dirname, '../src/assets/'),
        '@@components': Path.resolve(__dirname, '../src/components/'),
        '@@helpers': Path.resolve(__dirname, '../src/helpers/'),
        '@@pages': Path.resolve(__dirname, '../src/pages/'),
        '@@reducers': Path.resolve(__dirname, '../src/reducers/'),
        '@@services': Path.resolve(__dirname, '../src/services/'),
        '@@theme': Path.resolve(__dirname, '../src/theme/'),
        '@@utils': Path.resolve(__dirname, '../src/utils/'),
      },
    },
  },
  parts.friendlyErrors(),
  parts.babelize({ include: PATHS.app }),
  parts.lintJS(),
  parts.loadFonts(),
  parts.loadImages({ include: PATHS.app }),
  parts.html({ template: PATHS.template }),
  parts.copyStatic({ from: PATHS.static, to: PATHS.build }),
  parts.generateSourceMaps(),
  parts.useModuleLevelCache(),
])

const devConfig = () =>
  merge([
    {
      entry: { main: ['react-hot-loader/patch'] },
      mode: 'development',
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    },
    CORE_CONFIG,
    parts.devServer({
      port: 3000,
      poll: process.env.POLL,
    }),
    parts.loadCSS(),
    parts.loadSass({ include: PATHS.app }),
  ])

const productionConfig = () =>
  merge([
    {
      mode: 'production',
      optimization: {
        runtimeChunk: true,
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },

          chunks: 'all',
        },
      },
      output: { filename: '[name].[chunkhash:8].js' },
    },
    CORE_CONFIG,
    parts.cleanDist([PATHS.build], { root: PATHS.root }),
    parts.extractCSS(),
    parts.extractSass({ include: PATHS.app }),
    parts.generateSourceMaps('source-map'),
    parts.minifyAll(),
    parts.optimizeImages(),
    parts.offline({
      AppCache: true,
      excludes: ['**/.*', '**/*.map', '**/*.gz', '**/_redirects'],
      externals: ['/history', '/settings'],
    }),
  ])

module.exports = (env = process.env.NODE_ENV) =>
  env === 'production' ? productionConfig() : devConfig()
