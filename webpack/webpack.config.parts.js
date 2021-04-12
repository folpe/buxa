// Portions réutilisables pour la configuration Webpack
// ====================================================

const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')

// CSS & SASS
// ----------
exports.extractCSS = ({ include, exclude, modules } = {}) =>
  extractStyling({ ext: 'css', include, exclude, modules })

exports.loadCSS = ({ include, exclude, modules } = {}) =>
  loadStyling({ ext: 'css', include, exclude, modules })

exports.extractStylus = ({ include, exclude, modules } = {}) =>
  extractStyling({ ext: 'styl', include, exclude, modules, altLang: 'stylus' })

exports.loadStylus = ({ include, exclude, modules } = {}) =>
  loadStyling({ ext: 'styl', include, exclude, modules, altLang: 'stylus' })

exports.extractSass = ({ include, exclude, modules } = {}) =>
  extractStyling({ ext: 'scss', include, exclude, modules, altLang: 'sass' })

exports.loadSass = ({ include, exclude, modules } = {}) =>
  loadStyling({ ext: 'scss', include, exclude, modules, altLang: 'sass' })

exports.loadFonts = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(?:woff2?|eot|ttf|otf)$/,
        include,
        exclude,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000, name: '[sha256:hash:16].[ext]' },
          },
        ],
      },
    ],
  },
})

exports.loadImages = ({ include, exclude, ieSafeSVGs = true } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(?:jpe?g|png|gif)$/,
        include,
        exclude,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000, name: '[sha256:hash:16].[ext]' },
          },
        ],
      },
      {
        test: /\.svg$/,
        include,
        exclude,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              iesafe: ieSafeSVGs,
              limit: 10000,
              name: '[sha256:hash:16].[ext]',
              stripdeclarations: true,
            },
          },
        ],
      },
    ],
  },
})

// Génération dynamique du gabarit HTML
// ------------------------------------

exports.html = (options) => {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  return { plugins: [new HtmlWebpackPlugin(options)] }
}

exports.babelize = ({ include, exclude = /node_modules/ } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include,
          exclude,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
      ],
    },
  }
}

exports.friendlyErrors = ({
  icon,
  notify = false,
  title = 'Webpack Build Error',
} = {}) => {
  let opts = {}
  if (notify) {
    const notifier = require('node-notifier')
    opts = {
      onErrors(severity, errors) {
        if (severity !== 'error') {
          return
        }

        const error = errors[0]
        notifier.notify({
          title,
          message: `${severity} : ${error.name}`,
          subtitle: error.file || '',
          icon,
        })
      },
    }
  }

  return {
    plugins: [new FriendlyErrorsWebpackPlugin(opts)],
  }
}

exports.copyStatic = ({ from, to }) => ({
  plugins: [new CopyWebpackPlugin({ patterns: [{ from, to }] })],
})

// Source Maps
// -----------

exports.generateSourceMaps = (type = 'cheap-module-source-map') => ({
  devtool: type,
})

// ESLint
// ------
exports.lintJS = ({ include, exclude = /node_modules/ } = {}) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        exclude,
        use: ['eslint-loader'],
      },
    ],
  },
})

exports.cleanDist = (paths, options) => {
  const CleanWebpackPlugin = require('clean-webpack-plugin')
  return { plugins: [new CleanWebpackPlugin(paths, options)] }
}

exports.useModuleLevelCache = (options) => {
  const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
  return { plugins: [new HardSourceWebpackPlugin(options)] }
}

exports.devServer = ({
  contentBase,
  hot = true,
  https,
  open,
  port,
  proxy,
  react = false,
} = {}) => {
  const devServer = {
    contentBase,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    https,
    noInfo: true,
    overlay: true,
    port,
    proxy,
  }

  const plugins = []
  if (hot) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    )
  }

  if (hot === 'only') {
    devServer.hotOnly = true
  } else {
    devServer.hot = !!hot
  }
  if (typeof open === 'string') {
    devServer.openPage = open
  } else {
    devServer.open = !!open
  }

  return { devServer, plugins }
}

exports.ignoreDynamicRequiresFor = (requestRegExp, contextRegExp) => ({
  plugins: [new webpack.IgnorePlugin(requestRegExp, contextRegExp)],
})

exports.ignoreMomentLocales = () =>
  exports.ignoreDynamicRequiresFor(/^\.\/locale$/, /moment$/)

exports.minifyAll = () => {
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  return {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
  }
}

// Offline management
// ------------------

exports.offline = (options) => ({
  plugins: [new OfflinePlugin(options)],
})

exports.optimizeImages = (options = {}) => {
  options = {
    optipng: { enabled: false },
    ...options,
    mozjpeg: { quality: 75, ...(options.mozjpeg || {}) },
  }
  return {
    module: {
      rules: [
        {
          test: /\.(?:jpe?g|png|gif|svg)$/,
          use: [{ loader: 'image-webpack-loader', options }],
        },
      ],
    },
  }
}

// Helper functions
// ----------------

function buildCSSRule({
  ext,
  altLang = null,
  include,
  exclude,
  modules = false,
  useStyle = false,
}) {
  const cssOptions = { importLoaders: 1, sourceMap: true }
  if (modules === true) {
    modules = {
      camelCase: 'only',
      localIdentName: '_[name]-[local]-[hash:base64:4]',
      modules: true,
    }
  }
  if (modules) {
    Object.assign(cssOptions, modules)
  }

  const result = {
    test: new RegExp(`\\.${ext}$`),
    include,
    exclude,
    use: [
      { loader: 'css-loader', options: cssOptions },
      {
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [require('postcss-cssnext')()],
          sourceMap: true,
        },
      },
    ],
  }

  if (altLang) {
    result.use.push({
      loader: `${altLang}-loader`,
      options: { sourceMap: true },
    })
  }

  if (useStyle) {
    result.use.unshift('style-loader')
  }

  return result
}

const cssPlugins = new Map()

function extractStyling({ ext, include, exclude, modules, name, altLang }) {
  const cssPluginExisted = cssPlugins.has(name)
  if (!cssPluginExisted) {
    cssPlugins.set(
      name,
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    )
  }
  const cssPlugin = cssPlugins.get(name)

  const { test, use } = buildCSSRule({ ext, modules, altLang })

  return {
    plugins: cssPluginExisted ? [] : [cssPlugin],
    module: {
      rules: [
        {
          test,
          include,
          exclude,
          use: [MiniCssExtractPlugin.loader, ...use],
        },
      ],
    },
  }
}

function loadStyling({ ext, include, exclude, modules, altLang }) {
  return {
    module: {
      rules: [
        buildCSSRule({
          ext,
          altLang,
          include,
          exclude,
          modules,
          useStyle: true,
        }),
      ],
    },
  }
}
