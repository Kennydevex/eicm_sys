// ================================================
import AppBackend from '../components/backend/App.vue'
import Dashboard from '../_pages/backend/Dashboard.vue'
import Index from '../components/frontend/Index.vue'
import Home from '../components/frontend/pages/Home.vue'
import Historia from '../components/frontend/pages/eicm/Historia.vue'
import ArtesGraficas from
  '../components/frontend/pages/cursos/ArtesGraficas.vue'
import ConstrucaoCivil from
  '../components/frontend/pages/cursos/ConstrucaoCivil.vue'
import Contabilidade from
  '../components/frontend/pages/cursos/Contabilidade.vue'
import Eletricidade from '../components/frontend/pages/cursos/Eletricidade.vue'
import Informatica from '../components/frontend/pages/cursos/Informatica.vue'
import Mecanica from '../components/frontend/pages/cursos/Mecanica.vue'
import Mecanotecnia from '../components/frontend/pages/cursos/Mecanotecnia.vue'
import Login from '../components/auth/Login.vue'
  // ================================================
import ArticlesHome from '../components/backend/articles/Index.vue'
import Articles from '../components/backend/articles/List.vue'
import Article from '../components/backend/articles/View.vue'
import UpdateArticle from '../components/backend/articles/Update.vue'
import CreateArticle from '../components/backend/articles/Create.vue'
import FilterArticle from '../components/backend/articles/Filtered.vue'
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
import TagsHome from '../components/backend/tags/Index.vue'
import Tags from '../components/backend/tags/List.vue'
import Tag from '../components/backend/tags/View.vue'
import UpdateTag from '../components/backend/tags/Update.vue'
import CreateTag from '../components/backend/tags/Create.vue'
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
import Settings from '../components/backend/settings/Index.vue'
import General from '../components/backend/settings/General.vue'
import FolksHome from '../components/backend/settings/folks/Index.vue'
import Folks from '../components/backend/settings/folks/List.vue'
import Folk from '../components/backend/settings/folks/View.vue'
import UpdateFolk from '../components/backend/settings/folks/Update.vue'
import CreateFolk from '../components/backend/settings/folks/Create.vue'
  // ================================================

import Manager from '../components/backend/manager/Index.vue'
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
        component: TagsHome,
        children: [{
          path: '/',
          name: 'tags',
          meta: {
            breadcrumb: true
          },
          component: Tags
        }, {
          path: 'new',
          name: 'new_tag',
          meta: {
            breadcrumb: true
          },
          component: CreateTag
        }, {
          path: 'view/:tag_id',
          name: 'tag',
          meta: {
            breadcrumb: true
          },
          component: Tag
        }, {
          path: 'update/:tag_id',
          name: 'update_tag',
          meta: {
            breadcrumb: true
          },
          component: UpdateTag
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
          path: 'view/:article_slug',
          name: 'article',
          meta: {
            breadcrumb: true
          },
          component: Article
        }, {
          path: 'update/:article_slug',
          name: 'update_article',
          meta: {
            breadcrumb: true
          },
          component: UpdateArticle
        }, {
          path: 'filter/:filter_key',
          name: 'filter_article',
          meta: {
            breadcrumb: true
          },
          component: FilterArticle
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
        path: 'settings',
        component: Settings,
        children: [{
          path: 'general',
          name: 'settings/general',
          meta: {
            breadcrumb: true
          },
          component: General
        }, {
          path: 'entities',
          name: 'settings_entities',
          meta: {
            breadcrumb: true
          },
          component: Entities
        }, {
          path: 'folks',
          name: 'folks',
          meta: {
            breadcrumb: true
          },
          component: Folks
        }, ]
      },



      {
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
      path: '/historia',
      name: 'history',
      component: Historia
    }, {
      path: '/artes_graficas',
      name: 'ag',
      component: ArtesGraficas
    }, {
      path: '/contabilidade',
      name: 'cont',
      component: Contabilidade
    }, {
      path: '/construcao_civil',
      name: 'ccv',
      component: ConstrucaoCivil
    }, {
      path: '/eletricidade_eletronica',
      name: 'elect',
      component: Eletricidade
    }, {
      path: '/informatica_de_gestao',
      name: 'inf',
      component: Informatica
    }, {
      path: '/mecanica',
      name: 'mec',
      component: Mecanica
    }, {
      path: '/mecanotecnia',
      name: 'mecan',
      component: Mecanotecnia
    }, {
      path: '/login',
      component: Login,
      name: 'login',
    }, {
      path: 'view/:article_id',
      name: 'frontArticle',
      component: Article
    }]
  }
]
