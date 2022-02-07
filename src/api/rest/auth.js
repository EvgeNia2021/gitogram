import { makeRequest } from '../requests'
import env from '../../../env'

export const getCode = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_id', env.clientId)
  params.append('scope', 'repo:status public_repo read:user')

  window.location.href = `${githubAuthApi}?${params}`
}

export const getToken = (code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'POST',
    data: {
      clientId: env.clientId,
      clientSecret: env.clientSecret,
      code
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export const getUserData = () => makeRequest({
  url: '/user'
})
