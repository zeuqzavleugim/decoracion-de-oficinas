import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
          '@assets': '/resources/assets',
        },
      },
    build: {
        rollupOptions: {
            input: {
                main: 'resources/js/app.jsx',
                favicon16: 'resources/assets/img/general/favicon-16x16.png',
                favicon32: 'resources/assets/img/general/favicon-32x32.png',
                favicon: 'resources/assets/img/general/Magicpop-ico.ico',
            },
        },
        manifest: true,
        outDir: 'public/build',
    },
});
