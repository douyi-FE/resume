import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { version } from './package.json'
import bannerPlugins from './plugins/vite-banner-plugins'

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  base: process.env.VITE_BASE || '/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    bannerPlugins(`build by: walker, version: ${version}`),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
