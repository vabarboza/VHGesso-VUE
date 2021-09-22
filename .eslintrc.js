module.exports = {
  "root": true,
  "globals": {
    "$": true,
    "jquery": true
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "no-unused-vars": "off"
  }
}
