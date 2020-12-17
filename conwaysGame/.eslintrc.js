module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    it: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: 0,
    camelcase: 0
  }
};
