const Menu = [ {
    title: 'Dashboard',
    name: 'dashboard',
  },
  // ===============================================
  {
    title: 'Gestão',
    name: 'reports',
  },
  // ===============================================
  {
    title: 'CMS',
    items: [{
        name: 'articles',
        title: 'Artigos',
      }, {
        name: 'categories',
        title: 'Categorias',
      }, {
        name: 'tags',
        title: 'Marcadores',
      },
    ]
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
