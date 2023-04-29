import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export const AutoRegistryComponents = () => {
  return Components({
    resolvers: [VantResolver({ importStyle: false, resolveIcons: true })],
    extensions: ['vue'],
    deep: true,
    directoryAsNamespace: false,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
  })
}