import axios from '../utils/axios'

const fetchArticleList = params => axios.get('/api/article/list', { params })
const fetchArticleDetail = id => axios.get(`/api/article/detail/${id}`)

const checkEditPermission = params => axios.post('/api/article/edit/permission', params)
const submitArticle = params => axios.post('/api/article/edit/submit', params)

const deleteArticle = params => axios.delete('/api/article/delete', { data: params })

export {
  fetchArticleList,
  fetchArticleDetail,
  checkEditPermission,
  submitArticle,
  deleteArticle
}
