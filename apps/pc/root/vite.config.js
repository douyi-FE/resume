import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: path.resolve(__dirname, './'),
  base: 'http://example.com/pc',
  mode: 'development',
  publicDir: path.resolve(__dirname, './statics'),
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '^/proxy': {
        target: 'http://127.0.0.1:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, ''),
      }
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify('v.1.0.1'),
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
})