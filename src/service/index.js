import axios from '../utils/axios'

const fetchArticleList = params => axios.get('/article/list', { params })
const fetchArticleDetail = id => axios.get(`/article/detail/${id}`)

export { fetchArticleList, fetchArticleDetail }



