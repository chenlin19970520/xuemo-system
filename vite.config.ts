import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(__dirname, "src")
    }
  },
  server: {
    host: "localhost",
    open: true,
    port: 5173,
    proxy: {
      "^/api/v1/": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, "")
      }
    }
  }
})
