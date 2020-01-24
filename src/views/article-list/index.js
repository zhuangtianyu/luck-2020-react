import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { timestampToString } from '../../utils'
import { fetchArticleList } from '../../service'
import { Spin, message } from 'antd'
import './index.scss'

message.config({ top: 200 })

function ArticleListView () {
  const [articleList, setArticleList] = useState([])

  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    const fetch = async () => {
      try {
        const data = await fetchArticleList()
        setArticleList(data)
        setFetching(false)
      } catch (errorMessage) {
        message.error(errorMessage)
        setFetching(false)
      }
    }
    fetch()
  }, [])

  return (
    <Spin spinning={ fetching }>
      <div className="article__list">
        {
          articleList.map(item => (
            <Link
              to={ `/home/article/detail/${item.id}` }
              key={ item.id }
            >
              <div className="article__item">
                <h3 className="article__item__title">{ item.title }</h3>
                <div className="article__item__description">
                  <div className="article__item__author">{ item.author }</div>
                  <div className="article__item__timestamp">
                    { timestampToString(item.timestamp, 'yyyy-MM-dd hh:mm:ss') }
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </Spin>
  )
}

export default ArticleListView



