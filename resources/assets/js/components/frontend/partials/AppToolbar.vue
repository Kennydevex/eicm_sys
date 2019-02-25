<template lang="html">
  <v-toolbar
  app
  color="blue darken-1"
  dark
  height="55"
  card
  >
  <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
  <v-toolbar-title class="white--text">EICM-GDC</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <!-- ====================================================================== -->
    <v-btn to="/" flat>Início</v-btn>

    <template v-for="menu in menus">
      <v-btn to="/" flat v-if="!menu.submenus">{{menu.title}}</v-btn>
      <v-menu v-else :key="menu.id" offset-y :nudge-width="100" transition="scale-transition" origin="center center" hover>
        <v-btn
        slot="activator"
        flat
        >
        <span>{{menu.title}}</span>
        <v-icon dark>arrow_drop_down</v-icon>

      </v-btn>
      <v-list>
        <v-list-tile
        v-for="submenu in menu.submenus"
        :key="submenu.id"
        @click="menuLink(submenu.name)"
        >
        <v-list-tile-title>{{ submenu.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>


<!-- ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<v-btn flat>Contactos</v-btn>
<v-btn flat>Notícias</v-btn>

<template v-if="!currentUser">
  <!-- <v-btn flat to="/login">
  Entrar
</v-btn> -->
<v-btn color="primary" @click.stop="showAuthModel" icon><v-icon small>input</v-icon></v-btn>

</template>
<!-- ====================================================================== -->
<template v-else>
  <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition" z-index="100">
    <v-btn icon large flat slot="activator">
      <v-avatar size="30px">
        <img :src="image_src" alt="Estefanio Silva"/>
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
</template>
<!-- ====================================================================== -->
</v-toolbar-items>
</v-toolbar>
</template>

<script>
import menus from '../../../_api/app/frontMenu'
export default {
  data () {
    return {
      image_src: '/images/app/avatars/default.png',

      // =======================================
      // registerDialog: false,
      // =======================================
      fav: false,
      menus:menus,

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
          icon: 'dashboard',
          href: '#',
          title: 'Dashboard',
          click: (e) => {
            this.$router.push({ path: 'dashboard'})
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

  methods: {
    showAuthModel(){
      window.getApp.$emit('APP_SHOW_AUTH_MODEL')
    },
    logout: function () {
      this.$store.commit('logout')
      this.$router.push('/login')
    },

    menuLink: function (link) {
      this.$router.push('/'+link)
    },
  },

  computed: {
    currentUser: function () {
      return this.$store.getters.currentUser
    }
  },
}
</script>

<style lang="css">
</style>
