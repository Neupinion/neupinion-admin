import { IssueArticle, Stand } from '../types/IssueArticle.type'
import styled from 'styled-components'
import theme from '../../../shared/styles/theme'
import Spacing from '../../../shared/components/Spacing'
import React from 'react'

interface SearchResultProps {
  stand: Stand
  result: IssueArticle[] | undefined
  onSelect: (stand: Stand, url: string, title: string) => void
  selectedUrls: string[]
}

const SearchResult = ({
  stand,
  result,
  onSelect,
  selectedUrls,
}: SearchResultProps) => {
  return (
    <Container>
      <ViewLabel stand={stand}>{stand}</ViewLabel>
      <Spacing size={30} direction={'horizontal'} />
      <>
        {result &&
          result.map((article, index) => (
            <ArticleContainer
              key={index}
              onClick={() => onSelect(stand, article.url, article.title)}
              isSelected={selectedUrls.includes(article.url)}
            >
              <URL href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </URL>
              <PublishedAt>{article.publishedAt}</PublishedAt>
              <Spacing size={10} direction={'vertical'} />
              <Reason>{article.reason}</Reason>
            </ArticleContainer>
          ))}
      </>
    </Container>
  )
}

export default SearchResult

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
`

const ViewLabel = styled.div<{ stand: Stand }>`
  font-size: 24px;
  color: ${props => {
    switch (props.stand) {
      case Stand.POSITIVE:
        return theme.colors.blue
      case Stand.NEGATIVE:
        return theme.colors.red
      case Stand.NEUTRAL:
        return theme.colors.green
    }
  }};
  font-weight: 800;
  margin-bottom: 10px;
`

const ArticleContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected ? '#e0f7fa' : 'transparent'};
  padding: 10px;
  border-radius: 5px;
`

const URL = styled.a`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.black};

    :hover {
        color: ${theme.colors.blue};
    }
}
`

const PublishedAt = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray};
`

const Reason = styled.p`
  font-size: 16px;
  color: ${theme.colors.black};
`
