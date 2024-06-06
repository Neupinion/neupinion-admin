import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkdownPreview } from '../features/markdown/components/MarkdownPreview'
import TitleBox from '../features/markdown/components/WritingTitle'
import Editor from '../features/markdown/components/Editor'
import WritingTitle from '../features/markdown/components/WritingTitle'

function IssueWritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <Container>
      <WritingContainer>
        <FixedTitle>
          <WritingTitle onChange={setTitle} />
          <LineDivider />
        </FixedTitle>
        <Editor onChange={setContent} />
      </WritingContainer>
      <MarkdownContainer>
        <MarkdownPreview title={title} content={content} />
      </MarkdownContainer>
    </Container>
  )
}

export default IssueWritePage

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 10px;
`

const FixedTitle = styled.div`
  position: sticky;
  background-color: ${({ theme: { colors } }) => colors.white};
  min-height: 30px;
  max-height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const LineDivider = styled.hr`
  height: 2px;
  width: 50px;
  padding: 2px;
  margin-top: 10px;
  margin-left: 15px;
  background: ${({ theme: { colors } }) => colors.black};
  border: none;
`

const WritingContainer = styled.div`
  margin-top: 15px;
  min-height: calc(100% - 60px);
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  width: 50%;
`

const MarkdownContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: auto;
  padding: 10px;
`
