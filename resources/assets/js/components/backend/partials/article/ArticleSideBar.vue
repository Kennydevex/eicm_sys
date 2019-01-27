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
export default {
  data() {
    return {};
  },

  created: function() {
    this.getCategories();
    this.getTags();
  },

  computed: {
    categories: function() {
      return this.$store.getters.categories;
    },
    tags: function() {
      return this.$store.getters.tags;
    }
  },

  methods: {
    //===========================================
    getTags: function() {
      if (this.tags.length) {
        return;
      }
      this.getUpdatedTag();
    },

    getUpdatedTag: function() {
      this.$store.dispatch("getTags");
    },

    //===========================================

    getCategories: function() {
      if (this.categories.length) {
        return;
      }
      this.getUpdatedCategory();
    },

    getUpdatedCategory: function() {
      this.$store.dispatch("getCategories");
    }
  }
};
</script>
