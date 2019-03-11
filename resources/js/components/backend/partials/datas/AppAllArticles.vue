<template>
  <v-container grid-list-xs fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field
        name="name"
        label="Procurar..."
        id="id"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <template v-for="article in articles">
        <v-flex xs3 :key="article.id">
          <v-card>

            <v-img :src="`/images/app/articles/covers/${article.image.name}`" aspect-ratio="2.75"></v-img>

            <v-card-title primary-title>
              <h2 class="headline mb-0">{{article.title}}</h2>
            </v-card-title>

            <v-card-text>
              <h4>{{ article.summary|truncate(100)}}</h4>
              <!-- <h4>{{ article.content|truncate(300)}}<v-btn @click="onViewArticle(article.id)" flat color="primary">Ler mais</v-btn></h4>  -->
            </v-card-text>
            <v-card-actions>
              <v-btn @click="onViewArticle('/dashboard/articles/view/', article.slug)" flat color="primary" tile>Ver</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat color="orange" icon @click="onUpdateArticle('/dashboard/articles/update/',article.slug)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat color="error" icon @click="onDeleteArticle(article.id)">
                <v-icon>delete</v-icon>
              </v-btn>
              <v-btn flat icon @click="dialog = true">
                <v-icon>more_vert</v-icon>
              </v-btn>


            </v-card-actions>
          </v-card>
        </v-flex>
      </template>

    </v-layout>
  </v-container>
</template>

<script>
import moment from "moment";
import {appFlashAlert} from '../../../../_mixins/AppFlashAlert'
import {formattingDate} from '../../../../_mixins/FormattingDate'
import {article} from '../../../../_mixins/Article'
export default {
  mixins: [appFlashAlert, formattingDate, article],
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,

    startDateMenu: false,
    endDateMenu: false,
    article: [],
    dialog: false,
  }),

  filters: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + "...";
      }
      return value.replace(/(<([^>]+)>)/gi, "");
    }
  },


  created: function() {
    this.getArticles();
    window.getApp.$on("APP_UPDATE_ALL_ARTICLES_DATA", () => {
      this.getUpdatedArticles();
    });
  },

  computed: {
    articles: function() {
      return this.$store.getters.articles;
    },

  },

  methods: {
    getArticles: function() {
      if (this.articles.length) {
        return;
      }
      this.getUpdatedArticles();
    },

    getUpdatedArticles: function() {
      this.$store.dispatch("getArticles");
    },

    getSingleArticle: function(article_id) {
      if (this.articles.length) {
        this.article = this.articles.find(article => article.id == article_id);
      } else {
        axios
        .get("/api/cms/articles/" + article_id)
        .then(response => {
          this.article = response.data.data;
        })
        .catch(error => {});
      }
    },





    onDeleteArticle: function(article) {
      this.$swal({
        title: "Eliminar Função",
        text: "Ação irreversível, queres continuar?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, Apagar!",
        cancelButtonText: "Não, Cancelar!"
      }).then(result => {
        if (result.value) {
          this.deleteArticle(article);
        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
          this.showToastAlert("error", "Operação cancelada!", true);
        }
      });
    },

    deleteArticle: function(article_id) {
      axios
      .delete("/api/cms/articles/" + article_id)
      .then(response => {
        this.getUpdatedArticles();
        this.showToastAlert("success", "Operação efetuada com sucesso!", true);
      })
      .catch(err => {
        console.log();
      });
    },

  }
};
</script>

<style lang="stylus" scoped>

</style>
