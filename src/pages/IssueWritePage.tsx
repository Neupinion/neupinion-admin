import React, { useState } from 'react'
import styled from 'styled-components'
import { MarkdownPreview } from '../features/markdown/components/MarkdownPreview'
import Editor from '../features/markdown/components/Editor'
import WritingTitle from '../features/markdown/components/WritingTitle'
import Button from '../shared/components/Button'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  Stand,
  StandReference,
} from '../features/search/types/IssueArticle.type'
import Spacing from '../shared/components/Spacing'
import Link from '../shared/components/Link'
import Title from '../shared/components/Title'
import Paragraph from '../shared/components/Paragraph'
import theme from '../shared/styles/theme'

function IssueWritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isTabOpen, setIsTabOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const { selectedStand, oppositeStand, references } = location.state || {}

  const handlePublish = () => {
    navigate('/issue/post', { state: { title, content } })
  }

  const toggleTab = () => {
    setIsTabOpen(!isTabOpen)
  }

  return (
    <Container>
      <TabContainer isOpen={isTabOpen}>
        <TabButton onClick={toggleTab}>{isTabOpen ? '닫기' : '보기'}</TabButton>
        {isTabOpen && (
          <TabContent>
            <Title title={'선택한 입장'} fontSize={'20'} headerSize={'2'} />
            <Paragraph content={selectedStand} />
            <Spacing size={20} direction={'vertical'} />
            <Title title={'References'} fontSize={'20'} headerSize={'2'} />
            <Paragraph fontSize={20} content={selectedStand} />
            <Spacing size={10} direction={'vertical'} />
            <ul>
              {references &&
                references
                  .filter((ref: StandReference) => ref.stand === Stand.POSITIVE)
                  .map((ref: StandReference, index: number) => (
                    <li key={index}>
                      <Paragraph content={ref.title} />
                      <Link href={ref.url} label={ref.url} />
                      <Spacing size={10} direction={'vertical'} />
                    </li>
                  ))}
            </ul>
            <Spacing size={20} direction={'vertical'} />
            <Paragraph content={oppositeStand} />
            <Spacing size={10} direction={'vertical'} />
            <ul>
              {references &&
                references
                  .filter((ref: StandReference) => ref.stand === Stand.NEGATIVE)
                  .map((ref: StandReference, index: number) => (
                    <li key={index}>
                      <Paragraph content={ref.title} />
                      <Link href={ref.url} label={ref.url} />
                      <Spacing size={10} direction={'vertical'} />
                    </li>
                  ))}
            </ul>
          </TabContent>
        )}
      </TabContainer>
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
            label={'키워드 확인하기'}
            selectable={true}
            color={theme.colors.purple}
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

const TabContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  overflow: hidden;
`

const TabButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`

const TabContent = styled.div`
  width: 250px;
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
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
