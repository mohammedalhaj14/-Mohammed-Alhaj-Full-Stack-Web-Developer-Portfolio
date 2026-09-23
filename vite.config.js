import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying on Vercel, which serves from the domain root — no base path needed.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
