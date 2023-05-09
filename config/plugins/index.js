import vue from '@vitejs/plugin-vue'
import { AutoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'
import { AssetCompression } from './compression'
import { ConfigRestartPlugin } from './restart'
import { vitePluginMars3d } from "vite-plugin-mars3d"

export function createVitePlugins() {
  const vitePlugins = [
    vue(),
    vitePluginMars3d(),
    AutoRegistryComponents(),
    AutoImportDeps(),
    AssetCompression(),
    ConfigRestartPlugin()
  ]
  return vitePlugins
}
