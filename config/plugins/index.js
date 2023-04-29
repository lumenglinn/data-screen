import vue from '@vitejs/plugin-vue'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { AssetCompression } from './compression'
import { ConfigRestartPlugin } from './restart'

export function createVitePlugins() {
  const vitePlugins = [
    vue(),
    AutoRegistryComponents(),
    AutoImportDeps(),
    AssetCompression(),
    ConfigRestartPlugin()
  ]
  return vitePlugins
}
