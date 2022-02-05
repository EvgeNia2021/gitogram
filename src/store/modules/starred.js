import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: null
  },
  getters: {
    getStarredById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
    },
    ADD_STAR (state, payload) {
      state.starred.unshift(payload)
    },
    REMOVE_STAR (state, payload) {
      const ndxToDelete = state.starred.indexOf(payload)
      state.starred.splice(ndxToDelete, 1)
    }
  },
  actions: {
    async getStarred ({ commit }) {
      try {
        const { data } = await api.starred.getStarred()
        commit('SET_STARRED', data)
      } catch (error) {
        console.log(error)
      }
    },
    async unFollow ({ commit, getters }, id) {
      const repo = getters.getStarredById(id)
      try {
        await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
        commit('REMOVE_STAR', repo)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
