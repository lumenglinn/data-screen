import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { createVitePlugins } from './config/plugins'

export default defineConfig(({ mode }) => {
  const { VITE_ENV } = loadEnv(mode, process.cwd())
  const isProd = VITE_ENV === 'production'
  return {
    base: '/',
    server: {
      host: '0.0.0.0',
      port: 3000,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: {
        '/gateway-api': {
          target: '',
          auth: false,
          changeOrigin: true,
          ws: false
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@c': resolve(__dirname, 'src/components'),
        '~': resolve(__dirname, 'src/assets')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `
          @import "src/assets/css/mixins.scss";
          `
        }
      }
    },
    plugins: createVitePlugins(),
    build: {
      sourcemap: !isProd,
      outDir: 'dist',
      cssCodeSplit: false,
      brotliSize: false,
      target: 'esnext',
      minify: 'terser',
      assetsInlineLimit: 4096,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      },
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: true
        }
      }
    }
  }
})
