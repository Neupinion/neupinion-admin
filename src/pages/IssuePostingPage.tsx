import React, { useState } from 'react'
import styled from 'styled-components'

function IssuePostingPage() {
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
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
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
