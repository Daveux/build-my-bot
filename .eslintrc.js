module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'linebreak-style': 0,
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'development' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
