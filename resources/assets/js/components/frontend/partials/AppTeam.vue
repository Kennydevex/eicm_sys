<template lang="html">
  <v-container>

    <v-layout
    align-center
    row
    justify-center
    >

    <v-flex xs12 sm6 text-xs-center pa-5>
      <v-flex pa-3>
        <v-avatar
        class="team-avatar"
        size="200"
        color="grey lighten-4"
        @click="showTeam1()"
        >
        <img src="https://placeimg.com/80/80/people" alt="avatar">
      </v-avatar>
    </v-flex>
    <v-flex>
      <h2>Lorem ipsum dolor sit ame</h2>
      <h3>Lorem ipsum dolor sit ame</h3>
      <h4>Lorem ipsum dolor sit ame</h4>
    </v-flex>
  </v-flex>
  <v-flex xs12 sm6 text-xs-center pa-5>
    <v-flex pa-3>
      <v-avatar
      class="team-avatar"
      size="200"
      color="grey lighten-4"
      @click="showTeam2()"
      >
      <img src="https://placeimg.com/80/80/people" alt="avatar">
    </v-avatar>
  </v-flex>
  <v-flex>
    <h2>Lorem ipsum dolor sit ame</h2>
    <h3>Lorem ipsum dolor sit ame</h3>
    <h4>Lorem ipsum dolor sit ame</h4>
  </v-flex>
</v-flex>
<v-flex xs12 sm6 text-xs-center pa-5>
  <v-flex pa-3>
    <v-avatar
    class="team-avatar"
    size="200"
    color="grey lighten-4"
    @click="showTeam3()"
    >
    <img src="https://placeimg.com/80/80/people" alt="avatar">
  </v-avatar>
</v-flex>
<v-flex>
  <h2>Lorem ipsum dolor sit ame</h2>
  <h3>Lorem ipsum dolor sit ame</h3>
  <h4>Lorem ipsum dolor sit ame</h4>
</v-flex>
</v-flex>

<front-team-info :phone="teamPhone" :email="teamEmail" :name="teamName" :details="teamDetails"></front-team-info>


</v-layout>
</v-container>
</template>

<script>
import FrontTeamInfo from './widgets/dialogs/FrontTeamInfo.vue'
export default {
  data: () => ({
    teamName: '',
    teamPhone: '',
    teamEmail: '',
    teamDetails: [],

    teamDetails1: [
      {
        action: 'local_offer',
        title: 'Promotions',
        items: [
          { title: 'List Item1' }
        ]
      }
    ],
    teamDetails2: [
      {
        action: 'local_offer',
        title: 'Promotions',
        items: [
          { title: 'List Item2' }
        ]
      }
    ],
    teamDetails3: [
      {
        action: 'local_offer',
        title: 'Promotions',
        items: [
          { title: 'List Item3' }
        ]
      }
    ]
  }),

  methods: {

    handleShowFrontDialogInfo(){
      window.getApp.$emit('FRONT_SHOW_INFO_MODEL')
    },

    showTeam1() {
      this.setTeamData('Estefanio Silva', '999999', 'blaballalal', this.teamDetails1)
      this.handleShowFrontDialogInfo()

    },

    showTeam2() {
      this.setTeamData('Estefanio Silva2', '999999', 'blaballalal', this.teamDetails2)
      this.handleShowFrontDialogInfo()
    },

    showTeam3() {
      this.setTeamData('Estefanio Silva3', '999999', 'blaballalal', this.teamDetails3)
      this.handleShowFrontDialogInfo()
    },

    setTeamData(teamName, teamPhone, teamEmail, teamDetails) {
      this.teamName = teamName
      this.teamPhone = teamPhone
      this.teamEmail = teamEmail
      this.teamDetails = teamDetails
    }
  },

  components: {
    FrontTeamInfo,

  }
}
</script>

<style lang="stylus" scoped>
.team-avatar{
  cursor: pointer;
}
</style>
