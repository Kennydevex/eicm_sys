const Menu = [
  // ===============================================
  {
    header: 'Apps'
  }, {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'dashboard',
  },
  // ===============================================
  {
    title: 'Gestão',
    group: 'apps',
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
    }, {
      name: 'images',
      title: 'imagens',
      component: 'images'
    }, ]
  },
  // ===============================================
  {
    header: 'UI Elements'
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
    header: 'Extras'
  }, {
    title: 'Settings',
    group: 'extra',
    icon: 'settings',
    name: 'settings',
  },
  // ===============================================
  {
    title: 'help',
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
