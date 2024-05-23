import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkdownPreview } from '../features/markdown/components/MarkdownPreview'
import TitleBox from '../features/markdown/components/WritingTitle'
import Editor from '../features/markdown/components/Editor'

function IssueWritePage() {
  const [content, setContent] = useState('')

  return (
    <Container>
      <FixedTitle>
        <TitleBox />
        <LineDivider />
      </FixedTitle>
      <WritingContainer>
        <Editor onChange={setContent} />
        <MarkdownPreview content={content} />
      </WritingContainer>
    </Container>
  )
}

export default IssueWritePage

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const FixedTitle = styled.div`
  position: fixed;
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 60px;
  width: 100%;
`

const LineDivider = styled.hr`
  height: 2px;
  padding: 2px;
  background: #e3e3e3;
  border: none;
`

const WritingContainer = styled.div`
  margin-top: 60px;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;
  scrollbar-color: #c4c4c4 #ffffff;
`
