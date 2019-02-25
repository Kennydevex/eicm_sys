<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat tile>
          <v-card-title primary-title class="grey lighten-3">
            <h3>
              <i class="fa fa-edit"></i> Editar e atualizar publicação
            </h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                  name="title"
                  v-model="article.title"
                  label="Titulo do artigo"
                  id="cmd_title_field"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 md9>
                  <vue-editor
                  placeholder="Escrava a aqui os conteúdos da publicação"
                  v-model="article.content"
                  :editorToolbar="customToolbar"
                  ></vue-editor>
                </v-flex>
                <v-flex xs12 md3 d-block pa-1>
                  <v-flex xs12>
                    <v-select
                    :items="articleCategories"
                    v-model="article.category"
                    item-text="name"
                    item-value="id"
                    label="Categoria"
                    prepend-icon="fa-folder"
                    no-data-text="Sem categoria registado"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select
                    :items="tags"
                    v-model="article.tags"
                    item-text="name"
                    item-value="id"
                    label="Marcadores"
                    multiple
                    prepend-icon="fa-tags"
                    no-data-text="Sem marcadores registado"
                    ></v-select>
                  </v-flex>

                  <v-subheader>Publicação do artigo</v-subheader>
                  <v-divider></v-divider>
                  <v-flex xs12 d-flex>
                    <v-flex xs6>
                      <v-switch
                      :label="article.status ? 'Publicado':'Aguardar Publicação'"
                      v-model="article.status"
                      ></v-switch>
                    </v-flex>
                    <v-flex xs6>
                      <v-checkbox
                      :label="article.featuring ? 'Notícia em destaque':'Notícia simples'"
                      v-model="article.featuring"
                      value="1"
                      ></v-checkbox>
                    </v-flex>
                  </v-flex>
                </v-flex>

                <v-subheader>Definir data de publicação do artigo</v-subheader>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs6 d-flex>
                  <v-flex xs6>
                    <v-menu
                    :close-on-content-click="false"
                    v-model="startDateMenu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    >
                    <v-text-field
                    slot="activator"
                    :value="formattingStartDate"
                    label="Data início da publicação"
                    prepend-icon="event"
                    readonly
                    ></v-text-field>
                    <v-date-picker
                    v-model="article.start"
                    @input="startDateMenu = false"
                    locale="pt-pt"
                    ></v-date-picker>
                  </v-menu>
                </v-flex>
                <v-flex xs6>
                  <v-menu
                  :close-on-content-click="false"
                  v-model="endDateMenu"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                  >
                  <v-text-field
                  slot="activator"
                  :value="formattingEndDate"
                  label="Data término da publicação"
                  locale="pt-pt"
                  prepend-icon="event"
                  readonly
                  ></v-text-field>
                  <v-date-picker v-model="article.end" @input="endDateMenu = false"></v-date-picker>
                </v-menu>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-flex xs12 class="text-xs-right">
          <!-- <v-btn color="red" flat="flat" outline to="{name: 'articles'}">Sair</v-btn> -->
          <v-btn color="red" flat="flat" outline @click="backToAllArticles()">Cancelar</v-btn>

          <v-btn color="blue" flat="flat" @click="clear" outline>Limpar</v-btn>

          <v-btn color="green darken-1" flat="flat" outline @click="updateArticle">Atualizar</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
</v-container>
</template>



<script>
import { VueEditor } from "vue2-editor";
import moment from "moment";
import quillEditorTemplate from "../../../_helpers/api/quillEditorTemplate";
import validateDictionary from "../../../_helpers/api/validateDictionary";
import {categoriesTags} from '../../../_mixins/CategoriesTags'
import {appFlashAlert} from '../../../_mixins/AppFlashAlert'
import {clearForm} from '../../../_mixins/ClearForm'
import {formattingDate} from '../../../_mixins/FormattingDate'
import {article} from '../../../_mixins/Article'

export default {
  mixins: [categoriesTags, appFlashAlert, clearForm, formattingDate, article],
  components: {
    VueEditor
  },

  data() {
    return {
      slug: this.$route.params.article_slug,
      startDateMenu: false,
      endDateMenu: false,
      date: new Date().toISOString().substr(0, 10),
      article:[],
      valid: true,
      customToolbar: quillEditorTemplate
    };
  },

  created: function() {
    this.getSingleArticle(this.slug);
    this.getTags();
    this.getArticleCategories();
  },

  computed: {
    articles: function() {
      return this.$store.getters.articles;
    },
  },

  methods: {

    //===========================================
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

    updateArticle: function() {

      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios
          .put("/api/cms/articles/" + this.slug, this.$data.article)
          .then(response => {
            this.showToastAlert("success", "Operação efetuada com sucesso!");
            window.getApp.$emit("APP_UPDATE_ALL_ARTICLES_DATA");
          })
          .catch(err => {
            console.log();
          });
        }
      });
    },

  }
};
</script>
