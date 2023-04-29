
import Pages from 'vite-plugin-pages'
export const ConfigPagesPlugin = () => {
  return Pages({
    exclude: ['**/components/*.vue'],
    importMode: 'async'
  })
}
