export default ({
    // strict: true,
    state: {
        categories: [],
    },

    getters: {
        categories(state) {
            return state.categories
        },
    },

    mutations: {
        updateCategories(state, payload) {
            state.categories = payload
        },
    },

    actions: {
        getCategories(context) {
            axios.get('/api/helpers/categories').then(function (response) {
                context.commit('updateCategories', response.data.data)
            })
        },
    }
})
