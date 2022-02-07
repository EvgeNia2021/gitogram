import axios from 'axios'

const baseURL = 'https://api.github.com'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.Authorization = `token ${token}`
}

export const makeRequest = ({
  url, method = 'get', data = {}, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL
})
