import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {
      trendings: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.data.trendings.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS: (state, trendings) => {
      // console.log(trendings.trendings)
      state.data.trendings = trendings.trendings.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
      // state.data = trendings
    },
    SET_README: (state, payload) => {
      state.data.trendings = state.data.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data.trendings = state.data.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
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
            starred: rootState.starred.data,
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
    },
    async starRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', {
        id,
        data: {
          status: false,
          loading: true,
          error: '',
          theme: 'grey'
        }
      })
      const { name: repo, owner } = getters.getRepoById(id)
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true,
            theme: 'grey'
          }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: false,
            error: ''
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false,
            theme: 'grey'
          }
        })
      }
    },
    async unStarRepo ({ commit, getters, rootGetters }, id) {
      const repo = getters.getRepoById(id)
      if (repo) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            status: true,
            loading: true,
            error: '',
            theme: 'green'
          }
        })
        try {
          await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
          commit('SET_FOLLOWING', {
            id,
            data: {
              status: false,
              loading: false,
              error: '',
              theme: 'green'
            }
          })
        } catch (e) {
          commit('SET_FOLLOWING', {
            id,
            data: {
              status: false,
              error: ''
            }
          })
        }
      } else {
        const getterFromStarred = rootGetters['starred/getFollowedById']
        const repo = getterFromStarred(id)

        try {
          await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
}
