/* Echarts图表字体、间距自适应  */
export const echartsSize = (size, defalteWidth = 1920) => {
  let clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  if (!clientWidth) return size
  let scale = clientWidth / defalteWidth
  return Number((size * scale).toFixed(3))
}

// 当前是否全屏
export const isFullScreen = () => {
  return !!(
    document.fullscreen ||
    document.mozFullScreen ||
    document.webkitIsFullScreen ||
    document.webkitFullScreen ||
    document.msFullScreen
  );
}

// 全屏
export const fullScreen = () => {
  const de = document.documentElement
  if (de.requestFullscreen) {
    de.requestFullscreen()
  } else if (de.mozRequestFullScreen) {
    de.mozRequestFullScreen()
  } else if (de.webkitRequestFullScreen) {
    de.webkitRequestFullScreen()
  }
}

// 退出全屏
export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

export const handleFullScreen = () => {
  isFullScreen() ? exitFullscreen() : fullScreen()
}

// 关闭
export const closeWindow = () => {
  window.close()
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 简单的深度拷贝
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

// 数字分割
export const numFormat = (number) => {
  let str = number.toString()
  return str.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
}

export const formatDate = (date = new Date()) => {
  const weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  let h = (new Date()).getHours();
  return {
    year: date.getFullYear(),
    month: date.getMonth() <= 8 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    date: date.getDate() <= 8 ? `0${date.getDate() + 1}` : date.getDate() + 1,
    day: weekDay[date.getDay()],
    Tip: h >= 0 && h < 12 ? '上午' : (h >= 12 && h < 18 ? '下午' : '晚上'),
    h: date.getHours(),
    m: date.getMinutes()
  }
}
