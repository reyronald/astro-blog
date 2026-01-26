// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    expressiveCode({
      styleOverrides: {
        codeFontSize: 'clamp(1rem, 0.75rem + 1.5cqi, 1.5rem)',
        uiFontSize: 'clamp(1rem, 0.75rem + 1.5cqi, 1.5rem)',
      },
    }),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
