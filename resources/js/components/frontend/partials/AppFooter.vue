<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="blue darken-4">
        <strong class="subheading">Estamos ligados nas Redes Sociais</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="grey darken-4">
        <v-container grid-list-sm,xs text-xs-center fluid>
          <v-layout row wrap>
            <subscriber></subscriber>
            <courses></courses>
            <external-links></external-links>


          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 —
        <strong>EICM-GDC</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
import Subscriber from './footer/Subscriber'
import Courses from './footer/Courses'
import ExternalLinks from './footer/ExternalLinks'

export default {
  data: () => ({
    icons: [
      "fa-facebook",
      "fa-twitter",
      "fa-google-plus",
      "fa-linkedin",
      "fa-instagram"
    ]
  }),

  components: {
    Subscriber,
    Courses,
    ExternalLinks,
  }
};
</script>

<style lang="scss" scoped>

</style>
