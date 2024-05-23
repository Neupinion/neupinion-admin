import styled from 'styled-components'
import React from 'react'
import { IssueArticles, Stand } from '../types/IssueArticle.type'
import SearchResult from './SearchResult'
import Spacing from '../../../shared/components/Spacing'

interface SearchResultsProps {
  data: IssueArticles | null
}

const dummyDatas: IssueArticles = {
  stand: 'positive',
  positive: [
    {
      title: 'title',
      url: 'url',
      publishedAt: 'publishedAt',
      reason: 'reason',
    },
    {
      title: 'title',
      url: 'url',
      publishedAt: 'publishedAt',
      reason: 'reason',
    },
    {
      title: 'title',
      url: 'url',
      publishedAt: 'publishedAt',
      reason: 'reason',
    },
  ],
  negative: [
    {
      title: 'title',
      url: 'url',
      publishedAt: 'publishedAt',
      reason: 'reason',
    },
  ],
  neutral: [
    {
      title: 'title',
      url: 'url',
      publishedAt: 'publishedAt',
      reason: 'reason',
    },
  ],
}

const SearchResults = ({ data }: SearchResultsProps) => {
  return (
    <ResultsContainer>
      <SearchResult stand={Stand.POSITIVE} result={data?.positive} />
      <SearchResult stand={Stand.NEUTRAL} result={data?.neutral} />
      <SearchResult stand={Stand.NEGATIVE} result={data?.negative} />
    </ResultsContainer>
  )
}

export default SearchResults

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;

  background-color: aliceblue;

  padding: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`
