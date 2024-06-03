import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkdownPreview } from '../features/markdown/components/MarkdownPreview'
import TitleBox from '../features/markdown/components/WritingTitle'
import Editor from '../features/markdown/components/Editor'

function IssueWritePage() {
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleImageUrlChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setImageUrl(event.target.value)
  }

  return (
    <Container>
      <ImageInputContainer>
        {!imageUrl && (
          <ImageInput
            placeholder="이미지 URL 을 입력해주세요."
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        )}
        {imageUrl && <ImagePreview src={imageUrl} alt="Image preview" />}
      </ImageInputContainer>
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
  overflow: auto;
`

const FixedTitle = styled.div`
  position: sticky;
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const ImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const ImageInput = styled.textarea`
  width: 80%;
  padding: 5px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  outline: none;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  resize: none;
  text-align: center;
  height: fit-content;
`

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`

const LineDivider = styled.hr`
  height: 2px;
  padding: 2px;
  background: #e3e3e3;
  border: none;
  margin: 0;
`

const WritingContainer = styled.div`
  margin-top: 10px;
  min-height: calc(100% - 60px);
  max-height: fit-content;
  display: flex;
  flex-direction: row;
  width: 100%;
`
