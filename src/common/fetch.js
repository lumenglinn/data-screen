import axios from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'
const BASE_URL = '/gateway-api'

const instance = axios.create({
  withCredentials: false,
  baseURL: BASE_URL, // 基本url
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// axios请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 每个接口新增时间戳
    const timestamp = new Date().getTime()
    if (config.url && config.url.includes('?')) {
      config.url = `${config.url}&t=${timestamp}`
    } else {
      config.url = `${config.url}?t=${timestamp}`
    }
    // stringify POST方式提交的数据 上传接口的数据不能进行qs.stringfly
    if (config.method === 'post' && config.headers['Content-Type'] !== 'application/json') {
      config.data.data = !(config.data.data instanceof FormData) ? qs.stringify(config.data.data) : config.data.data
    }
    // get请求也需要qs.stringify转化一下
    if (config.method === 'get') {
      config.paramsSerializer = function (parmas) {
        return qs.stringify(parmas, { arrayFormat: 'repeat' })
      }
    }
    // 前期国际语言固定显示中文
    config.headers.lang = 'zh_CN'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// axios响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 全局取消loading
    // if (typeof response.config.data === 'string' && !JSON.parse(response.config.data).data.hideLoading) {
    //   endLoading()
    // }
    const type = response.request.responseType || ''
    // 下载类型特殊处理文件名
    if (type.includes('blob')) {
      const disposition = response.headers['content-disposition']
      let filename = '' // 下载错误用假文件代替
      if (disposition && disposition.indexOf('filename=') !== -1) {
        filename = decodeURI(disposition.substring(disposition.indexOf('filename=') + 9, disposition.length))
      }
      response.data.filename = filename
    }
    // 业务返回数据报错全局拦截
    // if (isObject(response.data) && response.data.head && response.data.head.resCode !== '000000') {
    //   if (!JSON.parse(response.config.data).data.isHandlingErr) {
    //     Notify({
    //       message: response.data.head.resMsg || response.data.head.msg || '服务异常'
    //     })
    //   }
    //   // 返回错误信息
    //   return response.data
    // }
    // 正常数据返回data
    return response.data
  },
  (error) => {
    console.log('error', error)
    // // 解决fetch中js中断报错没有日志
    // endLoading()
    switch (error.response && error.response.status) {
      case 400:
        error.message = '请求错误(400)'
        break
      case 401:
        error.message = '登录信息已过期，请重新登录' // (401)
        break
      case 403:
        error.message = '拒绝访问(403)'
        break
      case 404:
        error.message = '请求出错(404)'
        break
      case 408:
        error.message = '请求超时(408)'
        break
      case 500:
        error.message = '服务器错误(500)'
        break
      case 501:
        error.message = '服务未实现(501)'
        break
      case 502:
        error.message = '网络错误(502)'
        break
      case 503:
        error.message = '服务不可用(503)'
        break
      case 504:
        error.message = '网络超时(504)'
        break
      case 505:
        error.message = 'HTTP版本不受支持(505)'
        break
    }
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
      error.message = '网络异常'
    }
    if (error.response && error.response.status !== 401) {
      ElMessage.error(error.message)
    }
    return error
  }
)
export default instance
