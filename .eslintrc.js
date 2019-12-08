module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:promise/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['prettier', 'promise'],
  env: {
    'es6': true,
    'browser': true
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    'promise/catch-or-return': 'off',
    'quotes': ['error', 'single']
  }
};
