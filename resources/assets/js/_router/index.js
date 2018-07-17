import Vue from 'vue'
import Router from 'vue-router'

// ================================================
import Dashboard from '../components/backend/Dashboard.vue'
import AdminHome from '../components/backend/Home.vue'
import Home from '../components/frontend/pages/Home.vue'
import Login from '../components/auth/Login.vue'
  // ================================================
import TagsMain from '../components/backend/tags/Main.vue'
import TagsList from '../components/backend/tags/List.vue'
import NewTag from '../components/backend/tags/New.vue'
import Tag from '../components/backend/tags/View.vue'
  // ================================================
import ArticlesHome from '../components/backend/articles/Index.vue'
import Articles from '../components/backend/articles/List.vue'
import Article from '../components/backend/articles/View.vue'
import UpdateArticle from '../components/backend/articles/Update.vue'
import CreateArticle from '../components/backend/articles/Create.vue'
  // ================================================
import UsersHome from '../components/backend/users/Index.vue'
import Users from '../components/backend/users/List.vue'
import User from '../components/backend/users/View.vue'
import UpdateUser from '../components/backend/users/Update.vue'
import CreateUser from '../components/backend/users/Create.vue'
  // ================================================
import CategoriesHome from '../components/backend/categories/Index.vue'
import Categories from '../components/backend/categories/List.vue'
import Category from '../components/backend/categories/View.vue'
import UpdateCategory from '../components/backend/categories/Update.vue'
import CreateCategory from '../components/backend/categories/Create.vue'
  // ================================================
import EntitiesHome from '../components/backend/entities/Index.vue'
import Entities from '../components/backend/entities/List.vue'
import Entity from '../components/backend/entities/View.vue'
import UpdateEntity from '../components/backend/entities/Update.vue'
import CreateEntity from '../components/backend/entities/Create.vue'
  // ================================================
import PermissionsHome from '../components/backend/permissions/Index.vue'
import Permissions from '../components/backend/permissions/List.vue'
import Permission from '../components/backend/permissions/View.vue'
import UpdatePermission from '../components/backend/permissions/Update.vue'
import CreatePermission from '../components/backend/permissions/Create.vue'
  // ================================================
import RolesHome from '../components/backend/roles/Index.vue'
import Roles from '../components/backend/roles/List.vue'
import Role from '../components/backend/roles/View.vue'
import UpdateRole from '../components/backend/roles/Update.vue'
import CreateRole from '../components/backend/roles/Create.vue'
  // ================================================
  // import ImageHome from '../components/backend/images/Index.vue'
  // import Images from '../components/backend/images/List.vue'
  // import Image from '../components/backend/images/View.vue'
  // import UpdateImage from '../components/backend/images/Update.vue'
  // import CreateImage from '../components/backend/images/Create.vue'
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
        },
        // =====================================================================
        {
          path: 'tags',
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
        },
        // ======================================================================
        {
          path: 'articles',
          component: ArticlesHome,
          children: [{
            path: '/',
            name: 'articles',
            component: Articles
          }, {
            path: 'new',
            name: 'new_article',
            component: CreateArticle
          }, {
            path: ':id',
            name: 'article',
            component: Article
          }, {
            path: ':article_id',
            name: 'update_article',
            component: UpdateArticle
          }]

        },
        // ======================================================================
        {
          path: 'categories',
          component: CategoriesHome,
          children: [{
            path: '/',
            name: 'categories',
            component: Categories
          }, {
            path: 'new',
            name: 'new_categories',
            component: CreateCategory
          }, {
            path: ':id',
            name: 'category',
            component: Categories
          }, {
            path: ':category_id',
            name: 'update_category',
            component: UpdateCategory
          }]

        },
        // ======================================================================
        {
          path: 'users',
          component: UsersHome,
          children: [{
            path: '/',
            name: 'users',
            component: Users
          }, {
            path: 'new',
            name: 'new_user',
            component: CreateUser
          }, {
            path: ':id',
            name: 'user',
            component: User
          }, {
            path: ':user_id',
            name: 'update_user',
            component: UpdateUser
          }]
        },
        // ======================================================================
        {
          path: 'roles',
          component: RolesHome,
          children: [{
            path: '/',
            name: 'roles',
            component: Roles
          }, {
            path: 'new',
            name: 'new_role',
            component: CreateRole
          }, {
            path: ':id',
            name: 'role',
            component: Role
          }, {
            path: ':role_id',
            name: 'update_role',
            component: UpdateRole
          }]
        },
        // ======================================================================
        {
          path: 'permissions',
          component: PermissionsHome,
          children: [{
            path: '/',
            name: 'permissions',
            component: Permissions
          }, {
            path: 'new',
            name: 'new_permission',
            component: CreatePermission
          }, {
            path: ':id',
            name: 'permission',
            component: Permission
          }, {
            path: ':permission_id',
            name: 'update_permission',
            component: UpdatePermission
          }]
        },
        // ======================================================================
        {
          path: 'entities',
          component: EntitiesHome,
          children: [{
            path: '/',
            name: 'entities',
            component: Entities
          }, {
            path: 'new',
            name: 'new_entity',
            component: CreateEntity
          }, {
            path: ':id',
            name: 'entity',
            component: Entity
          }, {
            path: ':entity_id',
            name: 'update_entity',
            component: UpdateEntity
          }]
        },

      ]
    },
    // ======================================================================
    {
      path: '/',
      name: 'app-home',
      component: Home,
      children: [{
        path: '/login',
        component: Login
      }, ]
    }
    // ======================================================================
  ]
})
