<template lang="html">
  <div class="">
    <v-app>
      <v-toolbar app>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <!-- ====================================================================== -->
          <template v-if="!currentUser">
            <v-btn flat to="/login">Entrar</v-btn>
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
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Entrar' },
      { title: 'Regsitar' },

    ],
    fav: true,
    menu: false,
    message: false,
    hints: true
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
  }

}
</script>

<style lang="css">
</style>
