import React, { useState } from 'react'
import styled from 'styled-components'
import { Editor } from '../features/markdown/component/Editor'
import { MarkdownPreview } from '../features/markdown/component/MarkdownPreview'

function IssueWritePage() {
  const [content, setContent] = useState('')

  return (
    <Container>
      <Editor onChange={setContent} />
      <MarkdownPreview content={content} />
    </Container>
  )
}

export default IssueWritePage

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
`
