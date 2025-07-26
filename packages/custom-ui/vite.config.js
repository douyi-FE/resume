import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'CustomUi',
        fileName: 'custom-ui', 
        formats: ['es'],
      },
      rollupOptions: {
        external: ['vue', 'vue-i18n'],
        output: {
          exports: 'named',
          globals: { vue: 'Vue' },
        },
      },
    },
  });