import {
  getLocalUser
}
from '../../../../_helpers/auth'

const user = getLocalUser()

export default ({
  state: {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
  },

  getters: {
    currentUser(state) {
        return state.currentUser
      },
      isLoggedIn(state) {
        return state.isLoggedIn
      },
      isLoading(state) {
        return state.loading
      },
      authError(state) {
        return state.auth_error
      },
  },

  mutations: {
    login(state) {
        state.loading = true
        state.auth_error = null
      },
      loginSuccess(state, payload) {
        state.loading = false
        state.auth_error = null
        state.isLoggedIn = true

        
        state.currentUser = Object.assign({}, payload.user, {
          token: payload.token
        })

        localStorage.setItem("user", JSON.stringify(state.currentUser))

      },
      loginFailed(state, payload) {
        state.loading = false
        state.auth_error = payload.error
      },
      logout(state) {
        localStorage.removeItem("user")
        state.isLoggedIn = false
        state.currentUser = null
      },
  },

  actions: {
    login(context) {
      context.commit("login")
    },
  },

})
