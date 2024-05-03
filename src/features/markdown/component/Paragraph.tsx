import React, { useEffect, useState } from 'react'
import { marked } from 'marked'
import styled from 'styled-components'

interface ParagraphProps {
  body: string
  selectable: boolean
}

export const Paragraph = ({ body, selectable }: ParagraphProps) => {
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    async function parseMarkdown() {
      const html = await marked.parse(body)
      setHtmlContent(html)
    }

    parseMarkdown().then(r => r)
  }, [body])

  return (
    <MarkdownView
      selectable={selectable}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ userSelect: selectable ? 'text' : 'none' }}
    />
  )
}
export const ParagraphWrapper = styled.div`
  height: 90vh;
`

const MarkdownView = styled.div<{ selectable: boolean }>`
  height: fit-content;
  background-color: ${props => (props.selectable ? 'white' : '#f8f8f8')};
  padding: 10px;
  border: #d3d3d3 1px solid;
  border-radius: 10px;
`
