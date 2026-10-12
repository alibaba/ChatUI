/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error no types available
import pxtorem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          propList: ['*', '!border*', '!box-shadow'],
          // selectorBlackList: [':root'],
          minPixelValue: 2,
        }),
      ],
    },
  },
  build: {
    outDir: '../dist/demo',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
