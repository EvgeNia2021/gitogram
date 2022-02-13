import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: []
  },
  getters: {
    getFollowedById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
      // .map(item => {
      //   item.issues = {
      //     data: null,
      //     loading: false,
      //     error: ''
      //   }
      //   return item
      // })
      // state.data.trendings = payload
    },
    SET_ISSUES: (state, payload) => {
      console.log(payload)
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    },
    REMOVE_STAR (state, payload) {
      const itemToDelete = state.starred.indexOf(payload)
      state.starred.splice(itemToDelete, 1)
    }
  },
  actions: {
    async fetchStarred ({ commit }) {
      try {
        const { data } = await api.starred.fetchStarred()
        commit('SET_STARRED', data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchIssues ({ commit }, { id, owner, repo }) {
      // commit('SET_ISSUES', {
      //   id,
      //   data: {
      //     loading: true,
      //     error: ''
      //   }
      // })

      try {
        const { data } = await api.issues.fetchIssues({ owner, repo })
        if (data.length !== 0) {
          commit('SET_ISSUES', {
            id,
            issues: {
              data,
              error: ''
            }
            // issues: data
          })
        } else {
          commit('SET_ISSUES', {
            id,
            issues: { data: [{ no_issue: 'No issues yet' }] }
          })
        }
      } catch (e) {
        commit('SET_ISSUES', {
          id,
          issues: {
            loading: false,
            error: ''
          }
        })
        console.log(e)
      // } finally {
      //   commit('SET_ISSUES', {
      //     id,
      //     issues: {
      //       loading: false
      //     }
      //   })
      // }
      }
    },
    async unFollow ({ commit, getters }, id) {
      const repo = getters.getFollowedById(id)
      try {
        await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
        commit('REMOVE_STAR', repo)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
