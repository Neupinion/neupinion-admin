import styled from 'styled-components'
import { marked } from 'marked'
import React, { useEffect, useRef, useState } from 'react'

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
  const [titleHeight, setTitleHeight] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)

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

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.clientHeight)
    }
  }, [titleHtml])

  return (
    <>
      <TitleMarkdownView dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <MarkdownView
        titleHeight={titleHeight}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

const TitleMarkdownView = styled.h1`
  width: 100%;
  min-height: 50px;
  max-height: fit-content;
  font-size: 26px;
  padding-top: 10px;
  padding-inline: 15px;
  margin-top: 10px;
  margin-bottom: 75px;
  background-color: '#eeeeee';
`

interface MarkdownViewProps {
  titleHeight: number
}

const MarkdownView = styled.div<MarkdownViewProps>`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  background-color: #eeeeee;
  flex-grow: 1;
`
