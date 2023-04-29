import ViteRestart from 'vite-plugin-restart'
export const ConfigRestartPlugin = () => {
  return ViteRestart({
    restart: ['*/config.js', '**/config/*.js']
  })
}
