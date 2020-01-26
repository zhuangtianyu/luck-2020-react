import React, { useEffect, useRef } from 'react'
import markdownToHtml from '../../utils/markdown-to-html'
import './index.scss'

function MarkdownPreview (props) {
  const { markdownString, className } = props

  const previewRef = useRef()

  const bindImgEvent = () => {
    const imgList = Array.from(previewRef.current.querySelectorAll('img'))
    imgList.forEach(img => {
      img.addEventListener('click', () => {
        window.open(img.src)
      })
    })
  }

  useEffect(() => {
    const html = markdownToHtml(markdownString)
    previewRef.current.innerHTML = html
    bindImgEvent()
  }, [markdownString])

  return (
    <div
      className={
        className !== undefined
          ? `markdown__preview ${className}`
          : 'markdown__preview'
      }
      ref={ previewRef }
    >
    </div>
  )
}

export default MarkdownPreview







