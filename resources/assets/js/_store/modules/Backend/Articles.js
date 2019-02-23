export default ({
  // strict: true,
  state: {
    articles: [],
    publishedArticles: [],
    featuredArticles: [],

  },

  getters: {
    articles(state) {
        return state.articles
      },
      publishedArticles(state) {
        return state.publishedArticles
      },
      featuredArticles(state) {
        return state.featuredArticles
      },
  },

  mutations: {
    updateArticles(state, payload) {
        state.articles = payload
      },
      updatePublishedArticles(state, payload) {
        state.featuredArticles = payload
      },
      updateFeaturedArticles(state, payload) {
        state.featuredArticles = payload
      },
  },

  actions: {
    getArticles(context) {
        axios.get('/api/cms/articles').then(function(response) {
          context.commit('updateArticles', response.data.data)
        })
      },
      getPublishedArticles(context) {
        axios.get('/api/cms/publishedArticles').then(function(response) {
          context.commit('updatePublishedArticles', response.data.data)
        })
      },
      getFeaturedArticles(context) {
        axios.get('/api/cms/featuredArticles').then(function(response) {
          context.commit('updateFeaturedArticles', response.data.data)
        })
      },
  }
})
