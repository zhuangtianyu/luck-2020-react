import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:1995/luck'
    : 'http://www.zhuangtianyu.com:1995/luck',
  timeout: 60000
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error.message)
})

instance.interceptors.response.use(({ data: response }) => {
  const { status, data, message } = response
  return status !== true
    ? Promise.reject(message)
    : data
}, error => {
  return Promise.reject(error.message)
})

export default instance
