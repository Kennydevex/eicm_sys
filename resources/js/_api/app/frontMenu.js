const Menu = [{
    id: 1,
    title: 'EICM',
    name: 'eicm',
    submenus: [{
      id: 1,
      name: 'historia',
      title: 'História',
    }, {
      id: 2,
      name: 'corpo_diretivo',
      title: 'Corpo Diretivo',
    }, {
      id: 3,
      name: 'missao_visao_e_valores',
      title: 'Missão, Visão e Valores',
    }]
  }, {
    id: 2,
    title: 'Alunos',
    name: 'alunos',
    submenus: [{
      id: 1,
      name: 'quadro_de_honra',
      title: 'Quadro de Honra',
    }, {
      id: 2,
      name: 'comissao_de_finalista',
      title: 'Comissão de Finalista',
    }, {
      id: 3,
      name: 'disporto',
      title: 'Disporto',
    }, {
      id: 4,
      name: 'mensagem_do_diretor',
      title: 'Mensagem do Diretor',
    }]
  }, {
    id: 3,
    title: 'Dinamicas',
    name: 'dinamicas',
    submenus: [{
      id: 1,
      name: 'apoio_a_vocacao_profissional',
      title: 'Apoio à Vocação Profissional',
    }, {
      id: 2,
      name: 'acao_social',
      title: 'Ação Social',
    }, {
      id: 3,
      name: 'atividades',
      title: 'Atividades',
    }]
  }, {
    id: 4,
    title: 'Cursos',
    name: 'cursos',
    submenus: [{
      id: 1,
      name: 'acp',
      title: 'ACP',
    }, {
      id: 2,
      name: 'artes_graficas',
      title: 'Artes Gráficas',
    }, {
      id: 3,
      name: 'contabilidade',
      title: 'Contabilidade',
    }, {
      id: 4,
      name: 'construcao_civil',
      title: 'Construção Cívil',
    }, {
      id: 5,
      name: 'eletricidade_eletronica',
      title: 'Eletricidade Eletrónica',
    }, {
      id: 6,
      name: 'informatica_de_gestao',
      title: 'Informática de Gestão',
    }, {
      id: 7,
      name: 'mecanica',
      title: 'Mecânica',
    }, {
      id: 8,
      name: 'mecanotecnia',
      title: 'Mecanotécnia',
    }]
  }, {
    id: 5,
    title: 'Contactos',
    name: 'contactos',
  }, {
    id: 6,
    title: 'Notícias',
    name: 'noticias',
  },
  // ===============================================
];


// reorder menu
Menu.forEach((item) => {
  if (item.submenus) {
    item.submenus.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
