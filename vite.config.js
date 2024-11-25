// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: [
        "./index.html",
        "./lit/index.html"
      ],
    },
  },
})
