import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, payload) {
      payload.isFollowing = false
      state.user = payload
    }
  },
  actions: {
    getAuthCode () {
      api.auth.getCode()
    },
    async authByCode (store, code) {
      const { data } = await api.auth.getToken(code)
      return data.token
    },
    async logout () {
      localStorage.removeItem('token')
      window.location.reload()
    },
    async getUser ({ commit }) {
      try {
        const { data } = await api.auth.getUserData()
        commit('SET_USER', data)
        return data
      } catch (error) {
        console.log('Unauthorized user')
      }
    }
  }
}
