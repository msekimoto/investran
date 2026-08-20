import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

function copyDocumentationAssets() {
  return {
    name: 'copy-documentation-assets',
    closeBundle() {
      const source = resolve('docs/assets')
      if (existsSync(source)) cpSync(source, resolve('dist/docs/assets'), { recursive: true })
    },
  }
}

export default defineConfig({
  base: '/investran/',
  plugins: [vue(), copyDocumentationAssets()],
})
