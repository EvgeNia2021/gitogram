import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'

export default [
  {
    path: '/',
    components: {
      default: feeds
    }
  },
  {
    path: '/stories',
    name: 'stories',
    component: stories
  }
]
