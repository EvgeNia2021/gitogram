import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
// import * as api from '../api'
// import $store from '../store'

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })
// router.beforeEach(async (to, from, next) => {
//   const token = localStorage.getItem('token')

//   if (token === null && to.name !== 'auth') {
//     next({ name: 'auth' })
//     return
//   }
//   if (token !== null) {
//     const response = await api.auth.getUserData()
//     if (response.status === 200) {
//       if (to.name === 'Auth') {
//         await $store.dispatch('auth/getUser')
//         next({ name: 'Feeds' })
//         return
//       }
//     } else {
//       localStorage.removeItem('token')
//       next({ name: 'Auth' })
//       window.location.reload()
//     }
//   }

//   next()
// })

// export default router
export default createRouter({
  history: createWebHashHistory(),
  routes
})
