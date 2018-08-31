import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import users from './modules/Backend/Users'
import tags from './modules/Backend/Tags'
import permissions from './modules/Backend/Permissions'
import auth from './modules/Backend/Auth/Authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  modules: {
    users,
    tags,
    permissions,
    auth,
  },

  state: {

  },

  getters: {

  },

  mutations: {

  },

  actions: {

  },
})
