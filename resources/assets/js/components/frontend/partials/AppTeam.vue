<template lang="html">
  <v-card color="white" flat tile mr-5>
  
  <v-container>
  <v-layout row wrap>
     <v-flex xs12 text-xs-center mt-3 mb-3>
        <h2>EQUIPA</h2>
      </v-flex>
  
  </v-layout>
    <v-layout align-center row justify-center>
     
      <v-flex xs12 sm6 text-xs-center pa-5>
        <v-flex pa-3>
          <v-avatar class="team-avatar" size="200" color="grey lighten-4" @click="showTeam1()">
            <img src="https://placeimg.com/80/80/people" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <h2>Direção</h2>
          <h3>Nome Apelido</h3>
          <h4>Qualificação</h4>
        </v-flex>
      </v-flex>
      <v-flex xs12 sm6 text-xs-center pa-5>
        <v-flex pa-3>
          <v-avatar class="team-avatar" size="200" color="grey lighten-4" @click="showTeam2()">
            <img src="https://placeimg.com/80/80/people/sepia" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <h2>Subdireção</h2>
          <h3>Nome Apelido</h3>
          <h4>Qualificação</h4>
        </v-flex>
      </v-flex>
      <v-flex xs12 sm6 text-xs-center pa-5>
        <v-flex pa-3>
          <v-avatar class="team-avatar" size="200" color="grey lighten-4" @click="showTeam3()">
            <img src="https://placeimg.com/80/80/people/grayscale" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <h2>Secretaria</h2>
          <h3>Nome Apelido</h3>
          <h4>Qualificação</h4>
        </v-flex>
      </v-flex>
  
      <front-team-info :phone="teamPhone" :email="teamEmail" :name="teamName" :details="teamDetails"></front-team-info>
  
  
    </v-layout>
  </v-container>
</v-card>

</template>

<script>
  import FrontTeamInfo from "./widgets/dialogs/FrontTeamInfo.vue";
  export default {
    data: () => ({
      teamName: "",
      teamPhone: "",
      teamEmail: "",
      teamDetails: [],
  
      teamDetails1: [{
        action: "local_offer",
        title: "Promotions",
        items: [{
          title: "List Item1"
        }]
      }],
      teamDetails2: [{
        action: "local_offer",
        title: "Promotions",
        items: [{
          title: "List Item2"
        }]
      }],
      teamDetails3: [{
        action: "local_offer",
        title: "Promotions",
        items: [{
          title: "List Item3"
        }]
      }]
    }),
  
    methods: {
      handleShowFrontDialogInfo() {
        window.getApp.$emit("FRONT_SHOW_INFO_MODEL");
      },
  
      showTeam1() {
        this.setTeamData(
          "Estefanio Silva",
          "999999",
          "blaballalal",
          this.teamDetails1
        );
        this.handleShowFrontDialogInfo();
      },
  
      showTeam2() {
        this.setTeamData(
          "Estefanio Silva2",
          "999999",
          "blaballalal",
          this.teamDetails2
        );
        this.handleShowFrontDialogInfo();
      },
  
      showTeam3() {
        this.setTeamData(
          "Estefanio Silva3",
          "999999",
          "blaballalal",
          this.teamDetails3
        );
        this.handleShowFrontDialogInfo();
      },
  
      setTeamData(teamName, teamPhone, teamEmail, teamDetails) {
        this.teamName = teamName;
        this.teamPhone = teamPhone;
        this.teamEmail = teamEmail;
        this.teamDetails = teamDetails;
      }
    },
  
    components: {
      FrontTeamInfo
    }
  };
</script>

<style lang="stylus" scoped>
.team-avatar {
  cursor: pointer;
}
</style>
