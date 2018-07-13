<template lang="html">
  <div class="">
    <v-app>
      <v-toolbar
      app
      color="indigo darken-4"
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
        <v-btn flat>EICM-GDC</v-btn>
        <v-btn flat>Cursos</v-btn>
        <v-btn flat>Alunos</v-btn>
        <v-btn flat>Dinâmica</v-btn>
        <v-btn flat>Contactos</v-btn>

        <template v-if="!currentUser">
          <v-btn flat to="/login">
            Entrar
          </v-btn>
          <v-btn flat to="register">Registar</v-btn>
        </template>
        <!-- ====================================================================== -->
        <template v-else>
          <v-btn flat>Artigos</v-btn>
          <v-menu
          :close-on-content-click="false"
          :nudge-width="200"
          v-model="menu"
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
    <AppCaroucel></AppCaroucel>
  </section>
  <!-- ====================================================================== -->
  <section>
    <AppMission></AppMission>
  </section>
  <!-- ====================================================================== -->
  <section>
    <AppTeam></AppTeam>
  </section>
  <!-- ====================================================================== -->
  <section>
    <AppBlog></AppBlog>
  </section>
  <!-- ====================================================================== -->
  <section>
    <AppContact></AppContact>
  </section>
  <!-- ====================================================================== -->
  <section>
    <v-container fluid>
      <!-- ====================================================================== -->
      <router-view></router-view>
      <!-- ====================================================================== -->
    </v-container>
  </section>
  <section>
  </section>
</v-content>
<AppFooter app></AppFooter>
</v-app>
</div>
</template>

<script>
import AppCaroucel from './partials/AppCaroucel.vue'
import AppMission from './partials/AppMission.vue'
import AppSchoolMsg from './partials/AppSchoolMsg.vue'
import AppBlog from './partials/AppBlog.vue'
import AppContact from './partials/AppContact.vue'
import AppFooter from './partials/AppFooter.vue'
import AppTeam from './partials/AppTeam.vue'

export default {
  data: () => ({

  }),

  methods: {
    logout: function () {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  },

  computed: {
    currentUser: function () {
      return this.$store.getters.currentUser
    }
  },
  components: {
    AppCaroucel,
    AppMission,
    AppSchoolMsg,
    AppTeam,
    AppBlog,
    AppContact,
    AppFooter
  }

}
</script>

<style lang="css" scoped>

</style>
