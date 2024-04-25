module.exports = {
  root: true,
  extends: ['universe/native', 'plugin:prettier/recommended'],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['warn', { singleQuote: true }],
  },
};
