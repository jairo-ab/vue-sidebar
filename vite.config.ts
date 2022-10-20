import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { join, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
      customElement: ['iconify-icon']
    }),
    UnoCSS(),
    Components({
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      'iconify-icon': resolve(__dirname, 'node_modules/iconify-icon/dist/iconify-icon.mjs'),
    },
  },
})
