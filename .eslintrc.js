module.exports = {
  extends: [
    'standard',
    'prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
  ],
  plugins: ['prettier', 'react', 'jsx-a11y', 'import', 'react-hooks'],
  parser: 'babel-eslint',
  rules: {
    'no-irregular-whitespace': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@@assets', './src/assets'],
          ['@@components', './src/components'],
          ['@@helpers', './src/helpers'],
          ['@@pages', './src/pages'],
          ['@@reducers', './src/reducers'],
          ['@@services', './src/services'],
          ['@@theme', './src/theme'],
          ['@@utils', './src/utils'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
    react: {
      version: '16.13.0',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
}
