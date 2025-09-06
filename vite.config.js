import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Importujemy moduł 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 2. Dodajemy tę sekcję, aby zdefiniować skrót '@'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})