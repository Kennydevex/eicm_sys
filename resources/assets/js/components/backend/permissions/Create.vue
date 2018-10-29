<template>
  <div id="permission-form">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xs12>

          <v-card>
            <v-toolbar color="success" dark flat dense cad>
              <v-toolbar-title class="subheading">Criar Utilizador</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="">
              <creare-permission-form></creare-permission-form>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CrearePermissionForm from '../partials/widgets/forms/permission/CreatePermissionForm';

export default {
  components: {
    CrearePermissionForm,

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
