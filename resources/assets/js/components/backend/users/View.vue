<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-tabs
          v-model="active"
          color="grey lighten-3"
          icons-and-text
          >


          <v-tabs-slider color="indigo"></v-tabs-slider>

          <v-tab href="#user_data">
            Dados Pessoais
            <v-icon>fa-id-card-o</v-icon>
          </v-tab>

          <v-tab href="#user_contacts">
            Informações de Cantactos
            <v-icon>fa-address-book</v-icon>
          </v-tab>

          <v-tab href="#user_security">
            Acções e Segurança
            <v-icon>fa-key</v-icon>
          </v-tab>

          <v-tab-item :id="'user_data'" :key="1">
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :id="'user_contacts'" :key="2">
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item :id="'user_security'" :key="3">
            <v-card flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>

        </v-tabs>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      user_id: this.$route.params.id,
      user: {},
    }
  },

  created: function () {

  },

  methods: {
    user: function () {

    }
  }
}
</script>

<style lang="css">
</style>
