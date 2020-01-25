import React, { useEffect, useRef } from 'react'
import markdownToHtml from '../../utils/markdown-to-html'
import './index.scss'

function MarkdownPreview (props) {
  const { markdownString, className } = props

  const previewRef = useRef()

  useEffect(() => {
    const html = markdownToHtml(markdownString)
    previewRef.current.innerHTML = html
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





