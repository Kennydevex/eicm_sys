<template lang="html">
  <v-navigation-drawer
  id="appDrawer"
  :mini-variant.sync="mini"
  app
  v-model="drawer"
  hide-overlay
  stateless
  clipped
  width="260"
  >
  <v-toolbar flat class="transparent">

    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn
          icon
          @click.stop="mini = !mini"
          >
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</v-toolbar>
<vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">

  <!-- ==================================================================== -->
  <v-list dense>
    <template v-for="item in items">
      <v-layout
      v-if="item.heading"
      :key="item.heading"
      row
      align-center
      >
      <v-flex xs6>
        <v-subheader v-if="item.heading">
          {{ item.heading }}
        </v-subheader>
      </v-flex>
      <v-flex xs6 class="text-xs-center">
        <a href="#!" class="body-2 black--text">EDIT</a>
      </v-flex>
    </v-layout>
    <v-list-group
    v-else-if="item.children"
    v-model="item.model"
    :key="item.text"
    :prepend-icon="item.model ? item.icon : item['icon-alt']"
    append-icon=""
    >
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>
          {{ item.text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile
    v-for="(child, i) in item.children"
    :key="i"
    @click=""
    :to="child.link"
    >
    <v-list-tile-action v-if="child.icon">
      <v-icon>{{ child.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>
        {{ child.text }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list-group>

<v-list-tile v-else :key="item.text" @click=""  :to="item.link">
  <v-list-tile-action>
    <v-icon>{{ item.icon }}</v-icon>
  </v-list-tile-action>
  <v-list-tile-content>
    <v-list-tile-title>
      {{ item.text }}
    </v-list-tile-title>
  </v-list-tile-content>
</v-list-tile>
</template>
</v-list>
<!-- ==================================================================== -->
</vue-perfect-scrollbar>

</v-navigation-drawer>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'appDrawer',
  data: () => ({
    drawer: true,
    mini: true,
    right: null,
    scrollSettings: {
      maxScrollbarLength: 160
    },

    items: [
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'show_chart',
        text: 'Gestão',
        model: false,
        children: [

        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'web',
        text: 'CMS',
        model: false,
        children: [
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
          { icon: 'art_track', text: 'Artigos', link: 'articles' },
          { icon: 'folder', text: 'Categorias', link: 'categories' },
          { icon: 'bookmark', text: 'Marcadores', link: {name: 'users'} },
          { icon: 'photo', text: 'Imagens', link: 'images' },
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'tune',
        text: 'Sistema',
        model: false,
        children: [
          { icon: 'group', text: 'Utilizadores', link: {name: 'users'} },
          { icon: 'vpn_key', text: 'Permissões', link: 'permissions' },
          { icon: 'assignment_turned_in', text: 'Papeis', link: 'roles'},
        ]
      },
      { icon: 'settings', text: 'Settings', link: 'home1'},
      { icon: 'help', text: 'Help', link: 'home2'},
    ]
  }),

  computed: {
   // computeGroupActive () {
   //   return true;
   // },
   // computeLogo () {
   //   return '/static/m.png';
   // },

   sideToolbarColor () {
     return this.$vuetify.options.extra.sideNav;
   }
 },
 created () {
   window.getApp.$on('APP_DRAWER_TOGGLED', () => {
     this.drawer = (!this.drawer);
   });
 },

  components: {
    VuePerfectScrollbar,
  },
}
</script>

<style lang="stylus" scoped>
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';
#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto

    </style>
