import js from '@eslint/js'
import ts from 'typescript-eslint'

import eslintPluginAstro from 'eslint-plugin-astro'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  js.configs.recommended,

  ...ts.configs.recommended,
  ...eslintPluginAstro.configs.recommended,

  ...tailwind.configs['flat/recommended'],

  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
