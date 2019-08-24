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
        "error", 2
    ],
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "react/destructuring-assignment": [0],
    "react/jsx-indent": [0],
    "react/no-array-index-key": [0],
    "class-methods-use-this": 0,
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/no-noninteractive-element-interactions": [0]
  },
  "globals": {
    "jest": true,
    "expect": true,
    "describe": true,
    "it": true,
  }
};
