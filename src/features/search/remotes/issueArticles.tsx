import { client } from '../../../shared/remotes/axios'
import { IssueArticleRequest } from '../types/IssueArticle.type'

export const postIssueArticles = async (request: IssueArticleRequest) => {
  const { data } = await client.post(`/issue/search`, request)

  return data
}
