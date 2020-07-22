import React, { useState, useEffect } from 'react'
import ArticleEditTextarea from './components/article-edit-textarea'
import MarkdownPreview from '../../components/markdown-preview'
import Modal from '../../components/modal'
import Input from '../../components/input'
import { checkEditPermission, submitArticle, fetchArticleDetail } from '../../service'
import './index.scss'

function ArticleEditView (props) {
  const [password, setPassword] = useState(undefined)
  const [uncertainPassword, setUncertainPassword] = useState(undefined)
  const [markdownString, setMarkdownString] = useState('')
  const [id, setId] = useState(undefined)
  const [articleDetail, setArticleDetail] = useState({})

  const permissionCancel = () => {
    props.history.push('/home/article/list')
  }

  const permissionPassed = password => setPassword(password)

  const textareaChange = markdownString => setMarkdownString(markdownString)

  const textareaSubmit = ({ markdownString, title, author }) => {
    password === undefined
      ? alert('编辑权限校验--不通过')
      : submit({ markdownString, title, author, password, id })
  }

  const submit = async (params) => {
    try {
      const { id } = await submitArticle(params)
      props.history.push(`/home/article/detail/${id}`)
    }
    catch (errorMessage) {
      alert(errorMessage)
    }
  }

  useEffect(() => {
    const nodeList = Array.from(document.querySelectorAll('.container'))
    nodeList.forEach(node => {
      const { maxWidth } = node.style
      Object.assign(node, { maxWidth })
      Object.assign(node.style, { maxWidth: 'none' })
    })
    return () => {
      nodeList.forEach(node => {
        const { maxWidth } = node
        Object.assign(node.style, { maxWidth })
      })
    }
  }, [])

  useEffect(() => {
    const { id } = props.match.params
    id !== undefined && setId(id)
  }, [props])

  useEffect(() => {
    const checkPassword = async () => {
      try {
        await checkEditPermission({ password })
      }
      catch (errorMessage) {
        alert(errorMessage)
        permissionCancel()
      }
    }
    password && checkPassword()
  }, [password])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchArticleDetail(id)
        setArticleDetail(data)
      } catch (errorMessage) {
        alert(errorMessage)
        props.history.push('/home/article/list')
      }
    }
    id !== undefined && fetch(id)
  }, [id, props.history])

  useEffect(() => {
    if (password !== undefined) return

    Modal.render({
      title: '编辑权限校验',
      content: (
        <>
          <div className="permission__modal__guide">请输入密码:</div>
          <Input
            type="password"
            onChange={ e => setUncertainPassword(e.target.value) }
          />
        </>
      ),
      onConfirm: () => setPassword(uncertainPassword),
      onCancel: () => permissionCancel(),
      onClose: () => permissionCancel(),
    })
  })

  return (
    <>
      <div className="article__edit">
        <ArticleEditTextarea
          articleDetail={ articleDetail }
          onChange={ textareaChange }
          onSubmit={ textareaSubmit }
        />
        <MarkdownPreview
          markdownString={ markdownString }
          className="article__edit__preview"
        />
      </div>
    </>
  )
}

export default ArticleEditView




