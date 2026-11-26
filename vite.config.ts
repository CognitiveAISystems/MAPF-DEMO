import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        warehouse: resolve(import.meta.dirname, 'DMM/index.html'),
        maze: resolve(import.meta.dirname, 'DMM/maze.html'),
        epibt: resolve(import.meta.dirname, 'EPIBT/index.html'),
      },
    },
  },
});
