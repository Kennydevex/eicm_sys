export const categoriesTags = {
  computed: {
    categories: function() {
      return this.$store.getters.categories;
    },

    tags: function() {
      return this.$store.getters.tags
    },

    articleCategories: function() {
      return this.$store.getters.articleCategories
    },
  },


  methods: {
    getTags() {
        if (this.tags.length) {
          return
        }
        this.getUpdatedTag()
      },

      getUpdatedTag() {
        this.$store.dispatch("getTags")
      },

      //===========================================
      getArticleCategories() {
        if (this.articleCategories.length) {
          return
        }
        this.getUpdatedArticleCategory()
      },

      getUpdatedArticleCategory() {
        this.$store.dispatch("getArticleCategories")
      },

      //===========================================
      getCategories() {
        if (this.articleCategories.length) {
          return
        }
        this.getUpdatedCategory()
      },

      getUpdatedCategory() {
        this.$store.dispatch("getCategories")
      },
  },
}
