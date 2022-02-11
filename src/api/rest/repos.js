import { makeRequest } from '../requests'

export const fetchRepos = () => makeRequest({
  url: 'user/repos'
})
