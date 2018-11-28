<template lang="html">
  <v-dialog
  v-model="dialog"
  max-width="690"
  >
  <v-card>
    <v-img
    src="https://cdn.vuetifyjs.com/images/lists/ali.png"
    height="300px"
    >
    <v-layout
    column
    fill-height
    >

    <v-spacer></v-spacer>

    <v-card-title class="white--text pl-5 pt-5">
      <div class="display-1 pl-5 pt-5">{{name}}</div>
    </v-card-title>
  </v-layout>
</v-img>

<v-list two-line>
  <v-list-tile @click="">
    <v-list-tile-action>
      <v-icon color="indigo">phone</v-icon>
    </v-list-tile-action>

    <v-list-tile-content>
      <v-list-tile-title>{{phone}}</v-list-tile-title>
      <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
    </v-list-tile-content>

    <!-- <v-list-tile-action>
    <v-icon>chat</v-icon>
  </v-list-tile-action> -->
</v-list-tile>


<v-divider inset></v-divider>

<v-list-tile @click="">
  <v-list-tile-action>
    <v-icon color="indigo">mail</v-icon>
  </v-list-tile-action>

  <v-list-tile-content>
    <v-list-tile-title>{{email}}</v-list-tile-title>
    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
  </v-list-tile-content>
</v-list-tile>


<v-list-group
v-for="item in details"
v-model="item.active"
:key="item.title"
:prepend-icon="item.action"
no-action
>
<v-list-tile slot="activator">
  <v-list-tile-content>
    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
  </v-list-tile-content>
</v-list-tile>

<v-list-tile
v-for="subItem in item.items"
:key="subItem.title"
@click=""
>
<v-list-tile-content>
  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
</v-list-tile-content>

<v-list-tile-action>
  <v-icon>{{ subItem.action }}</v-icon>
</v-list-tile-action>
</v-list-tile>
</v-list-group>

</v-list>
</v-card>
</v-dialog>
</template>

<script>
export default {
  props: ['name','phone', 'email', 'details'],
  data () {
    return {
      dialog: false

    }
  },

  created () {
    window.getApp.$on('FRONT_SHOW_INFO_MODEL', () => {
      this.dialog = true
    });
  },

  methods: {

  }
}
</script>

<style lang="css">
</style>
