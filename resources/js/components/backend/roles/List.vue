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
        <v-icon>fa-id-card</v-icon>
        <v-icon>fa-id-card-o</v-icon>
      </v-btn>

      <v-btn
      fab
      dark
      small
      color="amber accent-4"
      @click="handleToggleCreateRoleDialog">
      <v-icon>fa-plus</v-icon>
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
<div class="">

  <!-- ============================================================================= -->
  <!-- ============================================================================= -->
  <v-layout row justify-center>
    <create-role-form></create-role-form>
  </v-layout>
  <!-- ============================================================================= -->
  <!-- ============================================================================= -->

  <!-- mini statistic start -->
  <v-layout row wrap>
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
</v-layout>
<!-- mini statistic  end -->
<v-divider></v-divider>

<v-layout row wrap>

  <v-flex xs12>
    <app-all-roles></app-all-roles>
  </v-flex>

  <!-- <v-flex xs6>
  <app-all-roles></app-all-roles>
</v-flex> -->
</v-layout>

</div>
<!-- ============================================================================= -->
</div>
</v-container>

</template>

<script>
import CreateRoleForm from '../partials/widgets/forms/role/CreateRoleForm'
import MiniStatistic from '../partials/widgets/statistic/MiniStatistic'
import AppAllRoles from '../partials/datas/AppAllRoles'

import {handleModels} from '../../../_mixins/HandleModels'



export default {
  mixins: [handleModels],

  data: () => ({
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
    CreateRoleForm,
    AppAllRoles,
    MiniStatistic,
  },

  computed: {

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
