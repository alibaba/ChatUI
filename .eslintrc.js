module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    // project: './tsconfig.eslint.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    // jest: true,
  },
  plugins: ['compat', 'react-hooks'],
  rules: {
    'compat/compat': 'error',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
  },
  settings: {
    polyfills: ['IntersectionObserver', 'Promise'],
  },
};
