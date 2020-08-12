import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { timestampToString } from '../../utils'
import { fetchArticleList } from '../../service'
import './index.scss'

function ArticleListView () {
  const [articleList, setArticleList] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchArticleList()
        setArticleList(data)
      } catch (errorMessage) {
        alert(errorMessage)
      }
    }
    fetch()
  }, [])

  if (!articleList.length) return null;

  return (
    <>
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
    </>
  )
}

export default ArticleListView
