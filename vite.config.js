import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // permite conexões externas
    allowedHosts: ['81e998e34c7d.ngrok-free.app'] // <-- adicione seu host aqui
  }
})
