import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'
import Spacing from '../shared/components/Spacing'
import theme from '../shared/styles/theme'
import SquareButton from '../shared/components/Button'
import { postIssueArticles } from '../features/search/remotes/issueArticles'
import {
  IssueArticles,
  Stand,
  StandReference,
} from '../features/search/types/IssueArticle.type'
import SearchResults from '../features/search/components/SearchResults'
import { useNavigate } from 'react-router-dom'

const NewsSearchPage = () => {
  const [issue, setIssue] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [oppositeStand, setOppositeStand] = useState<string>('')
  const [writerStand, setStand] = useState<string>('')
  const [data, setData] = useState<IssueArticles | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedReferences, setSelectedReferences] = useState<
    StandReference[]
  >([])
  const navigate = useNavigate()

  useEffect(() => {
    const savedState = JSON.parse(sessionStorage.getItem('issueSearch') || '{}')
    if (savedState) {
      setIssue(savedState.issue || '')
      setDescription(savedState.description || '')
      setOppositeStand(savedState.oppositeStand || '')
      setStand(savedState.writerStand || '')
      setSelectedReferences(savedState.selectedReferences || [])
    }
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  useEffect(() => {
    sessionStorage.setItem(
      'issueSearch',
      JSON.stringify({
        issue,
        description,
        oppositeStand,
        writerStand,
        selectedReferences,
      }),
    )
  }, [issue, description, oppositeStand, writerStand, selectedReferences])

  const fetchIssueArticles = useCallback(() => {
    setLoading(true)
    postIssueArticles({
      searchKeyword: issue,
      issueDescription: description,
      stands: writerStand.concat(',', oppositeStand),
      selectedStand: writerStand,
    })
      .then(response => {
        setData(response)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [issue, description, oppositeStand, writerStand])

  const handleSelectReference = (stand: Stand, url: string, title: string) => {
    setSelectedReferences([...selectedReferences, { title, stand, url }])
  }

  const handleProceed = () => {
    navigate('/issue', {
      state: {
        selectedStand: writerStand,
        oppositeStand: oppositeStand,
        references: selectedReferences,
      },
    })
  }

  return (
    <Container>
      <InputFlex>
        <Label>어떤 이슈에 대해 글을 작성하실 건가요?</Label>
        <Spacing direction={'vertical'} size={20} />
        <ShortTextArea
          id="issueSubject"
          onKeyDown={handleKeyDown}
          onChange={e => setIssue(e.target.value)}
        />
        <Spacing direction={'vertical'} size={30} />
        <Label>이슈에 대해 간단히 설명해주세요.</Label>
        <Spacing direction={'vertical'} size={20} />
        <LongTextArea
          id="issueStand"
          onChange={e => setDescription(e.target.value)}
        />
        <Spacing size={30} direction={'vertical'} />
        <Label>에디터의 입장을 입력해주세요.</Label>
        <Spacing direction={'vertical'} size={20} />
        <ShortTextArea
          id="writerStand"
          onChange={e => setStand(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Spacing size={30} direction={'vertical'} />
        <Label>반대되는 입장을 입력해주세요.</Label>
        <Spacing direction={'vertical'} size={20} />
        <ShortTextArea
          id="oppositeStand"
          onChange={e => setOppositeStand(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Spacing direction={'vertical'} size={50} />
        <SquareButton
          label={'관련 기사 찾아보기'}
          selectable={true}
          color={theme.colors.purple}
          height={50}
          onClick={fetchIssueArticles}
        />
      </InputFlex>
      <ResultFlex>
        {loading ? (
          <div>Loading...</div>
        ) : data ? (
          <SearchResults data={data} onSelect={handleSelectReference} />
        ) : (
          <EmptyContainer>결과가 없습니다</EmptyContainer>
        )}
        {selectedReferences.length > 0 && (
          <ProceedButton onClick={handleProceed}>
            작성 페이지로 이동하기
          </ProceedButton>
        )}
      </ResultFlex>
    </Container>
  )
}

export default NewsSearchPage

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

const InputFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 30%;
  }
`

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`

const ShortTextArea = styled.textarea<{ width?: number }>`
  height: 45px;
  padding: 10px;
  font-size: 16px;
  width: ${props => (props.width === undefined ? '100%' : `${props.width}px`)};
  resize: none;
  border-radius: 5px;
  outline: none;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`

const LongTextArea = styled.textarea`
  min-height: 45px;
  height: fit-content;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  resize: none;
  border-radius: 5px;
  outline: none;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`

const ResultFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  height: 100%;
  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 70%;
  }
`

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ProceedButton = styled.button`
  padding: 10px 20px;
  background-color: ${theme.colors.purple};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  align-self: center;
`
