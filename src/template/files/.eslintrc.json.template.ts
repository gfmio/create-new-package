import * as formatters from '../../utils/formatters';
import trimAndAddFinalNewline from '../../utils/trimAndAddFinalNewline';

const eslintConfigTemplate = trimAndAddFinalNewline(
  formatters.json({
    plugins: ['@typescript-eslint', 'eslint-comments', 'mocha', 'promise', 'unicorn'],
    extends: [
      'eslint:recommended',
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:eslint-comments/recommended',
      'plugin:mocha/recommended',
      'plugin:promise/recommended',
      'plugin:unicorn/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    settings: {
      react: {
        version: 'latest',
      },
    },
    env: {
      node: true,
      browser: true,
      mocha: true,
    },
    parserOptions: {
      project: 'tsconfig.json',
      createDefaultProgram: true,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true, typedefs: true },
      ],
      'react/destructuring-assignment': 'off',
      'react/jsx-filename-extension': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  }),
);

export default eslintConfigTemplate;
