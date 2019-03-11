<template>
  <v-container grid-list-xs,sm,md,lg,xl fluid>
    <v-card>
      <v-layout row wrap>
        <v-flex xs12>
          <eicm-location></eicm-location>

        </v-flex>
      </v-layout>
    </v-card>

      <v-card color="white" flat  class="mt-5">
        <v-card-title primary-title class="layout justify-center">
          <h3>Contactar a Escola</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <info></info>
            </v-flex>
            <v-flex xs12 sm6>
              <to-contact></to-contact>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>

  </v-container>
</template>
<script>
import EicmLocation from '../../util/maps/EicmLocation'
import Info from '../partials/contactos/Info'
import ToContact from '../partials/contactos/ToContact'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    EicmLocation,
    Info,
    ToContact
  }
}
</script>
<style lang="scss" scoped>
</style>
