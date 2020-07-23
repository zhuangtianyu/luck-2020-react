import React, { useState, useEffect } from 'react'
import { fetchArticleDetail } from '../../service'
import MarkdownPreview from '../../components/markdown-preview'
import './index.scss'


function ArticleDetailView (props) {
  const [articleDetail, setArticleDetail] = useState({})

  const { id } = props.match.params

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchArticleDetail(id)
        setArticleDetail(data)
      } catch (errorMessage) {
        alert(errorMessage)
      }
    }
    fetch()
  }, [id])

  useEffect(() => {
    const documentTitle = document.title
    if (articleDetail.title !== undefined) {
      document.title = articleDetail.title
    }
    return () => {
      document.title = documentTitle
    }
  }, [articleDetail])

  return (
    <>
      <div className="article__detail">
        <MarkdownPreview markdownString={ articleDetail.markdownString || '' } />
      </div>
    </>
  )
}

export default ArticleDetailView







