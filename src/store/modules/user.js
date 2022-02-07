import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    repos: null
  },
  mutations: {
    SET_REPOS (state, payload) {
      state.repos = payload
    }
  },
  actions: {
    async fetchRepos ({ commit }) {
      try {
        const { data } = await api.repos.getRepo()
        commit('SET_REPOS', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
