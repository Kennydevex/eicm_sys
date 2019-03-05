<template lang="html">
  <v-card color="white" flat tile mr-5>
    <v-container grid-list-xs,sm,md,lg,xl fluid>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center mt-3 mb-3>
          <h2>CONTACTOS</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <info></info>
        </v-flex>
        <v-flex xs12 sm6>
          <to-contact></to-contact>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import Info from './contactos/Info'
import ToContact from './contactos/ToContact'
export default {
  data: () => ({

  }),
  components: {
    Info,
    ToContact
  }
}
</script>
<style lang="scss" scoped>
</style>
