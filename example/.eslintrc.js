module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', '@react-native-community'],
  plugins: ['@typescript-eslint'],
  rules: {
    'sort-imports': 0, // sorts imports alphabetically but does not auto fix. disabled as import order may matter for some modules
    'no-unused-vars': 0, // disabled in favor of typescript rule @typescript-eslint/no-unused-vars
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}], // only allow jsx in .jsx and .tsx files
    'no-underscore-dangle': 0, // disabled as it may sometimes be necessary to use _ to denote scoped variabled
    'no-extra-semi': 0, // allow extra semicolon at the end of a statement
    semi: 0, // allow extra semicolon at the end of a statement
    'no-use-before-define': 0, // disabled as we declare styles after component declaration
    'no-console': 'warn', // flag console logs so they are easier to find and remove when pushing to production
    'react-native/no-color-literals': 0, // allow inline color
    'import/named': 0, // disabled due to conflicts with dependencies
    'import/namespace': 0, // disabled due to conflicts with dependencies
    'import/no-namespace': 0, // disabled due to conflicts with dependencies
    'import/default': 0, // disabled due to conflicts with dependencies
    'import/no-named-as-default': 0, // disabled due to conflicts with dependencies
    'import/no-named-as-default-member': 0, // disabled due to conflicts with dependencies
    'import/extensions': 0, // disabled due to conflicts with dependencies
    '@typescript-eslint/no-use-before-define': 0, // disabled as we declare styles after component declaration
    '@typescript-eslint/interface-name-prefix': 0, // adhere to c++/java conventions
    '@typescript-eslint/explicit-function-return-type': 0, // disabled as it makes mapDispatchToProps definitions unnecessarily complex
    '@typescript-eslint/explicit-member-accessibility': 0, // disabled as data types used in the app do not require this abstraction
    'react/display-name': 0, // unnecessary for react-native applications
    'react/jsx-curly-brace-presence': 0, // should have curly braces around string props
    'react/require-default-props': 0, // disabled as it is handled by typescript
    'react-hooks/exhaustive-deps': 0, // disabled as there are cases where you don't require exhaustive deps
    'no-nested-ternary': 'error', // enabled as nested ternary operators are can be hard to read and debug
    'no-invalid-this': 0, // disabled as it interferes with this.setState calls
    'class-methods-use-this': 0, // interferes with class component function usage
    'import/no-commonjs': 0, // interferes with asset imports
    'react-native/no-unused-styles': 'error', // assist with cleaning up unused styles
    'getter-return': 0, // legacy code uses getters. Remove this rule if code is refactored
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}], // conflicts with storybook addons
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    'no-await-in-loop': 'warn',
    'no-loop-func': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['ret'],
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
        },
      },
    ],
    'no-restricted-syntax': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    // using node --use_strict
    strict: ['error', 'safe'],
    'require-await': 'error',
    // parentheses around argument list as-needed for arrow function parameters
    'arrow-parens': 'off',
    // Turn off to visually group imports with usage by newlines
    'import/newline-after-import': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'arrow-body-style': ['error', 'as-needed'],
    'quote-props': ['warn', 'consistent-as-needed'],
    'comma-dangle': ['error', 'only-multiline'],
    // regex
    'prefer-named-capture-group': 'warn',
    'no-useless-escape': 'off',
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],
    'new-cap': 'off',
    'max-depth': [
      'error',
      {
        max: 4,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
      },
    ],
    'react-native/no-undefined-styles': 0, // need to conditionally render styles
  },
  env: {
    es6: true,
    jest: true,
  },
  globals: {
    window: true,
    fetch: false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
