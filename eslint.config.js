import tsParser from '@typescript-eslint/parser';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.base.json', // 这里引用 tsconfig
      },
    },
    plugins: {
      '@typescript-eslint': typeScriptPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...pluginPrettier.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'warn',
      'prettier/prettier': [
        'error',
        {
          usePrettierrc: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
  eslintConfigPrettier,
];
