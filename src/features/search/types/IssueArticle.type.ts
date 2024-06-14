export interface IssueArticles {
  stand: string
  positiveArticles: IssueArticle[]
  negativeArticles: IssueArticle[]
  neutralArticles: IssueArticle[]
}

export interface IssueArticle {
  title: string
  url: string
  publishedAt: string
  reason: string
}

export interface IssueArticleRequest {
  searchKeyword: string
  issueDescription: string
  stands: string
  selectedStand: string
}

export enum Stand {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL',
}

export interface StandReference {
  title: string
  stand: Stand
  url: string
}
