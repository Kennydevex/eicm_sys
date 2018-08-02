<template>
  <v-app id="inspire">
    <v-navigation-drawer
    :mini-variant.sync="mini"
    app
    v-model="drawer"
    hide-overlay
    stateless
    clipped
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

</v-navigation-drawer>

<v-toolbar clipped-left app fixed color="indigo darken-1" dark>
  <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  <v-toolbar-title>EICM-GDC</v-toolbar-title>
  <v-spacer></v-spacer>

  <v-btn icon dark>
    <v-icon dark>fa-bell-o</v-icon>
  </v-btn>

  <v-btn icon dark>
    <v-icon dark>fa-user-circle-o</v-icon>
  </v-btn>

</v-toolbar>
<v-content>
  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
  <router-view></router-view>
  <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
</v-container>
</v-content>

<v-footer class="pa-3 text-color='red'" app fixed clipped color="indigo darken-1" dark>
  <v-spacer></v-spacer>
  <div>&copy; {{ new Date().getFullYear() }}</div>
</v-footer>
</v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    mini: true,
    right: null,

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
  props: {
    source: String
  },
  mounted () {
    console.log(this.$vuetify.breakpoint)
  },
}
</script>
