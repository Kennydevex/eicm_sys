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
