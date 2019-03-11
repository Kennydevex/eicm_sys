export function initialize(store, router) {


  router.beforeEach((to, from, next) => {
    const currentUser = store.state.auth.currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    //==============================================================
    if (currentUser) {
      //axios.defaults.headers.common["Authorization"] = `Bearer ${currentUser.token}`
      axios.defaults.headers.common = {
        "Authorization": `Bearer ${currentUser.token}`,
        "Content-Type": "multipart/form-data"
      };
    }

    //==============================================================

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


} 
