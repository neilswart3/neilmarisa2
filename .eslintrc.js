const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'jest', 'react', '@typescript-eslint'],
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'class-methods-use-this': 0,
    'lines-between-class-members': 0,
    'consistent-return': 1,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 1,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'no-undef': 1,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/self-closing-comp': 1,
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'after-props',
        selfClosing: 'tag-aligned',
      },
    ],
    'react/prefer-stateless-function': [
      1,
      {
        ignorePureComponents: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 1,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'no-useless-constructor': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-useless-constructor': 0,
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['constructors'] },
    ],
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
