import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'index.ts',
            name: 'shared',
            fileName: (format) => `shared.js`,
            formats: ['es'],
        },
        rollupOptions: {
            output: {
                exports: 'named',
            },
        },
    },
});