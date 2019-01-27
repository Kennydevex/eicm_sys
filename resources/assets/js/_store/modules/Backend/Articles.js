export default ({
    // strict: true,
    state: {
        articles: [],
    },

    getters: {
        articles(state) {
            return state.articles
        },
    },

    mutations: {
        updateArticles(state, payload) {
            state.articles = payload
        },
    },

    actions: {
        getArticles(context) {
            axios.get('/api/cms/articles').then(function (response) {
                context.commit('updateArticles', response.data.data)
            })
        },
    }
})
