module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  extends: [
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['compat'],
  rules: {
    'compat/compat': 'error',
    'import/prefer-default-export': 'off',
    // 'no-underscore-dangle': 'off',
    // 'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    // 'react/no-array-index-key': 'off',
    // 'react/require-default-props': 'off',
    'react/prop-types': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'jsx-a11y/label-has-for': 'off',
  },
  settings: {
    polyfills: ['IntersectionObserver', 'Promise'],
  },
};
