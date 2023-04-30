import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { createVitePlugins } from './config/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 检查process.cwd()路径下.env.dev、.env.build、.env.prod环境文件
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
          // 避免出现：build时的@charset必须在第一行的警告
          charset: false,
          // 全局使用src/assets/css/variables.scss定义的变量
          // additionalData: `
          // @import "~/css/mixin.scss";
          // @import "~/css/variables.scss";
          // `
        }
      }
    },
    plugins: createVitePlugins(),
    build: {
      sourcemap: !isProd,
      outDir: 'dist',
      cssCodeSplit: false, // 禁用css代码拆分，整个项目中的所有css将被提取到一个css文件中
      brotliSize: false, // 关闭打包计算
      target: 'esnext',
      minify: 'terser', // 混淆器，esbuild比terser快20-40倍
      assetsInlineLimit: 4096, // 小于此阀值的导入或引用资源将内联为base64编码，以避免额外的http请求。设置为0可禁用
      assetsDir: 'assets', // 静态资源目录
      // rollup打包配置
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      },
      // 压缩配置
      terserOptions: {
        compress: {
          drop_console: isProd, // 生产环境移除console
          drop_debugger: true // 生产环境移除debugger
        }
      }
    }
  }
})
