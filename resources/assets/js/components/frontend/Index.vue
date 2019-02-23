<template lang="html">
  <div class="">
    <v-app app>
      <AppToolbar app></AppToolbar>

      <v-content>
        <section>
          <!-- ====================================================================== -->
          <!-- ============================== Regsiter Diagol =============================== -->
          <router-view></router-view>
          <!-- ====================================================================== -->
        </section>
      </v-content>
      <AppAuth></AppAuth>
      <AppFooter app></AppFooter>
    </v-app>
  </div>
</template>

<script>
import AppFooter from './partials/AppFooter.vue'
import AppToolbar from './partials/AppToolbar.vue'
import AppAuth from '../auth/AppAuth.vue'
// import Register from '../auth/Register.vue'
// ======================================================================
// ======================================================================


export default {
  data: () => ({
  }),

  created () {
    window.getApp = this
  },


  components: {
    AppFooter,
    AppToolbar,
    AppAuth,
    // Register
  },
}
</script>

<style lang="css" scoped>

</style>
