import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // ensure the dev server listens on localhost and uses the expected port
    host: true,
    port: 5173,
    // HMR websocket client settings - force client to connect to the same port
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    }
  },
})
