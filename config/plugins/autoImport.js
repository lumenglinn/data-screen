import AutoImport from 'unplugin-auto-import/vite'
// import { VantResolver } from 'unplugin-vue-components/dist/resolvers'

export const AutoImportDeps = () => {
  return AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/ // .md
    ],
    imports: [
      'vue',
      'vue-router',
      {
        pinia: [
          'storeToRefs' // import { storeToRefs } from 'pinia'
          // [ 'storeToRefs', 'ttoRfs' ],  // import { storeToRefs as ttoRfs } from 'pinia'
        ]
      }
    ],
    eslintrc: {
      enabled: true,
      filepath: '././.eslintrc-auto-import.json',
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  })
}
