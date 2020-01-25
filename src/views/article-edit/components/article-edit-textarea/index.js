import React, { useState, useEffect } from 'react'
import { Input, Button, message } from 'antd'
import './index.scss'

const { TextArea } = Input

message.config({ top: 200 })

function ArticleEditTextarea (props) {
  const { onChange, onSubmit } = props

  const [markdownString, setMarkdownString] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleChange = e => {
    setMarkdownString(e.target.value)
  }

  const handleSubmit = () => {
    if (markdownString === '') return message.error('内容不能为空')
    if (title === '') return message.error('标题不能为空')
    if (author === '') return message.error('作者不能为空')

    onSubmit({ markdownString, title, author })
  }

  useEffect(() => {
    onChange(markdownString)
  }, [markdownString, onChange])

  return (
    <div className="article__edit__textarea">
      <TextArea onChange={ handleChange } />
      <div className="article__edit__textarea__submit">
        <Button type="primary" onClick={ handleSubmit }>发布</Button>
        <Input placeholder="请输入标题" onChange={ e => setTitle(e.target.value) } />
        <Input placeholder="请输入作者" onChange={ e => setAuthor(e.target.value) }/>
      </div>
    </div>
  )
}

export default ArticleEditTextarea





