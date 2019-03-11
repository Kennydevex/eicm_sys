<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs10>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card flat color="transparent">
              <v-img
              class="white--text"
              height="300px"
              :src="`/images/app/articles/covers/${article.image.name}`"
              >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{article.title}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <v-flex xs12>

                <span class="grey--text">
                  <v-icon>person</v-icon>
                  {{article.user.folk.first_name}} {{article.user.folk.last_name}}
                </span>
                <span class="grey--text">
                  <v-icon>access_time</v-icon>
                  {{formattingPresentDate}}
                </span>
                <v-btn color="grey" small tile flat @click="onFiterArticle(article.category.slug)">
                  <v-icon>folder_open</v-icon>
                  {{article.category.name}}
                </v-btn>
              </v-flex>
              <v-flex xs12>
                <p
                class="font-weight-bold headline text-xs-justify"
                >{{article.summary}}</p>
              </v-flex>
            </v-card-title>
            <v-card-text>
              <v-flex xs12>
                <span v-html="article.content"></span>
              </v-flex>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>

              <v-item-group multiple>
                <v-subheader>Marcadores</v-subheader>
                <v-item
                v-for="tag in article.tags" :key="tag.id"
                >
                <v-chip
                outline
                @click="tagTesteEvents(tag.name)"
                slot-scope="{ active, toggle }"
                :selected="active"
                >
                {{tag.name}}
              </v-chip>
            </v-item>
          </v-item-group>


          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="onUpdateArticle(article.slug)"icon large><v-icon>fa-plus</v-icon></v-btn>
          <v-btn flat color="warning" @click="onUpdateArticle(article.slug)"icon large><v-icon>fa-edit</v-icon></v-btn>
          <v-btn flat color="error"icon large><v-icon>fa-trash</v-icon></v-btn>
          <v-btn flat @click="backToAllArticles()" icon large><v-icon>fa-user</v-icon></v-btn>
          <!-- <v-btn flat :to="{name: 'articles'}" icon large><v-icon>fa-user</v-icon></v-btn> -->
        </v-card-actions>
        </v-divider>
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
</v-flex>
</v-layout>
</v-container>
</template>
</v-flex>
</v-layout>
</v-container>
</template>



<script>
import moment from "moment";
import ArticleSideBar from "../partials/article/ArticleSideBar";
import {formattingDate} from '../../../_mixins/FormattingDate'
import {article} from '../../../_mixins/Article'
// import {categoriesTags} from '../../../_mixins/CategoriesTags'

export default {
  mixins: [formattingDate, article],
  data() {
    return {
      slug: this.$route.params.article_slug,
      article: {
        category: [],
        tags: [],
        user: [],
      }
    };
  },

  components: {
    ArticleSideBar
  },

  created: function() {
    this.getSingleArticle(this.slug);
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
    tagTesteEvents(name) {
      console.log("Funcionando bem"+name);

    },

    getSingleArticle: function(slug) {
      if (this.articles.length) {
        this.article = this.articles.find(article => article.slug == slug);
      } else {
        axios
        .get("/api/cms/articles/" + slug)
        .then(response => {
          this.article = response.data.data;
        })
        .catch(error => {});
      }
    },

    onUpdateArticle: function(article_slug) {
      this.$router.push({name: 'update_article', params: {article_slug}});
      this.$router.push({ name: 'filter_article', params: { filter_key }})


    },

    onFiterArticle: function(filter_key) {
      this.$router.push({ name: 'filter_article', params: { filter_key }})
    }
  }
};
</script>
