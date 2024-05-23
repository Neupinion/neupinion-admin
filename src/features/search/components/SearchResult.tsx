import { IssueArticle, IssueArticles, Stand } from '../types/IssueArticle.type'
import styled from 'styled-components'
import theme from '../../../shared/styles/theme'
import Spacing from '../../../shared/components/Spacing'
import React from 'react'
import HorizontalContainer from '../../../shared/components/HorizontalContainer'

interface SearchResultProps {
  stand: Stand
  result: IssueArticle[] | undefined
}

const SearchResult = ({ stand, result }: SearchResultProps) => {
  return (
    <Container>
      <ViewLabel stand={stand}>{stand}</ViewLabel>
      <Spacing size={30} direction={'horizontal'} />
      {result &&
        result.map((article, index) => (
          <ArticleContainer key={index}>
            <HorizontalContainer>
              <URL href={article.url}>{article.title}</URL>
              <Spacing size={10} direction={'horizontal'} />
              <PublishedAt>{article.publishedAt}</PublishedAt>
            </HorizontalContainer>
            <Reason>{article.reason}</Reason>
          </ArticleContainer>
        ))}
    </Container>
  )
}

export default SearchResult

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
