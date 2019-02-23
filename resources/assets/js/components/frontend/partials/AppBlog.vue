<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl fluid>
    <v-layout row wrap align-center>
      <v-flex xs12 text-xs-center pa-4>
        <h2>Notícias e Eventos</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <template v-for="featuredArticle in featuredArticles">
        <v-flex xs12 sm3 pa-3  :key="featuredArticle.id">
          <v-card>
            <v-img :src="`/images/app/articles/covers/${featuredArticle.image.name}`" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{featuredArticle.title}}</h3>
                <div><h4>{{ featuredArticle.summary}}</h4></div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn @click="onViewArticle('/view/',featuredArticle.id)" flat color="primary" tile>Ver</v-btn>
              <!-- <v-btn flat color="orange">LER</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-flex>

      </template>

    </v-layout>
  </v-container>
</template>

<script>
import {article} from '../../../_mixins/Article'

export default {
mixins: [article],
  data () {
    return {

    }
  },

  created: function() {
    this.getFeaturedArticles();
  },

  computed: {
    featuredArticles: function() {
      return this.$store.getters.featuredArticles;
    }
  },

  methods: {
    getFeaturedArticles: function() {
      if (this.featuredArticles.length) {
        return;
      }
      this.getUpdatedFeaturedArticles();
    },

    getUpdatedFeaturedArticles: function() {
      this.$store.dispatch("getFeaturedArticles");
    },
  }
}
</script>

<style lang="css">
</style>
