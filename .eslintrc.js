module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true
    },
    extends: [
      'airbnb-base',
      'prettier',
      'plugin:prettier/recommended'
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: [
          '.eslintrc.{js,cjs}',
        ],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-underscore-dangle": ["error", {"allow": ["foo_", "_toFixedWithoutZeros"]}],
      "class-methods-use-this": ["error", { "exceptMethods": ["_toFixedWithoutZeros"] }],
      "max-classes-per-file": ["error", 5],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
    plugins: ['prettier'],
  };