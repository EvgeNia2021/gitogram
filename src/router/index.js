import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'Auth'
  if (authRoute) {
    next()
    return
  }
  try {
    const response = await api.auth.getUserData()
    if (response.status === 401) throw new Error()
    next()
  } catch (error) {
    next({ name: 'Auth ' })
  }
})

export default router
// export default createRouter({
//   history: createWebHashHistory(),
//   routes
// })
