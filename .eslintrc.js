module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-unresolved': 0,
    'consistent-return': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/media-has-caption': 0,
  },
};
