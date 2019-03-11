<template>
  <div class="" id="appRoop">
    <!-- <template v-if="!$route.meta.public"> -->
    <v-app id="inspire">
      <app-drawer class="app--drawer"></app-drawer>
      <app-toolbar class="app--toolbar"></app-toolbar>
      <v-content>
        <!-- Page Header -->
        <page-header v-if="$route.meta.breadcrumb"></page-header>
        <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div class="page-wrapper">
          <router-view></router-view>
        </div>
        <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <app-footer class="app--footer"></app-footer>
      </v-content>
      <!-- Go to top -->
      <app-fab></app-fab>
    </v-app>
    <!-- </template> -->

  </div>

</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AppDrawer from './partials/AppDrawer'
import AppToolbar from './partials/AppToolbar'
import PageHeader from './partials/PageHeader'
import AppFooter from './partials/AppFooter'
import AppFab from './partials/AppFab'
import MiniStatistic from './partials/widgets/statistic/MiniStatistic'
// import menu from '@/api/menu';
// import ThemeSettings from '@/components/ThemeSettings';
// import AppEvents from  './event';
export default {
  components: {
    VuePerfectScrollbar,
    AppDrawer,
    AppToolbar,
    PageHeader,
    AppFab,
    AppFooter,
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
