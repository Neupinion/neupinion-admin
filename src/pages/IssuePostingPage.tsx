import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const IssuePostingPage = () => {
  const location = useLocation()
  const { title, content } = location.state || {}
  const [imageUrl, setImageUrl] = useState('')

  const handleImageUrlChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setImageUrl(event.target.value)
  }

  return (
    <Container>
      <PreviewContainer>
        <PreviewTitle>컨텐츠 미리보기</PreviewTitle>
        <ThumbnailUploadContainer>
          {!imageUrl && (
            <ImageUploadButton>
              썸네일 업로드
              <ImageInput onChange={handleImageUrlChange} />
            </ImageUploadButton>
          )}
          {imageUrl && <ImagePreview src={imageUrl} alt="Image preview" />}
        </ThumbnailUploadContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </TextContainer>
      </PreviewContainer>
    </Container>
  )
}

export default IssuePostingPage

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 20px;
  background-color: #f5f5f5;
`

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 20px;
`

const PreviewTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`

const ThumbnailUploadContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
`

const ImageUploadButton = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #e0f2f1;
  color: #004d40;
  border-radius: 5px;
  cursor: pointer;
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

const TextContainer = styled.div`
  margin-top: 20px;
`

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`

const Content = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`
