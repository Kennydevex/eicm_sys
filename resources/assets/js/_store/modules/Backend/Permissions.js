export default ({
  // strict: true,
  state: {
    permissions: [],
  },

  getters: {
    permissions(state) {
      return state.permissions
    },
  },

  mutations: {
    updateUsers(state, payload) {
      state.permissions = payload
    },
  },

  actions: {
    getUsers(context) {
      axios.get('/api/sys/permissions').then(function(response) {
        context.commit('updatePermissions', response.data.data)
      })
    },
  }
})
