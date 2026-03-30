import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // base is '/' for local dev, and your repo name for GitHub Pages production build
  base: '/',
}))