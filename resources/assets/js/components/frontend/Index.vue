<template lang="html">
  <div class="">
    <v-app app>
      <v-toolbar
      app
      color="blue darken-1"
      dark
      height="75"
      card
      >
      <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">EICM-GDC</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- ====================================================================== -->
        <v-btn flat>Início</v-btn>
        <v-menu offset-y>
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
    <v-menu offset-y>
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
<v-menu offset-y>
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
<v-menu offset-y>
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
<v-btn flat>Blog</v-btn>


<template v-if="!currentUser">
  <v-btn flat to="/login">
    Entrar
  </v-btn>
  <!-- <v-btn flat @click.stop="showRegsiterDialog">Registar</v-btn> -->
  <v-btn flat @click.stop="showAuthModel"><v-icon>fa fa-sign-in fa-1x</v-icon></v-btn>
</template>
<!-- ====================================================================== -->
<template v-else>
  <v-btn flat>Artigos</v-btn>
  <v-menu
  :close-on-content-click="false"
  :nudge-width="200"
  offset-y
  >
  <v-btn slot="activator" flat><v-icon>more_vert</v-icon></v-btn>
  <v-card>
    <v-list>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="http://vuetifyjs.com/static/doc-images/john.jpg" alt="John">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{currentUser.first_name}} {{currentUser.last_name}}</v-list-tile-title>
          <v-list-tile-sub-title>{{currentUser.email}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
          :class="fav ? 'red--text' : ''"
          icon
          @click="fav = !fav"
          >
          <v-icon>favorite</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
  <v-divider></v-divider>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn flat to="/dashboard">Dashboard</v-btn>
    <v-btn flat @click="logout">Sair</v-btn>
  </v-card-actions>
</v-card>
</v-menu>
</template>
<!-- ====================================================================== -->
</v-toolbar-items>
</v-toolbar>
<v-content>
<!-- ====================================================================== -->
<section>
  <!-- ====================================================================== -->
  <AppAuth :authModel="authModel" v-on:setAuthModel="showAuthModel"></AppAuth>
  <!-- ============================== Regsiter Diagol =============================== -->
  <router-view></router-view>
  <!-- ====================================================================== -->
</section>
<!-- ====================================================================== -->
<!-- ====================================================================== -->
</v-content>
<AppFooter app></AppFooter>
</v-app>
</div>
</template>

<script>
import AppFooter from './partials/AppFooter.vue'
import AppAuth from '../auth/AppAuth.vue'
// import Register from '../auth/Register.vue'
export default {


  data: () => ({

    authModel: false,
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

    }
  }),

  methods: {
    showAuthModel(){
      this.authModel = !this.authModel
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
  components: {
    AppFooter,
    AppAuth,
    // Register
  }
}
</script>

<style lang="css" scoped>

</style>
