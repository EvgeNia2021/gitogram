import { makeRequest } from '../requests'

export const fetchIssues = ({ owner, repo }) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/issues`
  })
}
