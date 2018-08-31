export function initialize(store, router) {
  router.beforeEach((to, from, next) => {
    const currentUser = store.state.auth.currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)


    if (requiresAuth && !currentUser) {
      next('/login')
    } else if (to.path == '/login' && currentUser) {
      next('/dashboard')
    } else {
      next()
    }
  })

  axios.interceptors.response.use(null, (error) => {
    if (error.response.status == 401) {
      store.commit('logout');
      router.push('/login')
    }
    return Promise.reject(error)
  })

  if (store.state.auth.currentUser) {
    axios.defaults.headers.common["Authorization"] =
      `Bearer ${store.state.auth.currentUser.token}`
  }

}
