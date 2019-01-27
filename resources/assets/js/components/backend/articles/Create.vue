<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <create-article-form></create-article-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import CreateArticleForm from '../partials/widgets/forms/article/CreateArticleForm';
  
  export default {
    components: {
      CreateArticleForm,
  
    },
    data() {
      return {
  
      }
    },
  
  };
</script>
