import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed at the domain root (Vercel). The SSR build is only used by scripts/prerender.mjs.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  build: { copyPublicDir: !isSsrBuild },
}))
