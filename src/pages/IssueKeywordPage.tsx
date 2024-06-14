import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getKeywords } from '../features/search/remotes/getKeywords'
import { KeywordsData } from '../features/search/types/IssueKeyword.type'
import { useParams } from 'react-router-dom'

interface IssueKeywordsProps {
  issueId: string
}

const IssueKeywordsPage: React.FC = () => {
  const { issueId } = useParams<{ issueId: string }>()
  const [data, setData] = useState<KeywordsData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (issueId) {
      setLoading(true)
      getKeywords(issueId)
        .then(response => {
          setData(response)
        })
        .catch(() => {
          setError('Error fetching data')
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [issueId])

  if (loading) {
    return <Loading>Loading...</Loading>
  }

  if (error) {
    return <Error>{error}</Error>
  }

  return (
    <Container>
      <StandContainer>
        <StandTitle>{data?.firstStand}</StandTitle>
        <KeywordsContainer>
          {data?.firstKeywords.map((keyword, index) => (
            <KeywordBubble key={index}>{keyword}</KeywordBubble>
          ))}
        </KeywordsContainer>
      </StandContainer>
      <StandContainer>
        <StandTitle>{data?.secondStand}</StandTitle>
        <KeywordsContainer>
          {data?.secondKeywords.map((keyword, index) => (
            <KeywordBubble key={index}>{keyword}</KeywordBubble>
          ))}
        </KeywordsContainer>
      </StandContainer>
    </Container>
  )
}

export default IssueKeywordsPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const StandContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const StandTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`

const KeywordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`

const KeywordBubble = styled.div`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

const Loading = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`

const Error = styled.div`
  font-size: 20px;
  color: red;
  text-align: center;
  margin-top: 20px;
`
