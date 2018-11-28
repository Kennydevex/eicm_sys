<template lang="html">

  <v-toolbar clipped-left app fixed color="indigo darken-1" dark>
    <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title>EICM-GDC</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn href="mailto:kenny.devex@gmail.com">
      Admin
    </v-btn>

    <v-btn icon @click="handleFullScreen()">
      <v-icon>fullscreen</v-icon>
    </v-btn>

    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img src="http://i.pravatar.cc/300" alt="Estefanio Silva"/>
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>

<script>
import Util from '../../../_helpers/util'
export default {
  name: 'app-toolbar',

  data () {
    return {
      items: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Meu Perfil',
          click: (e) => {
            console.log(e);
          }
        },
        {
          icon: 'home',
          href: '#',
          title: 'Meu Sítio',
          click: (e) => {
            this.$router.push({path: '/'})
          }
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Configurações',
          click: (e) => {
            console.log(e);
          }
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Terminar Sessão',
          click: (e) => {
            this.logout()

          }
        }
      ],
    }
  },

  //  computed: {
  //   toolbarColor () {
  //     return this.$vuetify.options.extra.mainNav;
  //   }
  // },
  methods: {

    logout: function () {
      this.$store.commit('logout')
      this.$router.push('/login')
    },

    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
    },
    handleFullScreen () {
      Util.toggleFullScreen()
    }
  }
}
</script>

<style lang="css">
</style>
