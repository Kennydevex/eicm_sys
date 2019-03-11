export const article = {

  methods: {
    backToAllArticles() {
        window.getApp.$emit("APP_UPDATE_ALL_ARTICLES_DATA");
        this.$router.push({
          path: "/dashboard/articles/"
        });
      },

      onViewArticle(path, article_slug) {
        this.$router.push({
          path: path + article_slug
        });
      },

      onUpdateArticle(path, article_slug) {
        this.$router.push({
          path: path + article_slug,
        });
      },
  }
}
