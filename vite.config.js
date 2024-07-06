import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {ghPages} from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/acne-severity/',
  plugins: [react(), ghPages],
  server:{
    port:3000
  },
  build:{
    outDir:'dist'
  }
})
