import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkdownPreview } from '../features/markdown/components/MarkdownPreview'
import Editor from '../features/markdown/components/Editor'
import WritingTitle from '../features/markdown/components/WritingTitle'
import Button from '../shared/components/Button'
import { Outlet, useNavigate } from 'react-router-dom'

function IssueWritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const handlePublish = () => {
    console.log('Publishing with:', { title, content }) // Debug log
    navigate('/issue/post', { state: { title, content } })
  }

  return (
    <Container>
      <WritingContainer>
        <FixedTitle>
          <WritingTitle onChange={setTitle} />
          <LineDivider />
        </FixedTitle>
        <EditorContainer>
          <Editor onChange={setContent} />
        </EditorContainer>
        <EditorFooter>
          <Button
            label={'발행하기'}
            selectable={true}
            color={'purple'}
            height={60}
            onClick={handlePublish}
          />
        </EditorFooter>
      </WritingContainer>
      <MarkdownContainer>
        <MarkdownPreview title={title} content={content} />
      </MarkdownContainer>
      <Outlet />
    </Container>
  )
}

export default IssueWritePage

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
  width: 50%;
  height: calc(100% - 15px);
`

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`

const EditorFooter = styled.div`
  position: sticky;
  background-color: lightgrey;
  height: 60px;
  width: 100%;
  bottom: 0;
  z-index: 1;
`

const MarkdownContainer = styled.div`
  width: 50%;
  height: 100%;
  background: #eeeeee;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`
