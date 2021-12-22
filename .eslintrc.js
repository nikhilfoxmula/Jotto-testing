module.exports = {
  env: {
    browser: true,
    es2021: true,
    node:1
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: [2, "double", { "avoidEscape": true }],
  },
  
};
