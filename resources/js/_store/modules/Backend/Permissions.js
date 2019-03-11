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
    updatePermissions(state, payload) {
      state.permissions = payload
    },
  },

  actions: {
    getPermissions(context) {
      axios.get('/api/sys/permissions').then(function(response) {
        context.commit('updatePermissions', response.data.data)
      })
    },
  }
})
