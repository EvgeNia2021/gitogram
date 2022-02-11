import { makeRequest } from '../requests'

export const fetchIssues = ({ owner, repo }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`
})
