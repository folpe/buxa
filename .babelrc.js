module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        targets: {
          browsers: ['last 2 versions', '> 1%', 'safari >= 10'],
          node: 'current',
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'emotion',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    production: {
      plugins: ['emotion'],
    },
    development: {
      plugins: [['emotion', { sourceMap: true }], 'react-hot-loader/babel'],
    },
  },
}
