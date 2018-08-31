export default({
  state: {
    tags: [],
  },

  getters: {
    tags(state) {
      return state.tags
    },
  },

  mutations: {
    updateTags(state, payload) {
      state.tags = payload
    },
  },

  actions: {
    getTags(context) {
      axios.get('/api/cmd/tags').then(function(response) {
        context.commit('updateTags', response.data.tags)
      })
    },
  }
})
