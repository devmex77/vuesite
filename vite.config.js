import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    // Middleware para quitar la cabecera X-Frame-Options
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        res.removeHeader('X-Frame-Options')
        // Opcional: agregar Content-Security-Policy permisiva
        res.setHeader('Content-Security-Policy', "frame-ancestors 'self' http://localhost:5173")
        next()
      })
    }
  }
})
