<template lang="html">
  <v-container grid-list-md>
    <v-layout>
      <v-flex xs12>
        <v-card flat>
          <v-card-title primary-title>
            <div>
              <h1 class="headline mb-0">Marcadores</h1>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<style lang="css">
</style>
