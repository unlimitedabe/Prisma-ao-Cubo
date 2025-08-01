import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true, // permite conexões externas
    allowedHosts: ['57c089d2cfa8.ngrok-free.app'] // <-- adicione seu host aqui
  }
})
