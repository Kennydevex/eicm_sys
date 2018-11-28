<template lang="html">
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>


      <v-menu :nudge-width="100">
        <v-btn
        slot="activator"
        flat
        >
        <span>Escola</span>
        <v-icon dark>arrow_drop_down</v-icon>
      </v-btn>

      <v-list>
        <v-list-tile
        v-for="item in items"
        :key="item"
        @click=""
        >
        <v-list-tile-title v-text="item"></v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>

  <v-menu :nudge-width="100">
    <v-btn
    slot="activator"
    flat
    >
    <span>Escola</span>
    <v-icon dark>arrow_drop_down</v-icon>
  </v-btn>

  <v-list>
    <v-list-tile
    v-for="item in items"
    :key="item"
    @click=""
    >
    <v-list-tile-title v-text="item"></v-list-tile-title>
  </v-list-tile>
</v-list>
</v-menu>

<v-menu :nudge-width="100">
  <v-btn
  slot="activator"
  flat
  >
  <span>Escola</span>
  <v-icon dark>arrow_drop_down</v-icon>
</v-btn>

<v-list>
  <v-list-tile
  v-for="item in items"
  :key="item"
  @click=""
  >
  <v-list-tile-title v-text="item"></v-list-tile-title>
</v-list-tile>
</v-list>
</v-menu>

<v-menu :nudge-width="100" offset-y z-index="100" transition="slide-x-transition">
  <v-btn
  slot="activator"
  flat
  >
  <span>Escola</span>
  <v-icon dark>arrow_drop_down</v-icon>
</v-btn>

<v-list>
  <v-list-tile
  v-for="item in items"
  :key="item"
  @click=""
  >
  <v-list-tile-title v-text="item"></v-list-tile-title>
</v-list-tile>
</v-list>
</v-menu>

<v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition" z-index="100">
  <v-btn icon large flat slot="activator">
    <v-avatar size="30px">
      <img src="http://i.pravatar.cc/300" alt="Estefanio Silva"/>
    </v-avatar>
  </v-btn>
  <v-list class="pa-0">
    <v-list-tile v-for="(userMenu,index) in userMenus" :to="!userMenu.href ? { name: userMenu.name } : null" :href="userMenu.href" @click="userMenu.click" ripple="ripple" :disabled="userMenu.disabled" :target="userMenu.target" rel="noopener" :key="index">
      <v-list-tile-action v-if="userMenu.icon">
        <v-icon>{{ userMenu.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ userMenu.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-menu>
</v-toolbar-items>




<v-btn icon>
  <v-icon>search</v-icon>
</v-btn>

<v-btn icon>
  <v-icon>apps</v-icon>
</v-btn>

<v-btn icon>
  <v-icon>refresh</v-icon>
</v-btn>

<v-btn icon>
  <v-icon>more_vert</v-icon>
</v-btn>
</v-toolbar>
</template>

<script>
export default {

  data () {
    return {
      items: [
        'All', 'Family', 'Friends', 'Coworkers'
      ],

      userMenus: [
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
            console.log(e);
          }
        }
      ],
    }
  }
}
</script>

<style lang="css">
</style>
