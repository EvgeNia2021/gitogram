import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'Auth'

  try {
    await api.auth.getUserData()
    next(authRoute ? { name: 'Feeds' } : null)
  } catch (e) {
    next(authRoute ? null : { name: 'Auth' })
  }
})

export default router
