// libraries
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
// rules
import { baseRules } from './rules/base-rules.js';
import { typescriptRules } from './rules/typescript-rules.js';
import { reactRules } from './rules/react-rules.js';
import { importRules } from './rules/import-rules.js';
import { stylisticRules } from './rules/stylistic-rules.js';
// utils
import { globalIgnores } from './utils/global-ignores.js';
import { importSortGroups } from './utils/import-sort-groups.js';

const defaultIgnores = [
  'dist',
  'build',
  'node_modules',
  'eslint.config.js',
  'vite.config.ts',
  '*.min.js',
  'coverage',
  '.next',
  '.nuxt',
  '.output',
  '.vercel',
];

export const createConfig = (options = {}) => {
  const {
    project = ['./tsconfig.json'],
    rootDir = 'src',
    additionalIgnores = [],
    customRules = {},
    tsconfigRootDir = process.cwd(),
  } = options;

  return [
    // Global ignores
    {
      ignores: [...defaultIgnores, ...additionalIgnores],
    },
    // Main configuration
    {
      files: ['**/*.{js,jsx,ts,tsx}'],

      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project,
          tsconfigRootDir,
        },
      },

      // Plugins must be objects in flat config
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        'react': react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        'jsx-a11y': jsxA11y,
        'import': importPlugin,
        '@stylistic': stylistic,
        'simple-import-sort': simpleImportSort,
        'no-relative-import-paths': noRelativeImportPaths,
      },

      linterOptions: {
        reportUnusedDisableDirectives: 'warn',
      },

      settings: {
        'import/resolver': {
          node: {
            paths: rootDir,
          },
          typescript: {
            project,
          },
        },
        react: {
          version: 'detect',
        },
      },

      rules: {
        // Base JavaScript rules
        ...js.configs.recommended.rules,

        // TypeScript rules
        ...tseslint.configs.recommended[0].rules,
        ...tseslint.configs.recommended[1].rules,

        // Import plugin rules
        ...importPlugin.flatConfigs.recommended.rules,
        ...importPlugin.flatConfigs.typescript.rules,

        // React rules
        ...react.configs.flat.recommended.rules,
        ...react.configs.flat['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,

        // A11y rules
        ...jsxA11y.flatConfigs.recommended.rules,

        // React Refresh rules
        ...reactRefresh.configs.vite.rules,

        // Stylistic rules
        ...stylistic.configs.customize({
          indent: 2,
          quotes: 'single',
          semi: true,
          jsx: true,
          commaDangle: 'always-multiline',
        }).rules,

        // Custom rule sets
        ...baseRules,
        ...typescriptRules,
        ...reactRules,
        ...importRules(rootDir),
        ...stylisticRules,

        // Import sorting
        'simple-import-sort/imports': ['warn', { groups: importSortGroups }],
        'simple-import-sort/exports': 'warn',

        // Custom overrides
        ...customRules,
      },
    },
  ];
};

export default createConfig();
