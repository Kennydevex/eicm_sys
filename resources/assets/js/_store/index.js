import Vue from 'vue'
import Vuex from 'vuex'

// Importase o utilizador atualmente autenticado para ser guardado na variavel currentUser
import {
  getLocalUser
}
from '../_helpers/auth'

Vue.use(Vuex)

const user = getLocalUser()

export default new Vuex.Store({
  // strict: true,
  // ==================================================
  // ==================================================
  state: {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
    tags: []

  },
  // // ==================================================
  // // ==================================================
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
    tags(state) {
      return state.tags
    },

  },
  // // ==================================================
  // // ==================================================
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
        token: payload.access_token
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
    updateTags(state, payload){
      state.tags = payload
    }
  },
  // // ==================================================
  // // ==================================================
  actions: {
    login(context) {
      //commit the login mutation
      context.commit("login")
    },
    getTags(context){
      axios.get('/api/cmd/tags', {
        headers: {
          "Authorization": `Bearer ${context.state.currentUser.token}`
        }
      }).then(function (response){
        context.commit('updateTags', response.data.tags)
      })
    }


//
    // getTags(context){
    //   axios.get('/api/cmd/tags', {
    //     headers: {
    //       "Authorization": `Bearer ${context.state.currentUser.token}`
    //     }
    //   }).then(function (response){
    //     context.commit('updateTags', response.data.tags)
    //   })
    // }
  },
})
