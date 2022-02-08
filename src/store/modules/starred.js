import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: null
  },
  getters: {
    getRepoById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.data.trendings = state.data.trendings.map(item => {
        item.issues = {
          data: null,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_ISSUES: (state, payload) => {
      state.data.trendings = state.data.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.issues = {
            ...repo.issues,
            ...payload.data
          }
        }
        return repo
      })
    }
  },
  actions: {
    async fetchStarred ({ commit }, { limit }) {
      try {
        const { data } = await api.starred.getStarredRepos({ limit })
        commit('SET_STARRED', data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchIssues ({ commit, getters }, repoId) {
      commit('SET_ISSUES', {
        id: repoId,
        data: {
          loading: true,
          error: ''
        }
      })
      try {
        const curRep = getters.getRepoById(repoId)
        if (curRep.issues.data !== null) return

        const { data } = await api.issues.fetchIssues({ owner: curRep.owner.login, repo: curRep.name })
        commit('SET_ISSUES', {
          id: repoId,
          data: {
            data: data
          }
        })
      } catch (error) {
        commit('SET_ISSUES', {
          id: repoId,
          data: {
            loading: false,
            error: ''
          }
        })
        console.log(error)
      } finally {
        commit('SET_ISSUES', {
          id: repoId,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
