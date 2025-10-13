import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path" // <-- INI YANG PENTING DITAMBAHKAN

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // TAMBAHKAN BLOK DI BAWAH INI UNTUK MEMPERBAIKI ERROR PATH ALIAS
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})