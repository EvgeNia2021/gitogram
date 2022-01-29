import { makeRequest } from '../requests'

export const getRepo = () => makeRequest({
  url: 'user/repos'
})
