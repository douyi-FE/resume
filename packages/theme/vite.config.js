// packages/common-theme/vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'CommonTheme',
      fileName: (format) => {
        if (format === 'es') {
          return 'theme.js';
        }
        return 'theme.js';
      },
      formats: ['es']
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.ts'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});