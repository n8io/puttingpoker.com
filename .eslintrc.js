module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:ramda/recommended',
    'prettier',
    'plugin:cypress/recommended',
  ],
  globals: {
    td: true,
  },
  overrides: [
    {
      env: { jest: true },
      files: ['src/**/?(*.)(spec|test).js'],
      rules: {
        'func-names': 'off',
        'jest/consistent-test-it': 'warn',
        'jest/expect-expect': [
          'warn',
          { assertFunctionNames: ['cy.*', 'expect', 'td.verify'] },
        ],
        'jest/lowercase-name': ['warn', { ignore: ['describe'] }],
        'jest/no-empty-title': 'error',
        'jest/no-focused-tests': 'warn',
        'jest/no-large-snapshots': 'warn',
        'jest/no-test-callback': 'warn',
        'jest/no-test-return-statement': 'warn',
        'jest/no-truthy-falsy': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-todo': 'warn',
        'jest/require-tothrow-message': 'warn',
        'max-nested-callbacks': 'off',
        'max-statements': 'off',
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['eslint-comments', 'import', 'import-helpers', 'jest', 'ramda'],
  root: true,
  rules: {
    'accessor-pairs': 'warn',
    'array-callback-return': 'warn',
    'block-scoped-var': 'warn',
    'callback-return': 'warn',
    camelcase: 'warn',
    complexity: ['warn', 5],
    'consistent-return': 'warn',
    'consistent-this': ['warn', 'self'],
    'default-case': 'warn',
    'dot-notation': 'warn',
    eqeqeq: ['warn', 'smart'],
    'func-name-matching': 'warn',
    'func-names': 'warn',
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'global-require': 'warn',
    'guard-for-in': 'warn',
    'handle-callback-err': 'warn',
    'import/dynamic-import-chunkname': 'warn',
    'import/extensions': ['warn', 'never', { scss: 'always' }],
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'warn',
    'import/no-amd': 'warn',
    'import/no-cycle': 'warn',
    'import/no-deprecated': 'warn',
    'import/no-dynamic-require': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-mutable-exports': 'warn',
    'import/no-named-default': 'warn',
    'import/no-self-import': 'warn',
    'import/no-unused-modules': 'warn',
    'import/no-useless-path-segments': 'warn',
    'import/no-webpack-loader-syntax': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        groups: ['module', '/^modules/', 'parent', ['sibling', 'index']],
        newlinesBetween: 'never',
      },
    ],
    'init-declarations': 'warn',
    'jest/expect-expect': [
      'warn',
      { assertFunctionNames: ['cy.*', 'expect', 'td.verify'] },
    ],
    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-depth': 'warn',
    'max-nested-callbacks': ['warn', 4],
    'max-params': ['warn', 4],
    'max-statements': 'warn',
    'new-cap': 'warn',
    'no-alert': 'warn',
    'no-array-constructor': 'warn',
    'no-async-promise-executor': 'warn',
    'no-await-in-loop': 'warn',
    'no-bitwise': 'warn',
    'no-buffer-constructor': 'warn',
    'no-caller': 'warn',
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-continue': 'warn',
    'no-debugger': 'warn',
    'no-div-regex': 'warn',
    'no-duplicate-imports': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'warn',
    'no-implied-eval': 'warn',
    'no-inner-declarations': ['warn', 'both'],
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-misleading-character-class': 'warn',
    'no-mixed-requires': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-require': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'warn',
    'no-path-concat': 'warn',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'warn',
    'no-prototype-builtins': 'warn',
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sync': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'warn',
    'no-undef-init': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-use-before-define': ['warn', 'nofunc'],
    'no-useless-call': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'warn',
    'no-void': 'warn',
    'no-warning-comments': 'warn',
    'no-with': 'warn',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'operator-assignment': ['warn', 'always'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
      { blankLine: 'always', next: '*', prev: 'directive' },
      { blankLine: 'any', next: 'directive', prev: 'directive' },
    ],
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-named-capture-group': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'react/display-name': 'off',
    'require-atomic-updates': 'warn',
    'require-await': 'warn',
    'require-unicode-regexp': 'warn',
    'sort-keys': ['warn', 'asc', { natural: true }],
    'sort-vars': 'warn',
    'spaced-comment': 'warn',
    strict: ['warn', 'never'],
    'symbol-description': 'warn',
    'vars-on-top': 'warn',
    yoda: 'warn',
  },
  settings: {
    'import/ignore': ['node_modules', '.(scss|sass|less|css|png|jpg|svg)$'],
  },
};