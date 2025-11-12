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
import { baseRules } from './rules/base-rules';
import { typescriptRules } from './rules/typescript-rules';
import { reactRules } from './rules/react-rules';
import { importRules } from './rules/import-rules';
import { stylisticRules } from './rules/stylistic-rules';
// utils
import { globalIgnores } from './utils/global-ignores';
import { importSortGroups } from './utils/import-sort-groups';

export const createConfig = (options = {}) => {
  const {
    project = ['tsconfig.json'],
    rootDir = 'src',
    additionalIgnores = [],
    customRules = {},
    tsconfigRootDir = process.cwd(),
  } = options;

  return tseslint.config([
    globalIgnores([...globalIgnores, ...additionalIgnores]),
    {
      files: ['**/*.{js,jsx,ts,tsx}'],

      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project,
          tsconfigRootDir,
        },
      },

      plugins: {
        'simple-import-sort': simpleImportSort,
        'no-relative-import-paths': noRelativeImportPaths,
        react,
      },

      linterOptions: {
        reportUnusedDisableDirectives: 'warn',
      },

      extends: [
        // general
        js.configs.recommended,
        tseslint.configs.recommended,
        // imports
        importPlugin.flatConfigs.recommended,
        importPlugin.flatConfigs.typescript,
        // react
        react.configs.flat.recommended,
        react.configs.flat['jsx-runtime'],
        reactHooks.configs['recommended-latest'],
        // a11y
        jsxA11y.flatConfigs.recommended,
        // vite
        reactRefresh.configs.vite,
        // code style
        stylistic.configs['disable-legacy'],
        stylistic.configs.customize({
          indent: 2,
          quotes: 'single',
          semi: true,
          jsx: true,
          commaDangle: 'always-multiline',
        }),
      ],

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
        ...baseRules,
        ...typescriptRules,
        ...reactRules,
        ...importRules(rootDir),
        ...stylisticRules,
        'simple-import-sort/imports': ['warn', { groups: importSortGroups }],
        ...customRules,
      },
    },
  ]);
};

export default createConfig();

// Export TSConfig utilities
export const getTSConfigPath = (configType = 'react') => {
  return `@yourcompany/eslint-config/tsconfig/${configType}.json`;
};
