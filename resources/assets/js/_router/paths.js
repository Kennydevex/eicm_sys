// ================================================
import AppBackend from '../components/backend/App.vue'
import Dashboard from '../_pages/backend/Dashboard.vue'
import Index from '../components/frontend/Index.vue'
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
import Manager from '../components/backend/manager/Index.vue'
import Settings from '../components/backend/settings/Index.vue'
import Help from '../components/backend/help/Index.vue'
  // ================================================


// ================================================

export default [{
    path: '/dashboard',
    component: AppBackend,
    meta: {
      requiresAuth: true,
      breadcrumb: true
    },
    children: [{
        path: '/',
        name: 'dashboard',
        meta: {
          breadcrumb: true
        },
        component: Dashboard
      },
      // =====================================================================
      {
        path: 'tags',
        component: TagsMain,
        meta: {
          breadcrumb: true
        },
        children: [{
          path: '/',
          name: 'tags_list',
          meta: {
            breadcrumb: true
          },
          component: TagsList
        }, {
          path: 'new',
          name: 'new_tag',
          meta: {
            breadcrumb: true
          },
          component: NewTag
        }, {
          path: ':id',
          name: 'tag',
          meta: {
            breadcrumb: true
          },
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
          meta: {
            breadcrumb: true
          },
          component: Articles
        }, {
          path: 'new',
          name: 'new_article',
          meta: {
            breadcrumb: true
          },
          component: CreateArticle
        }, {
          path: ':id',
          name: 'article',
          meta: {
            breadcrumb: true
          },
          component: Article
        }, {
          path: ':article_id',
          name: 'update_article',
          meta: {
            breadcrumb: true
          },
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
          meta: {
            breadcrumb: true
          },
          component: Categories
        }, {
          path: 'new',
          name: 'new_categories',
          meta: {
            breadcrumb: true
          },
          component: CreateCategory
        }, {
          path: ':id',
          name: 'category',
          meta: {
            breadcrumb: true
          },
          component: Categories
        }, {
          path: ':category_id',
          name: 'update_category',
          meta: {
            breadcrumb: true
          },
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
          meta: {
            breadcrumb: true
          },
          component: Users
        }, {
          path: 'newUser',
          name: 'newUser',
          meta: {
            breadcrumb: true
          },
          component: CreateUser
        }, {
          path: 'user/:id',
          name: 'user',
          meta: {
            breadcrumb: true
          },
          component: User
        }, {
          path: ':user_id',
          name: 'updateUser',
          meta: {
            breadcrumb: true
          },
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
          meta: {
            breadcrumb: true
          },
          component: Roles
        }, {
          path: 'new',
          name: 'new_role',
          meta: {
            breadcrumb: true
          },
          component: CreateRole
        }, {
          path: ':id',
          name: 'role',
          meta: {
            breadcrumb: true
          },
          component: Role
        }, {
          path: ':role_id',
          name: 'update_role',
          meta: {
            breadcrumb: true
          },
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
          meta: {
            breadcrumb: true
          },
          component: Permissions
        }, {
          path: 'new',
          name: 'new_permission',
          meta: {
            breadcrumb: true
          },
          component: CreatePermission
        }, {
          path: ':id',
          name: 'permission',
          meta: {
            breadcrumb: true
          },
          component: Permission
        }, {
          path: ':permission_id',
          name: 'update_permission',
          meta: {
            breadcrumb: true
          },
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
          meta: {
            breadcrumb: true
          },
          component: Entities
        }, {
          path: 'new',
          name: 'new_entity',
          meta: {
            breadcrumb: true
          },
          component: CreateEntity
        }, {
          path: ':id',
          name: 'entity',
          meta: {
            breadcrumb: true
          },
          component: Entity
        }, {
          path: ':entity_id',
          name: 'update_entity',
          meta: {
            breadcrumb: true
          },
          component: UpdateEntity
        }]
      },

      {
        path: 'settings',
        component: Settings,
        name: 'settings',
        meta: {
          breadcrumb: true
        },
      }, {
        path: 'manager',
        component: Manager,
        name: 'reports',
        meta: {
          breadcrumb: true
        },
      }, {
        path: 'help',
        component: Help,
        name: 'help',
        meta: {
          breadcrumb: true
        },
      },

    ]
  },
  // ======================================================================
  {
    path: '/',
    component: Index,
    children: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/login',
      component: Login,
      name: 'login',
    }]
  }
]
