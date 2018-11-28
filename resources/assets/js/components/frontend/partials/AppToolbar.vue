<template lang="html">
  <v-toolbar
  app
  color="blue darken-1"
  dark
  height="55"
  card
  >
  <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
  <v-toolbar-title class="white--text">EICM-GDC</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <!-- ====================================================================== -->
    <v-btn flat>Início</v-btn>
    <v-menu offset-y :nudge-width="100" transition="scale-transition" origin="center center" hover>
      <v-btn
      slot="activator"
      flat
      >
      <span>Escola</span>
      <v-icon dark>arrow_drop_down</v-icon>

    </v-btn>
    <v-list>
      <v-list-tile
      v-for="eicminfo in submenus.eicminfos"
      :key="eicminfo.id"
      @click=""
      >
      <v-list-tile-title>{{ eicminfo.name }}</v-list-tile-title>
    </v-list-tile>
  </v-list>
</v-menu>
<!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<v-menu offset-y :nudge-width="100" transition="scale-transition" origin="center center">
  <v-btn
  slot="activator"
  flat
  >

  <span>Cursos</span>
  <v-icon dark>arrow_drop_down</v-icon>
</v-btn>
<v-list>
  <v-list-tile
  v-for="curso in submenus.cursos"
  :key="curso.id"
  @click=""
  >
  <v-list-tile-title>{{ curso.name }}</v-list-tile-title>
</v-list-tile>
</v-list>
</v-menu>
<!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<v-menu offset-y :nudge-width="100" transition="scale-transition" origin="center center">
  <v-btn
  slot="activator"
  flat
  >

  <span>Alunos</span>
  <v-icon dark>arrow_drop_down</v-icon>
</v-btn>
<v-list>
  <v-list-tile
  v-for="aluno in submenus.alunos"
  :key="aluno.id"
  @click=""
  >
  <v-list-tile-title>{{ aluno.name }}</v-list-tile-title>
</v-list-tile>
</v-list>
</v-menu>
<!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<v-menu offset-y :nudge-width="100" transition="scale-transition" origin="center center">
  <v-btn
  slot="activator"
  flat
  >

  <span>Dinâmica</span>
  <v-icon dark>arrow_drop_down</v-icon>
</v-btn>
<v-list>
  <v-list-tile
  v-for="dinamica in submenus.dinamicas"
  :key="dinamica.id"
  @click=""
  >
  <v-list-tile-title>{{ dinamica.name }}</v-list-tile-title>
</v-list-tile>
</v-list>
</v-menu>
<!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<v-btn flat>Contactos</v-btn>

<template v-if="!currentUser">
  <v-btn flat to="/login">
    Entrar
  </v-btn>
  <!-- <v-btn flat @click.stop="showRegsiterDialog">Registar</v-btn> -->
  <v-btn color="primary" @click.stop="showAuthModel" icon><v-icon small>input</v-icon></v-btn>

</template>
<!-- ====================================================================== -->
<template v-else>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition" z-index="100">
    <v-btn icon large flat slot="activator">
      <v-avatar size="30px">
        <img src="http://i.pravatar.cc/300" alt="Estefanio Silva"/>
      </v-avatar>
    </v-btn>
    <v-list class="pa-0">
      <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
        <v-list-tile-action v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<!-- ====================================================================== -->
</v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  data () {
    return {

      // =======================================
      // registerDialog: false,
      // =======================================
      fav: false,
      submenus: {
        alunos: [
          {id: 1, name: 'Quadro de Honra'},
          {id: 2, name: 'Comissão de Finalista'},
          {id: 3, name: 'Disporto'},
          {id: 4, name: 'Mensagem do Diretor'}
        ],
        dinamicas: [
          {id: 1, name: 'Ano Complimentar Profissionalizante'},
          {id: 2, name: 'Apoio à Vocação Profissional'},
          {id: 3, name: 'Ação Social'},
          {id: 4, name: 'Atividades'}
        ],
        cursos: [
          {id: 1, name: 'Artes Gráficas'},
          {id: 2, name: 'Construção Cívil'},
          {id: 3, name: 'Eletricidade'},
          {id: 4, name: 'Informática'},
          {id: 5, name: 'Mecânica'},
          {id: 6, name: 'Mecanotécnia'}
        ],
        eicminfos: [
          {id: 1, name: 'História'},
          {id: 2, name: 'Corpo Diretivo'},
        ],
      },
      items: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Meu Perfil',
          click: (e) => {
            console.log(e);
          }
        },
        {
          icon: 'dashboard',
          href: '#',
          title: 'Dashboard',
          click: (e) => {
            this.$router.push({ path: 'dashboard'})
          }
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Terminar Sessão',
          click: (e) => {
            this.logout()
          }
        }
      ],
    }
  },

  methods: {
    showAuthModel(){
      window.getApp.$emit('APP_SHOW_AUTH_MODEL')
    },
    logout: function () {
      this.$store.commit('logout')
      this.$router.push('/login')
    },
  },

  computed: {
    currentUser: function () {
      return this.$store.getters.currentUser
    }
  },
}
</script>

<style lang="css">
</style>
