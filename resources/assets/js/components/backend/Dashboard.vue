<template>
  <div class="" id="appRoop">
    <!-- <template v-if="!$route.meta.public"> -->
    <v-app id="inspire">
      <app-drawer class="app--drawer"></app-drawer>
      <app-toolbar class="app--toolbar"></app-toolbar>

      <v-content>
        <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <router-view></router-view>
        <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
      </v-content>
    </v-app>
    <!-- </template> -->

  </div>

</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AppDrawer from './partials/AppDrawer.vue'
import AppToolbar from './partials/AppToolbar';
// import AppFab from '@/components/AppFab';
// import PageHeader from '@/components/PageHeader';
// import menu from '@/api/menu';
// import ThemeSettings from '@/components/ThemeSettings';
// import AppEvents from  './event';
export default {
  components: {
    VuePerfectScrollbar,
    AppDrawer,
    AppToolbar
  },
  created () {
    window.getApp = this
  },
}
</script>


<style lang="stylus" scoped>
.setting-fab
  top:50%!important;
  right:0;
  border-radius:0
  .page-wrapper
    min-height:calc(100vh - 64px - 50px - 81px );

    </style>
