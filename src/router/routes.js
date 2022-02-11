import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { user } from '../pages/user'
import { repos } from '../pages/user/repos'
import { following } from '../pages/user/following'

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
  },
  {
    path: '/user',
    name: 'User',
    component: user,
    props: true,
    children: [
      {
        name: 'myRepos',
        path: '',
        component: repos
      },
      {
        name: 'myFollowing',
        path: 'following',
        component: following
      }
    ]
  }
]
