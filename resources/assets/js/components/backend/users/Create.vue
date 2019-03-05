<template>
  <div id="user-form">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xs12>

          <v-card>
            <v-toolbar color="grey lighten-3" dark flat dense cad>
              <v-toolbar-title class="subheading">Registar Utilizador</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="">
              <creare-user-form></creare-user-form>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CreareUserForm from '../partials/widgets/forms/user/CreateUserForm';

export default {
  components: {
    CreareUserForm,

  },
  data () {
    return {
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>
