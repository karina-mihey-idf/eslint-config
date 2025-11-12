export const stylisticRules = {
  // Stylistic rules from your config
  '@stylistic/array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
  '@stylistic/array-element-newline': ['error', 'consistent', { multiline: true, minItems: 3 }],
  '@stylistic/arrow-parens': ['error', 'always'],
  '@stylistic/curly-newline': ['error', { minElements: 1 }],
  '@stylistic/function-call-argument-newline': ['error', 'never'],
  '@stylistic/indent-binary-ops': ['error', 2],
  '@stylistic/jsx-max-props-per-line': ['error', { maximum: 2 }],
  '@stylistic/no-multi-spaces': 'error',
  '@stylistic/jsx-sort-props': ['error', { reservedFirst: true }],
  '@stylistic/max-len': [
    'error',
    {
      code: 130,
      ignoreStrings: true,
      ignoreComments: true,
    },
  ],
  '@stylistic/nonblock-statement-body-position': ['error', 'below'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  '@stylistic/operator-linebreak': ['error', 'before'],
  '@stylistic/padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: 'if', next: '*' },
    {
      blankLine: 'always',
      prev: ['const', 'let'],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['const', 'let'],
      next: ['const', 'let'],
    },
    { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    { blankLine: 'always', prev: ['export'], next: '*' },
  ],
  '@stylistic/quote-props': ['error', 'as-needed'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/wrap-regex': 'error',
  '@stylistic/brace-style': ['error', '1tbs'],
};
