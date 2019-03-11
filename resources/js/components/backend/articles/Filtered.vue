<template>
   <v-container grid-list-xs>
       <v-layout row wrap>
           <v-flex xs12>
             {{article}}

           </v-flex>
       </v-layout>
   </v-container>
</template>



<script>

export default {
  data() {
    return {
      filter_key: this.$route.params.filter_key,
      article: {
        category: [],
        tags: [],
        user: [],
      }

    };
  },


  created: function() {
    this.getSingleArticle(this.filter_key);
  },

  computed: {
    articleCategories: function() {
      return this.$store.getters.articleCategories;
    },
    tags: function() {
      return this.$store.getters.tags;
    },

    articles: function() {
      return this.$store.getters.articles;
    },
  },

  methods: {
    getSingleArticle: function(filter_key) {
      if (this.articles.length) {
        this.article = this.articles.find(article => article.category.name == filter_key);
      } else {
        axios
          .get("/api/cms/filteredArticle/" + filter_key)
          .then(response => {
            this.article = response.data.data;
          })
          .catch(error => {});
      }
    },
  }



};
</script>
