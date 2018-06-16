module.exports = {
  root: true,
  extends: [
    `plugin:vue/recommended`,
    `@avalanche/eslint-config`,
  ],
  rules: {
    'no-console': process.env.NODE_ENV === `production` ? `error` : `warn`,
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `warn`,
  },
  parserOptions: {
    parser: `babel-eslint`,
  },
};
