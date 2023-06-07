import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifestConfig from './manifest.config'
import zipPack from 'vite-plugin-zip-pack'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        increment: 'src/pages/increment/index.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    crx({ manifest: manifestConfig }),
    zipPack({
      inDir: 'dist',
      outDir: 'artifacts',
      outFileName: 'rookierep-ai.zip',
    }),
  ],
})
