export const importRules = (rootDir = 'src') => ({
  'import/extensions': [
    'error',
    {
      ignorePackages: true,
      pattern: {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        scss: 'never',
      },
    },
  ],
  'import/no-empty-named-blocks': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: true, optionalDependencies: false, peerDependencies: true },
  ],
  'import/no-cycle': ['off', { maxDepth: 1 }],
  'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$', 'legoland-frontend'] }],
  'import/no-anonymous-default-export': [
    'error',
    {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true,
      allowNew: false,
      allowLiteral: false,
      allowObject: true,
    },
  ],
  'import/no-named-default': 'error',
  'import/prefer-default-export': 'off',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'no-relative-import-paths/no-relative-import-paths': ['error', { rootDir }],
  'simple-import-sort/exports': 'warn',
});
