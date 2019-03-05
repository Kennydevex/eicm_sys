<template>
  <v-container grid-list-xs,sm,md,lg,xl fluid>
    <v-card color="white" flat ma-1>
      <v-container grid-list-xs,sm,md,lg,xl fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <eicm-location></eicm-location>

          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12 text-xs-center mt-3 mb-3>
            <h2>Contactar EICM-GDC</h2>
          </v-flex>
          <v-flex xs12 sm6>
            <info></info>
          </v-flex>
          <v-flex xs12 sm6>
            <to-contact></to-contact>
          </v-flex>
        </v-layout>
      </v-container>
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
