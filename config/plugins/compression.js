import compressPlugin from 'vite-plugin-compression'

export const AssetCompression = () => {
  return compressPlugin({
    ext: '.gz',
    algorithm: 'gzip',
    threshold: 10240,
    deleteOriginFile: false
  })
}
