import axios from 'axios'
import Loading from '../components/loading'

const { protocol } = window.location

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:1995'
    : `${protocol}//www.zhuangtianyu.com`,
  timeout: 60000
})

instance.interceptors.request.use(config => {
  Loading.show()
  return config
}, error => {
  Loading.hide()
  return Promise.reject(error.message)
})

instance.interceptors.response.use(({ data: response }) => {
  Loading.hide()
  const { status, data, message } = response
  return status !== true
    ? Promise.reject(message)
    : data
}, error => {
  Loading.hide()
  return Promise.reject(error.message)
})

export default instance
