import styled from 'styled-components'
import { marked } from 'marked'
import React, { useEffect, useState } from 'react'

interface MarkdownPreviewProps {
  content: string
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
  content,
}) => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    const parseMarkdown = async () => {
      marked.setOptions({
        breaks: true,
      })
      const rawMarkup = await marked.parse(content)
      setHtml(rawMarkup)
    }

    parseMarkdown().then(r => r)
  }, [content])

  return <MarkdownView dangerouslySetInnerHTML={{ __html: html }} />
}

const MarkdownView = styled.div`
  height: 100%;
  width: 50%;
  background: #eeeeee;
  font-size: 18px;
  padding: 10px;
`
