import Vue from 'vue'
import Router from 'vue-router'

// ================================================
import Dashboard from '../components/backend/Dashboard.vue'
import AdminHome from '../components/backend/Home.vue'
import Home from '../components/frontend/Home.vue'
import Login from '../components/auth/Login.vue'

// ================================================
import TagsMain from '../components/backend/tags/Main.vue'
import TagsList from '../components/backend/tags/List.vue'
import NewTag from '../components/backend/tags/New.vue'
import Tag from '../components/backend/tags/View.vue'
  // ================================================


// ================================================

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    children: [{
      path: 'home',
      name: 'admin_home',
      component: AdminHome
    }, {
      path: 'tags',
      name: 'tags_main',
      component: TagsMain,
      children: [{
        path: '/',
        name: 'tags_list',
        component: TagsList
      }, {
        path: 'new',
        name: 'new_tag',
        component: NewTag
      }, {
        path: ':id',
        name: 'tag',
        component: Tag
      }]
    }, ]
  }, {
    path: '/',
    name: 'app-home',
    component: Home,
    children: [{
      path: '/login',
      component: Login
    }, ]
  }]
})
