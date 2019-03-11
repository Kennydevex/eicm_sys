<template>
  <div id="category-form">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xs12>

          <v-card>
            <v-toolbar color="success" dark flat dense cad>
              <v-toolbar-title class="subheading">Criar Categoria</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="">
              <create-category-form></create-category-form>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CreateCategoryForm from '../partials/widgets/forms/category/CreateCategoryForm';

export default {
  components: {
    CreateCategoryForm,

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
