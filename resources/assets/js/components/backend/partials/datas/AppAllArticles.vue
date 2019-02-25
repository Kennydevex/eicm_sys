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

              <!-- «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««« -->
              <!-- <v-bottom-sheet v-model="sheet">
              <v-btn slot="activator" color="primary" dark flat icon>
              <v-icon>share</v-icon>
            </v-btn>
            <v-list>
            <v-subheader>Open in</v-subheader>
            <v-list-tile v-for="tile in tiles" :key="tile.title" @click="sheet = false">
            <v-list-tile-avatar>
            <v-avatar size="32px" tile>
            <img
            :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
            :alt="tile.title"
            >
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-bottom-sheet> -->
  <!-- «««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««««« -->
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
<!-- »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» -->
<!-- <v-dialog v-model="dialog" max-width="400">
<v-card>
<v-card-title class="headline">Configuração Rápida</v-card-title>
<v-divider></v-divider>
<v-card-text>
<v-layout row>
<v-flex xs12>
<v-subheader>Data de publicação</v-subheader>
<input style="display:none" name="start_field_target" ref="startLimit" v-model="startLimit" type="text">
<input style="display:none" name="end_field_target" ref="endStart" v-model="endStart" type="text">
<v-flex xs12 d-block>
<v-menu
:close-on-content-click="false"
v-model="startDateMenu"
:nudge-right="40"
lazy
transition="scale-transition"
offset-y
full-width
min-width="290px">
<v-text-field
name="start"
slot="activator"
:value="formattingStartDate"
label="Alterar data início"
locale="pt-pt"
prepend-icon="event"
readonly
v-validate="'date_format:DD/MM/YYYY|before:startLimit'"
data-vv-as="start"
:error-messages="errors.collect('start')"
></v-text-field>
<v-date-picker
v-model="article.start"
@input="startDateMenu = false"
locale="pt-pt"
></v-date-picker>
</v-menu>
</v-flex>

<v-flex xs12 d-block>
<v-menu
:close-on-content-click="false"
v-model="endDateMenu"
:nudge-right="40"
lazy
transition="scale-transition"
offset-y
full-width
min-width="290px">
<v-text-field
name="end"
slot="activator"
:value="formattingEndDate"
label="Alterar data de fim"
locale="pt-pt"
prepend-icon="event"
readonly
v-validate="'date_format:DD/MM/YYYY|after:endStart'"
data-vv-as="end"
:error-messages="errors.collect('end')"
></v-text-field>

<v-date-picker
v-model="article.end"
@input="endDateMenu = false"
locale="pt-pt"
></v-date-picker>

</v-menu>
</v-flex>
<v-subheader>Ativação e Destaque</v-subheader>
<v-flex xs12 d-block>
<v-switch :label="article.status ? 'Dispublicar':'Publicar'" v-model="article.status"></v-switch>
</v-flex>
<v-flex xs12 d-block>
<v-switch :label="article.featuring ?  'Tirar destaque':'Destacar'" v-model="article.featuring"></v-switch>
</v-flex>
</v-flex>
</v-layout>
</v-card-text>

<v-card-actions>
<v-spacer></v-spacer>

<v-btn color="error" flat="flat" @click="dialog = false">Cancelar</v-btn>

<v-btn flat="flat" color="primary">Guardar</v-btn>
</v-card-actions>
</v-card>
</v-dialog> -->
<!-- »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» -->
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
          this.showToastAlert("error", "Operação cancelada!");
        }
      });
    },

    deleteArticle: function(article_id) {
      axios
      .delete("/api/cms/articles/" + article_id)
      .then(response => {
        this.getUpdatedArticles();
        this.showToastAlert("success", "Operação efetuada com sucesso!");
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
