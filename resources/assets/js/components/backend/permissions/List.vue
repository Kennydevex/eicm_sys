<template lang="html">
  <v-container grid-list-xl fluid>
    <div class="">
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
        color="blue darken-2"
        dark
        fab
        v-model="fab">
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>


      <v-btn
      fab
      dark
      small
      color="indigo"
      @click="createUserDialog = true">
      <v-icon>fa-user-plus</v-icon>
    </v-btn>

    <!-- Exemplo com router-link -->
    <!-- <v-btn fab dark small color="blue" :to="{name: 'newUser'}">
    <v-icon>fa-user-plus</v-icon>
  </v-btn> -->

  <v-btn
  fab
  dark
  small
  color="indigo"
  v-tooltip.top-center="'Teste de tooltip'">
  <v-icon>fa-cloud-download</v-icon>
</v-btn>

<v-btn
fab
dark
small
color="indigo">
<v-icon>fa-trash</v-icon>
</v-btn>

<v-btn
fab
dark
small
color="indigo">
<v-icon>fa-file-pdf-o</v-icon>
</v-btn>

<v-btn
fab
dark
small
color="indigo">
<v-icon>fa-file-excel-o</v-icon>
</v-btn>
</v-speed-dial>
</v-card>

<!-- ============================================================================= -->
<div class="">
  <v-layout row justify-center>
    <v-dialog v-model="createUserDialog" persistent max-width="940px">
      <v-card>
        <v-card-title class="blue text-blue">
          <span class="headline">Criar novo utilizador</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <creare-user-form></creare-user-form>
              </v-flex>
            </v-layout>
          </v-container>
          <small>Campos com (*) são obrigatórios</small>
        </v-card-text>
        <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancelar</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</v-layout>
<v-layout row wrap>
  <!-- mini statistic start -->
  <v-flex lg3 sm6 xs12>
    <mini-statistic
    icon="fa-users"
    title="200+"
    sub-title="Utilizadores ativo"
    color="indigo"
    >
  </mini-statistic>
</v-flex>
<v-flex lg3 sm6 xs12>
  <mini-statistic
  icon="fa-user"
  title="200+"
  sub-title="Utilizadores ativo"
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
<!-- mini statistic  end -->
</v-layout>
<v-divider></v-divider>

<v-layout row wrap>
  <v-flex xs12>
    <app-all-user></app-all-user>
  </v-flex>
</v-layout>

</div>
<!-- ============================================================================= -->
</div>
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
