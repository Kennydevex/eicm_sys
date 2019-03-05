<template lang="html">
  <v-container grid-list-xl fluid>
    <v-card id="create">
      <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
      fixed="">
      <v-btn
      slot="activator"
      color="indigo"
      dark
      fab
      v-model="fab">
      <v-icon>fa-user</v-icon>
      <v-icon>close</v-icon>
    </v-btn>


    <v-btn
    fab
    dark
    small
    color="amber accent-4"
    @click="createUserDialog = true">
    <v-icon>fa-user-plus</v-icon>
  </v-btn>


  <v-btn
  fab
  dark
  small
  color="teal "
  v-tooltip.top-center="'Teste de tooltip'">
  <v-icon>fa-cloud-download</v-icon>
</v-btn>

<v-btn
fab
dark
small
color="red lighten-1">
<v-icon>fa-trash</v-icon>
</v-btn>

</v-speed-dial>
</v-card>

<!-- ============================================================================= -->

<v-layout row wrap>
  <!-- mini statistic start -->
  <v-flex lg3 sm6 xs12>
    <mini-statistic
    icon="fa-users"
    :title="users.length"
    sub-title="Total de Utilizadores"
    color="indigo"
    >
  </mini-statistic>
</v-flex>
<v-flex lg3 sm6 xs12>
  <mini-statistic
  icon="fa-user"
  title="200+"
  sub-title="Utilizadores ativos"
  color="red"
  >
</mini-statistic>
</v-flex>
<v-flex lg3 sm6 xs12>
  <mini-statistic
  icon="fa fa-twitter"
  title="200+"
  sub-title="Followers"
  color="light-blue"
  >
</mini-statistic>
</v-flex>
<v-flex lg3 sm6 xs12>
  <mini-statistic
  icon="fa fa-instagram"
  title="50+"
  sub-title="Shots"
  color="purple"
  >
</mini-statistic>
</v-flex>
</v-layout>
<v-divider></v-divider>

<v-layout row wrap>
  <v-flex xs12>
    <v-dialog v-model="createUserDialog" persistent max-width="940px">
      <creare-user-form></creare-user-form>
    </v-dialog>
  </v-flex>
  <v-flex xs12>
    <app-all-user></app-all-user>
  </v-flex>
</v-layout>

</v-container>

</template>

<script>
import CreareUserForm from '../partials/widgets/forms/user/CreateUserForm'
import MiniStatistic from '../partials/widgets/statistic/MiniStatistic'
import AppAllUser from '../partials/datas/AppAllUser'


export default {
  data: () => ({
    createUserDialog: false,

    direction: 'top',
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'scale-transition',
    msg: 'Tooltip example'
  }),

  components: {
    CreareUserForm,
    MiniStatistic,
    AppAllUser,
  },

  created () {
    window.getApp.$on('APP_SHOW_CREATE_USER_DIALOG', () => {
      this.createUserDialog = (!this.createUserDialog);
    });
  },

  computed: {
    users: function () {
      return this.$store.getters.users
    },
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },

  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  },


}
</script>

<style lang="stylus" scoped>
.icon_btn
  height:auto;
  .fab-text
    rgba(0,0,0,0.54);
    </style>
