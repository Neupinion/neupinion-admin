import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Button from '../shared/components/Button'
import { postIssue } from '../features/search/remotes/postArticle'
import {
  IssueParagraphType,
  ReferenceByStandType,
} from '../features/search/types/ReprocessedIssue.type'

const parseContent = (content: string): IssueParagraphType[] => {
  const lines = content.split('\n')

  return lines.map(line => {
    const isImage = /!\[.*]\(.*\)/.test(line)
    const isHeading = /^#{1,6}\s/.test(line)
    const isLink = /\[.*]\(.*\)/.test(line)

    return {
      content: line,
      isSelectable: !(isImage || isHeading || isLink),
    }
  })
}

const IssuePostingPage = () => {
  const location = useLocation()
  const { title, content, stands } = location.state || {}
  const [imageUrl, setImageUrl] = useState('')
  const [parsedContent, setParsedContent] = useState<IssueParagraphType[]>([])
  const [caption, setCaption] = useState('')
  const [referencesFor, setReferencesFor] = useState<string[]>([''])
  const [referencesAgainst, setReferencesAgainst] = useState<string[]>([''])
  const [category, setCategory] = useState('')

  const handleCaptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCaption(event.target.value)
  }

  const handleImageUrlChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setImageUrl(event.target.value)
  }

  useEffect(() => {
    const parsed = parseContent(content)
    setParsedContent(parsed)
  }, [content])

  const handlePublish = useCallback(() => {
    const references: ReferenceByStandType = {
      firstStand: stands[0],
      firstReferences: referencesFor,
      secondStand: stands[1],
      secondReferences: referencesAgainst,
    }

    postIssue({
      title: title,
      imageUrl: imageUrl,
      caption: caption,
      references: references,
      category: category,
      paragraphs: parsedContent,
      stands: stands.split(','),
    }).then()
  }, [
    imageUrl,
    title,
    content,
    caption,
    referencesFor,
    referencesAgainst,
    category,
    parsedContent,
    stands,
  ])

  const handleAddReferenceFor = () => {
    setReferencesFor([...referencesFor, ''])
  }

  const handleAddReferenceAgainst = () => {
    setReferencesAgainst([...referencesAgainst, ''])
  }

  const handleReferenceForChange = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newReferences = [...referencesFor]
    newReferences[index] = event.target.value
    setReferencesFor(newReferences)
  }

  const handleReferenceAgainstChange = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newReferences = [...referencesAgainst]
    newReferences[index] = event.target.value
    setReferencesAgainst(newReferences)
  }

  return (
    <Container>
      <PreviewContainer>
        <PreviewTitle>컨텐츠 미리보기</PreviewTitle>
        <ThumbnailUploadContainer imageUrl={imageUrl}>
          {!imageUrl && (
            <ImageUploadButton>
              썸네일 업로드
              <ImageInput onChange={handleImageUrlChange} />
            </ImageUploadButton>
          )}
          {imageUrl && <ImagePreview src={imageUrl} alt="Image preview" />}
        </ThumbnailUploadContainer>
        <CaptionInputContainer>
          <CaptionInput
            placeholder="캡션을 입력하세요"
            value={caption}
            onChange={handleCaptionChange}
          />
        </CaptionInputContainer>
        <ReferenceContainer>
          <ReferenceTitle>찬성 입장 레퍼런스</ReferenceTitle>
          {referencesFor.map((reference, index) => (
            <ReferenceInputContainer key={index}>
              <ReferenceInput
                placeholder="URL 입력"
                value={reference}
                onChange={event => handleReferenceForChange(index, event)}
              />
            </ReferenceInputContainer>
          ))}
          <AddReferenceButton onClick={handleAddReferenceFor}>
            + 레퍼런스 추가
          </AddReferenceButton>
        </ReferenceContainer>
        <ReferenceContainer>
          <ReferenceTitle>반대 입장 레퍼런스</ReferenceTitle>
          {referencesAgainst.map((reference, index) => (
            <ReferenceInputContainer key={index}>
              <ReferenceInput
                placeholder="URL 입력"
                value={reference}
                onChange={event => handleReferenceAgainstChange(index, event)}
              />
            </ReferenceInputContainer>
          ))}
          <AddReferenceButton onClick={handleAddReferenceAgainst}>
            + 레퍼런스 추가
          </AddReferenceButton>
        </ReferenceContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </TextContainer>
        <Button
          label={'발행하기'}
          selectable={true}
          color={'purple'}
          height={50}
          onClick={handlePublish}
        />
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

const ThumbnailUploadContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-color: ${({ imageUrl, theme }) =>
    imageUrl ? theme.colors.white : '#eeeeee'};
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

const CaptionInputContainer = styled.div`
  margin-bottom: 20px;
`

const CaptionInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  outline: none;
  resize: none;
`

const ReferenceContainer = styled.div`
  margin-bottom: 20px;
`

const ReferenceTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`

const ReferenceInputContainer = styled.div`
  margin-bottom: 10px;
`

const ReferenceInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  outline: none;
  resize: none;
`

const AddReferenceButton = styled.button`
  padding: 5px 10px;
  background-color: #e0f2f1;
  color: #004d40;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  display: block;
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
