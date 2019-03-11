<template lang="html">
  <v-dialog
  v-model="showEditModel"
  max-width="1000"
  persistent
  >
  <v-card>
    <v-card-title class="headline">{{user.first_name}}</v-card-title>

    <v-card-text>
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
      color="green darken-1"
      flat="flat"
      @click="showEditModel = false"
      >
      Disagree
    </v-btn>

    <v-btn
    color="green darken-1"
    flat="flat"
    @click="showEditModel = false"
    >
    Agree
  </v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
props: ['user'],

  data () {
    return {
      user_id: '',
      showEditModel: false
    }
  },

  created () {
    window.getApp.$on('APP_USER_UPDATE_DIALOG', () => {
      this.showEditModel = (!this.showEditModel)
    });
  },
  // created () {
  //   window.getApp.$on('APP_USER_UPDATE_DIALOG', (user_id) => {
  //     this.showEditModel = (!this.showEditModel)
  //     this.user_id = user_id
  //     console.log(this.user);
  //   });
  // },
}
</script>

<style lang="css">
</style>
