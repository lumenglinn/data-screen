import fetch from '../fetch'
import urlConst from './urlConst' // url路径定义文件

const urlConfig = {
  ...urlConst
}

/**
 * 通用请求方法
 * @param {methodType} 请求方式
 * @param {urlName} 接口名称
 * @param {dataParams} 正常传参
 * @param {urlParam} url参数
 */
/* 通用请求方法 */
export function ajaxRequest(methodType, urlName, dataParams = {}, urlParam) {
  const changeDataParams = {}
  methodType = methodType.toUpperCase()
  if (dataParams.headTerminalCode) {
    Object.assign(changeDataParams, dataParams)
    delete changeDataParams.headTerminalCode
  }
  // const reqUrl = urlConfig[urlName]
  const reqUrl = urlName.indexOf('https') !== -1 ? urlName : urlConfig[urlName]
  // 组装带head的请求参数
  const paramsObj = {
    head: {
      terminalCode: dataParams.headTerminalCode || 'jdh_wechat'
    },
    data: dataParams.headTerminalCode ? changeDataParams : dataParams
  }
  const requestConfig = {
    method: methodType || 'POST',
    url: reqUrl
    // baseURL: '/portal'
  }
  // 根据请求方法标识 自定义其请求头适配不同的接口
  switch (methodType) {
    case 'POST':
    case 'PUT':
    case 'DELETE':
      requestConfig.headers = { 'Content-Type': 'application/json' }
      requestConfig.data = paramsObj
      break
    case 'GET':
      requestConfig.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
      requestConfig.params = paramsObj
      break
    // 上传图片
    case 'UPLOAD':
      requestConfig.headers = { 'Content-Type': 'multipart/form-data', Accept: 'application/json, text/plain' }
      requestConfig.method = 'POST'
      requestConfig.data = dataParams // 图片上传接口不能带head
      break
    // 下载excel zip 协议预览
    case 'DOWNLOAD':
      requestConfig.headers = { 'Content-Type': 'application/json' }
      requestConfig.method = 'POST'
      requestConfig.data = paramsObj
      // 兼容组件库t-upload-file下载图片
      if (reqUrl.indexOf('/get-download-urls') === -1) {
        requestConfig.responseType = 'blob'
      }
      break
    // 下载(文件流形式)
    case 'DOWNLOADBLOB':
      requestConfig.headers = { 'Content-Type': 'application/json' }
      requestConfig.method = 'POST'
      requestConfig.data = paramsObj
      requestConfig.responseType = 'blob'
      break
    // 下载回显图片
    case 'GETIMAGE':
      requestConfig.headers = { 'Content-Type': 'application/json' }
      requestConfig.method = 'POST'
      requestConfig.data = paramsObj
      // requestConfig.responseType = 'blob'
      break
    default:
      requestConfig.headers = { 'Content-Type': 'application/json' }
      requestConfig.method = 'POST'
      requestConfig.data = paramsObj
      break
  }
  return fetch(requestConfig)
}
