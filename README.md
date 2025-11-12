# @yourcompany/eslint-config

[![npm version](https://badge.fury.io/js/@yourcompany%2Feslint-config.svg)](https://badge.fury.io/js/@yourcompany%2Feslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Shared ESLint and TypeScript configuration package based on crm-pro standards. This package provides consistent linting rules, code style enforcement, and TypeScript configurations across all company projects.

## 🚀 Features

- **Modern ESLint 9+ Flat Config** - Future-proof configuration format
- **TypeScript Support** - Full TypeScript integration with strict type checking
- **React Optimization** - Specialized rules for React applications
- **Import Sorting** - Automatic import organization and path resolution
- **Code Style** - Consistent formatting with Stylistic plugin
- **Accessibility** - Built-in a11y checks with jsx-a11y
- **Multiple Presets** - Different configurations for various project types

## 📦 Installation
bash
# npm
npm install --save-dev @yourcompany/eslint-config
# yarn
yarn add -D @yourcompany/eslint-config
# pnpm
pnpm add -D @yourcompany/eslint-config



### Peer Dependencies

The following packages are required as peer dependencies:
bash npm install --save-dev eslint@^9.33.0 typescript@^5.8.0


## 🛠 Usage

### ESLint Configuration

#### Modern Flat Config (Recommended)

Create `eslint.config.js` in your project root:



javascript import { createConfig } from '@yourcompany/eslint-config';
export default createConfig({ // Optional configuration project: ['./tsconfig.json'], rootDir: 'src', additionalIgnores: ['vite.config.ts'], customRules: { // Project-specific rule overrides 'no-console': 'off', }, });



#### Legacy Configuration

If you're using legacy ESLint configuration, create `.eslintrc.js`:

javascript module.exports = { extends: ['@yourcompany/eslint-config/legacy'], // Project-specific overrides };



### TypeScript Configuration

#### React Projects (Standard)

json // tsconfig.json { "extends": "@yourcompany/eslint-config/tsconfig/react.json", "compilerOptions": { "baseUrl": "./", "paths": { "@/_": ["src/*"], "components/_": ["src/components/*"], "api/*": ["src/api/*"] } }, "include": ["src"] }




#### Strict Mode (Recommended for new projects)

json // tsconfig.json { "extends": "@yourcompany/eslint-config/tsconfig/strict.json", "compilerOptions": { "baseUrl": "./", "paths": { "@/*": ["src/*"] } }, "include": ["src"] }



#### Production Build Configuration
json // tsconfig.build.json { "extends": "@yourcompany/eslint-config/tsconfig/build.json", "compilerOptions": { "outDir": "./dist", "baseUrl": "./", "paths": { "@/*": ["src/*"] } } }



## 📋 Configuration Options

### `createConfig(options)`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `project` | `string[]` | `['./tsconfig.json']` | TypeScript project files |
| `rootDir` | `string` | `'src'` | Source directory for path resolution |
| `additionalIgnores` | `string[]` | `[]` | Additional files/patterns to ignore |
| `customRules` | `object` | `{}` | Override or add ESLint rules |
| `tsconfigRootDir` | `string` | `process.cwd()` | Root directory for TSConfig resolution |

### Example with all options:
javascript import { createConfig } from '@yourcompany/eslint-config';
export default createConfig({ project: ['./tsconfig.json', './tsconfig.node.json'], rootDir: 'src', tsconfigRootDir: import.meta.dirname, additionalIgnores: [ 'public//*', 'dist//', '.config.js' ], customRules: { 'no-console': 'warn', 'react/prop-types': 'off', '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }] } });




## 🎯 Available Configurations

### TypeScript Presets

| Preset | Description | Use Case |
|--------|-------------|----------|
| `base.json` | Base TypeScript configuration | Foundation for all configs |
| `react.json` | React-optimized settings | React applications |
| `strict.json` | Strict type checking enabled | New projects, high code quality |
| `build.json` | Production build optimization | CI/CD and build processes |
| `node.json` | Node.js server configuration | Backend applications |

### ESLint Rule Categories

#### Core Rules
- **Error Prevention**: Catches common JavaScript/TypeScript pitfalls
- **Best Practices**: Enforces coding best practices
- **Code Style**: Consistent formatting and style
- **Performance**: Rules that improve code performance

#### Plugin Rules
- **@typescript-eslint**: TypeScript-specific rules
- **react**: React component best practices
- **react-hooks**: React hooks rules
- **jsx-a11y**: Accessibility rules
- **import**: Import/export statement rules

## 🔧 Package Scripts

Add these scripts to your `package.json`:
json { "scripts": { "lint": "eslint src/", "lint:fix": "eslint src/ --fix", "type-check": "tsc --noEmit", "build": "tsc -b && vite build" } }



## 📖 Migration Guide

### From Legacy ESLint Config

1. **Update ESLint configuration:**
   ```bash
   # Remove old config file
   rm .eslintrc.js .eslintrc.json

   # Create new flat config
   touch eslint.config.js
   ```

2. **Update configuration:**
   ```javascript
   // Old way (.eslintrc.js)
   module.exports = {
     extends: ['@company/old-config'],
     rules: { /* ... */ }
   };

   // New way (eslint.config.js)
   import { createConfig } from '@yourcompany/eslint-config';
   
   export default createConfig({
     customRules: { /* ... */ }
   });
   ```

### From Individual Plugin Configurations

1. **Remove individual plugins:**
   ```bash
   npm uninstall eslint-plugin-react eslint-plugin-import @typescript-eslint/eslint-plugin
   ```

2. **Install shared config:**
   ```bash
   npm install --save-dev @yourcompany/eslint-config
   ```

## 🎨 Code Style Examples

### Import Organization

The configuration automatically sorts imports in this order:



javascript // External libraries - React ecosystem import React from 'react'; import { useEffect, useState } from 'react'; import { useNavigate } from 'react-router-dom';
// External libraries - Other import axios from 'axios'; import { FormikHelpers } from 'formik'; import moment from 'moment';
// Internal - API import { api } from 'api'; import type { UserData } from 'api/types';
// Internal - Components import { Button } from 'components/Button'; import { Modal } from 'components/Modal';
// Internal - Constants import { ROUTES } from 'constants/routes';
// Internal - Hooks & Context import { useAuth } from 'hooks/useAuth'; import { UserContext } from 'context/UserContext';
// Assets import logo from 'assets/logo.svg';
// Styles import styles from './Component.module.scss';
// Types (last) import type { ComponentProps } from './types';



### Function Component Definition

javascript // ✅ Correct - Arrow function const MyComponent: FC = ({ title, onClick }) => { return {title}; };
// ❌ Incorrect - Function declaration function MyComponent({ title, onClick }: Props) { return {title}; }



### TypeScript Best Practices

typescript // ✅ Correct - Type imports import type { User } from 'api/types'; import type { FC } from 'react';
// ✅ Correct - Explicit return types for complex functions const processUserData = (user: User): ProcessedUser => { return { id: user.id, name: user.name.trim(), }; };
// ✅ Correct - Proper optional property handling interface Props { user?: User | undefined; // Explicit undefined for exactOptionalPropertyTypes }



## 🚨 Common Issues & Solutions

### Issue: `exactOptionalPropertyTypes` Error

**Error:**
Type '{ prop: SomeType | undefined }' is not assignable to type 'Target' with 'exactOptionalPropertyTypes: true'


**Solution:**
typescript // ❌ Problematic interface Target { prop?: SomeType; }
// ✅ Fixed interface Target { prop?: SomeType | undefined; }



### Issue: Import Resolution Errors

**Error:**
Unable to resolve path to module 'components/Button'


**Solution:**
Update your `tsconfig.json` paths:
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "components/*": ["src/components/*"]
    }
  }
}
```


'React' must be in scope when using JSX
{
"extends": "@yourcompany/eslint-config/tsconfig/react.json"
}


## 📚 Rule Categories
### Error Prevention Rules
- `no-await-in-loop` - Prevents performance issues
- `no-promise-executor-return` - Prevents Promise constructor misuse
- `require-atomic-updates` - Prevents race conditions

### Code Quality Rules
- `complexity` - Limits cyclomatic complexity (max: 10)
- `max-depth` - Limits nesting depth (max: 2)
- `max-lines-per-function` - Limits function length (max: 260 lines)
- `max-params` - Limits function parameters (max: 3)

### Style Rules
- `@stylistic/max-len` - Line length limit (130 characters)
- `@stylistic/jsx-max-props-per-line` - JSX props per line (max: 2)
- `@stylistic/quotes` - Enforces single quotes
- `@stylistic/jsx-sort-props` - Sorts JSX props alphabetically

### TypeScript Rules
- `@typescript-eslint/consistent-type-imports` - Enforces type-only imports
- `@typescript-eslint/no-unused-vars` - Removes unused variables
- `@typescript-eslint/no-explicit-any` - Warns about `any` usage

## 🔄 Version History

| Version | Changes |
| --- | --- |
| 1.0.0 | Initial release with ESLint 9 and TypeScript 5 support |
## 📞 Support & Contributing
### Reporting Issues
Please report issues in the main repository with:
- ESLint version
- TypeScript version
- Project type (React, Node.js, etc.)
- Minimal reproduction example

### Contributing
1. Fork the repository
2. Create a feature branch
3. Test your changes against sample projects
4. Submit a pull request

### Development Setup
git clone https://github.com/yourcompany/eslint-config.git
cd eslint-config
npm install
npm run test



## 📄 License
MIT License - see [LICENSE](LICENSE) file for details.
## 🙏 Acknowledgments
Based on configurations from:
- [ESLint](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Stylistic](https://eslint.style/)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)

**Note:** This package is designed for internal company use and follows the coding standards established in the crm-pro project.

