<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs10>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-media src="src" height="200px"></v-card-media>
              <v-card-title primary-title class="">
                <div>
                  <h3 class="headline mb-0">{{article.title}}</h3>
                  <div>description</div>
                </div>
              </v-card-title>
              <v-card-text>
                <p>
                  <span v-html="article.content"></span>
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="primary" @click="onUpdateArticle(article.id)">Editar</v-btn>
                <v-btn flat color="primary">text</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs2>
        <article-side-bar></article-side-bar>

        <template>
          <v-flex 2>{{article.category.name}}</v-flex>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>
   


<script>
import moment from "moment";
import ArticleSideBar from "../partials/article/ArticleSideBar";
export default {
  data() {
    return {
      id: this.$route.params.article_id,
      article: []
    };
  },

  components: {
    ArticleSideBar
  },

  created: function() {
    this.getSingleArticle(this.id);
  },

  computed: {
    categories: function() {
      return this.$store.getters.categories;
    },
    tags: function() {
      return this.$store.getters.tags;
    },

    articles: function() {
      return this.$store.getters.articles;
    }
  },

  methods: {
    getSingleArticle: function(id) {
      if (this.articles.length) {
        this.article = this.articles.find(article => article.id == id);
      } else {
        axios
          .get("/api/cms/articles/" + id)
          .then(response => {
            this.article = response.data.data;
          })
          .catch(error => {});
      }
    },

    backToAllArticles() {
      window.getApp.$emit("APP_UPDATE_ALL_ARTICLES_DATA");
      this.$router.push({
        path: "/dashboard/articles/"
      });
    },

    onUpdateArticle: function(article_id) {
      this.$router.push({
        path: "/dashboard/articles/update/" + article_id
      });
    }
  }
};
</script>
