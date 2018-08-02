<template lang="html">
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-card flat color="transparent">
          <v-card-title primary-title>
            <div>
              <h3 class="headline ma-0">Gestão de Utilizadores</h3>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    
    }
  }
}
</script>

<style lang="css">
</style>
