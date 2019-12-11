module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['prettier', 'promise', 'react'],
  env: {
    'es6': true,
    'browser': true
  },
  settings: {
    'react': {
      'version': 'detect'
    }
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
    'quotes': ['error', 'single'],
    'react/prop-types': 'off'
  }
};
