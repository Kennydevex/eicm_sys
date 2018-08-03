<template lang="html">

        <v-toolbar clipped-left app fixed color="indigo darken-1" dark>
          <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
          <v-toolbar-title>EICM-GDC</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon dark>
            <v-icon dark>fa-bell-o</v-icon>
          </v-btn>

          <v-btn icon dark>
            <v-icon dark>fa-user-circle-o</v-icon>
          </v-btn>

        </v-toolbar>
</template>

<script>
export default {
   name: 'app-toolbar',

  //  computed: {
  //   toolbarColor () {
  //     return this.$vuetify.options.extra.mainNav;
  //   }
  // },
 methods: {

   handleDrawerToggle () {
     window.getApp.$emit('APP_DRAWER_TOGGLED');
   },
   // handleFullScreen () {
   //   Util.toggleFullScreen();
   // }
 }
}
</script>

<style lang="css">
</style>
