import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import users from './modules/Backend/Users'
import tags from './modules/Backend/Tags'
import permissions from './modules/Backend/Permissions'
import roles from './modules/Backend/Roles'
import entities from './modules/Backend/Entities'
import articles from './modules/Backend/Articles'
import categories from './modules/Backend/Categories'
import auth from './modules/Backend/Auth/Authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  modules: {
    users,
    tags,
    permissions,
    entities,
    categories,
    roles,
    articles,
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
