import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig): void {
  const { method = 'GET', url, data = null, headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  // 下面处理headers
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLocaleLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
