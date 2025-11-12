export const reactRules = {
  'react/button-has-type': 'off',
  'react/display-name': ['warn'],
  'react/forbid-dom-props': ['error', { forbid: ['style'] }],
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: ['function-expression', 'arrow-function'],
    },
  ],
  'react/hook-use-state': 'error',
  'react/jsx-child-element-spacing': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-props-no-spread-multi': 'error',
  'react/jsx-wrap-multilines': ['error', { declaration: 'parens-new-line' }],
  'react/no-danger': 'error',
  'react/no-multi-comp': 'error',
  'react/no-namespace': 'error',
};
