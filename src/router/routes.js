import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'

export default [
  {
    path: '/',
    name: 'Feeds',
    component: feeds
  },
  {
    path: '/stories',
    name: 'Stories',
    component: stories
  },
  {
    path: '/auth',
    name: 'Auth',
    component: auth
  }
]
