import { client } from '../../../shared/remotes/axios'

export const getKeywords = async (issueId: string) => {
  const { data } = await client.get(`/issue/${issueId}/keyword`)

  return data
}
