module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px',
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 6,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['pxwrap'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [],
      landscape: false
    }
  }
}
