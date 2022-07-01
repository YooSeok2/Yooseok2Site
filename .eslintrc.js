module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'object-curly-newline': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'max-depth': [2, 3],
    'max-len': [1, 120],
    'max-lines-per-function': [1, { max: 150 }],
    'max-params': [1, { max: 4 }],
    'comma-style': [2, 'last'],
    'comma-spacing': [2, { before: false, after: true }],
    'arrow-spacing': [2, { before: true, after: true }],
    'keyword-spacing': [2, { before: true, after: true }],
  },
};
