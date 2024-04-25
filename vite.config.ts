import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/really-simple-pokedex/',
  publicDir: 'src/assets',
  build: {assetsDir: ''},
  plugins: [react()],
})
