import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  envPrefix: "SUPABASE",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
