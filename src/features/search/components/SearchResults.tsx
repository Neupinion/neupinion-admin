import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { IssueArticles, Stand } from '../types/IssueArticle.type'
import SearchResult from './SearchResult'

interface SearchResultsProps {
  data: IssueArticles | null
  onSelect: (stand: Stand, url: string, title: string) => void
}

const SearchResults = ({ data, onSelect }: SearchResultsProps) => {
  const [selectedUrls, setSelectedUrls] = useState<string[]>([])

  useEffect(() => {
    sessionStorage.setItem('selectedUrls', JSON.stringify({ selectedUrls }))
  }, [selectedUrls])

  const handleSelect = (stand: Stand, url: string, title: string) => {
    setSelectedUrls(prevSelectedUrls => {
      if (prevSelectedUrls.includes(url)) {
        return prevSelectedUrls.filter(selectedUrl => selectedUrl !== url)
      } else {
        return [...prevSelectedUrls, url]
      }
    })
    onSelect(stand, url, title)
  }

  return (
    <ResultsContainer>
      <SearchResult
        stand={Stand.POSITIVE}
        result={data?.positiveArticles}
        onSelect={handleSelect}
        selectedUrls={selectedUrls}
      />
      <SearchResult
        stand={Stand.NEUTRAL}
        result={data?.neutralArticles}
        onSelect={handleSelect}
        selectedUrls={selectedUrls}
      />
      <SearchResult
        stand={Stand.NEGATIVE}
        result={data?.negativeArticles}
        onSelect={handleSelect}
        selectedUrls={selectedUrls}
      />
    </ResultsContainer>
  )
}

export default SearchResults

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  justify-content: flex-start;

  background-color: aliceblue;

  padding: 20px;

  @media (min-width: ${({ theme }) => theme.breakPoints.xl}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`
