module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended", // Uses the recommended rules from @eslint-plugin-react-hooks
    "plugin:jsx-a11y/recommended", // Uses the recommended rules from @eslint-plugin-jsx-a11y
    "plugin:import/recommended", // Uses the recommended rules from @eslint-plugin-import
    'airbnb',
    "prettier"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react',  "jsx-a11y", 'testing-library'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
