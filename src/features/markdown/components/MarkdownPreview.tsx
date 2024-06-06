import styled from 'styled-components'
import { marked } from 'marked'
import React, { useEffect, useState } from 'react'

interface MarkdownPreviewProps {
  title: string
  content: string
}

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({
  title,
  content,
}) => {
  const [html, setHtml] = useState('')
  const [titleHtml, setTitleHtml] = useState('')

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

  useEffect(() => {
    const parseMarkdown = async () => {
      const rawMarkup = await marked.parse(title)
      setTitleHtml(rawMarkup)
    }

    parseMarkdown().then(r => r)
  }, [title])

  return (
    <MarkdownContainer>
      <TitleMarkdownView dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <MarkdownView dangerouslySetInnerHTML={{ __html: html }} />
    </MarkdownContainer>
  )
}

const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  height: 100%;
`

const TitleMarkdownView = styled.h1`
  margin-top: 10px;
  min-height: 50px;
  width: 100%;
  max-height: fit-content;
  font-size: 26px;
  padding-top: 10px;
  padding-inline: 15px;
  margin-bottom: 70px;
`

const MarkdownView = styled.div`
  height: 100%;
  width: 100%;
  font-size: 18px;
  padding-inline: 15px;
`
