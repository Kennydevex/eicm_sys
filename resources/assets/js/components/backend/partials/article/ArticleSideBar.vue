<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <template v-for="tag in tags">
          <div :key="tag.id">
            <h4>{{tag.name}}</h4>
          </div>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
import {categoriesTags} from '../../../../_mixins/CategoriesTags'
export default {
  mixins: [categoriesTags],
  data() {
    return {};
  },
  created: function() {
    this.getArticleCategories();
    this.getTags();
  },

};
</script>
