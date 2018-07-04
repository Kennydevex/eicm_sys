<template>
  <v-app id="inspire">
    <side-bar :drawer="drawer"></side-bar>
    <nav-bar :drawer="drawer"  v-on:test="setDra"></nav-bar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

  <app-footer></app-footer>

</v-app>

</template>

<script>
import NavBar from './partials/NavBar'
import SideBar from './partials/SideBar'
import AppFooter from './partials/AppFooter'
export default {
  data: () => ({
    drawer: true
  }),

  methods:{
    setDra(){
      this.drawer= !this.drawer

    }
  },
  components: {
    'nav-bar': NavBar,
    'side-bar': SideBar,
    'app-footer': AppFooter,
  }
}
</script>
