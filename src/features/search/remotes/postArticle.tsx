import { client } from '../../../shared/remotes/axios'
import { ReprocessedIssueType } from '../types/ReprocessedIssue.type'

export const postIssue = async (request: ReprocessedIssueType) => {
  const data = await client.post(`/reprocessed-issue`, request)
  const locationHeader = data.headers['Location']
  return locationHeader.substring(locationHeader.lastIndexOf('/') + 1)
}
