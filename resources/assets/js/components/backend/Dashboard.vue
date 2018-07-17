<template>
  <v-app id="inspire">
    <v-navigation-drawer
    fixed
    v-model="drawer"
    app
    :mini-variant.sync="mini"
    hide-overlay
    stateless
    >

    <v-list dense>
      <!-- ================================================================== -->
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- <v-divider></v-divider> -->

      <!-- ================================================================== -->

      <v-list-tile to="home">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile to="home">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <!-- <v-toolbar app fixed clipped-left> -->
  <v-toolbar app fixed>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>EICM-GDC</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
    <router-view></router-view>
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
  </v-container>
</v-content>
<v-footer app fixed>
  <span>&copy; 2017</span>
</v-footer>
</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  }
}
</script>
