import axios from '../utils/axios'

const fetchArticleList = params => axios.get('/article/list', { params })
const fetchArticleDetail = id => axios.get(`/article/detail/${id}`)

const checkEditPermission = params => axios.post('/article/edit/permission', params)
const submitArticle = params => axios.post('/article/edit/submit', params)

export { fetchArticleList, fetchArticleDetail, checkEditPermission, submitArticle }


