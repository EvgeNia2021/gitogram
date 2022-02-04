import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    getRepoById: (state) => (id) => state.data.trendings.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      // console.log(trendings)
      console.log(trendings)
      state.data = trendings
    },
    SET_README: (state, payload) => {
      state.data.trendings = state.data.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      console.log()
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS',
          {
          // starred: rootState.starred.data,
            trendings: data.items
          }
        )
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        alert('Something went wrong')
      }
    }
  }
}
