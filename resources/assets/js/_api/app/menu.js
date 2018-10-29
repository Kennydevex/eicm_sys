const Menu = [
  // ===============================================
  {
    header: 'Genéricos'
  }, {
    title: 'Dashboard',
    group: 'general',
    icon: 'dashboard',
    name: 'dashboard',
  },
  // ===============================================
  {
    title: 'Gestão',
    group: 'general',
    icon: 'show_chart',
    name: 'reports',
  },
  // ===============================================
  {
    title: 'CMS',
    group: 'cms',
    component: 'cms',
    icon: 'web',
    items: [{
        name: 'articles',
        title: 'Artigos',
        component: 'articles'
      }, {
        name: 'categories',
        title: 'Categorias',
        component: 'categories'
      }, {
        name: 'tags',
        title: 'Marcadores',
        component: 'tags_list'
      },
      // {
      //   name: 'images',
      //   title: 'imagens',
      //   component: 'images'
      // },
    ]
  },
  // ===============================================
  {
    header: 'Sistema'
  }, {
    title: 'Sistema',
    group: 'system',
    component: 'system',
    icon: 'tune',
    items: [{
      name: 'users',
      title: 'Utilizadores',
      component: 'users'
    }, {
      name: 'roles',
      title: 'Funções',
      component: 'roles'
    }, {
      name: 'permissions',
      title: 'Permissóes',
      component: 'permissions'
    }, ]
  },
  // ===============================================
  {
    divider: true
  },
  // ===============================================
  {
    header: 'Parâmetros e Suporte'
  }, {
    title: 'Configuração',
    group: 'settings',
    component: 'settings',
    icon: 'build',
    items: [{
      name: 'entities',
      title: 'Entidades do sistema',
      component: 'entities'
    }, {
      name: 'folks',
      title: 'Registos do pessoal',
      component: 'folks'
    }, {
      title: 'Geral',
      icon: 'help',
      name: 'general',
    }]
  },
  // ===============================================
  {
    title: 'Ajuda',
    group: 'extra',
    icon: 'help',
    name: 'help',
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
