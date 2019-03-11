export default ({
  // strict: true,
  state: {
    categories: [],
    articleCategories: [],
  },

  getters: {
    categories(state) {
      return state.categories
    },

    articleCategories(state) {
      return state.articleCategories
    },
  },

  mutations: {
    updateCategories(state, payload) {
        state.categories = payload
      },

      updateArticleCategories(state, payload) {
        state.articleCategories = payload
      },
  },

  actions: {
    getCategories(context) {
        axios.get('/api/helpers/categories').then(function(response) {
          context.commit('updateCategories', response.data.data)
        })
      },
    
      getArticleCategories(context) {
        axios.get('/api/helpers/article_categories').then(function(
          response) {
          context.commit('updateArticleCategories', response.data.data)
        })
      },
  }
})
