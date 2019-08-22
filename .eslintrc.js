module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    "jsx": true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype',
    'jsx-a11y',
  ],
  rules: {
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": "always",
        "ImportDeclaration": "always",
        "ExportDeclaration": "always",
      }
    ],
    "no-console": 1,
    "react/prefer-stateless-function": [
      0
    ],
    "react/state-in-constructor": [0],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "react/destructuring-assignment": [0],
    "react/jsx-indent": [0]
  },
};
