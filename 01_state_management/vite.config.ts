import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'

import tanstackRouter from '@tanstack/router-plugin/vite'
import type { PluginOption } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }) as unknown as PluginOption,
    viteReact() as unknown as PluginOption,
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
