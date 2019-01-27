<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat tile>
          <v-card-title primary-title>Criar uma nova publicação</v-card-title>
          <v-card-text>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field name="title" v-model="article.title" label="Titulo do artigo" id="cmd_title_field"></v-text-field>
                </v-flex>
  
                <v-flex xs12 md9>
                  <vue-editor placeholder="Escrava a aqui os conteúdos da publicação" v-model="article.content" :editorToolbar="customToolbar"></vue-editor>
                </v-flex>
                <v-flex xs12 md3 d-block pa-1>
                  <v-flex xs12>
                    <v-select :items="categories" v-model="article.category" item-text="name" item-value="id" label="Categoria" prepend-icon="fa-folder" no-data-text="Sem categoria registado"></v-select>
                  </v-flex>
                  <v-flex xs12>
                    <v-select :items="tags" v-model="article.tags" item-text="name" item-value="id" label="Marcadores" prepend-icon="fa-tags" no-data-text="Sem marcadores registado" multiple></v-select>
                  </v-flex>
  
                  <v-subheader>Publicação do artigo</v-subheader>
                  <v-divider></v-divider>
                  <v-flex xs12 d-flex>
                    <v-flex xs6>
                      <v-switch :label="article.status ? 'Publicado':'Aguardar Publicação'" v-model="article.status"></v-switch>
                    </v-flex>
                    <v-flex xs6>
                      <v-checkbox :label="article.featuring ? 'Notícia em destaque':'Notícia simples'" v-model="article.featuring" value="1"></v-checkbox>
                    </v-flex>
                  </v-flex>
                </v-flex>
  
                <v-subheader>Definir data de publicação do artigo</v-subheader>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs6 d-flex>
                  <v-flex xs6>
                    <v-menu :close-on-content-click="false" v-model="startDateMenu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                      <v-text-field slot="activator" :value="formattingStartDate" label="Data início da publicação" prepend-icon="event" readonly></v-text-field>
                      <v-date-picker v-model="article.start" @input="startDateMenu = false" locale="pt-pt"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex xs6>
                    <v-menu :close-on-content-click="false" v-model="endDateMenu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                      <v-text-field slot="activator" :value="formattingEndDate" label="Data término da publicação" locale="pt-pt" prepend-icon="event" readonly></v-text-field>
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
              <v-btn color="red" flat="flat" outline @click="backToAllArticles()">Sair</v-btn>
  
              <v-btn color="blue" flat="flat" @click="clear" outline>Limpar</v-btn>
  
              <v-btn color="green darken-1" flat="flat" outline @click="addArticle">Registar</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import {
    VueEditor
  } from "vue2-editor";
  import moment from "moment";
  import quillEditorTemplate from '../../../../../../_helpers/api/quillEditorTemplate';
  
  
  export default {
    components: {
      VueEditor
    },
  
    data() {
      return {
        startDateMenu: false,
        endDateMenu: false,
  
        article: {
          title: "",
          content: "",
          status: "",
          featuring: "",
          start: new Date().toISOString().substr(0, 10),
          end: new Date().toISOString().substr(0, 10),
          user: "",
          category: "",
          tags: ""
        },
  
        valid: true,
        customToolbar: quillEditorTemplate,
      };
    },
  
    created() {
      this.getCategories();
      this.getTags();
    },
  
    computed: {
      categories: function() {
        return this.$store.getters.categories;
      },
      tags: function() {
        return this.$store.getters.tags;
      },
  
      formattingStartDate() {
        return this.article.start ?
          moment(this.article.start).format("DD/MM/YYYY") :
          "";
      },
      formattingEndDate() {
        return this.article.end ?
          moment(this.article.end).format("DD/MM/YYYY") :
          "";
      }
    },
  
    methods: {
      backToAllArticles() {
        window.getApp.$emit("APP_UPDATE_ALL_ARTICLES_DATA");
        this.$router.push({
          path: "/dashboard/articles/"
        });
      },
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
      },
      //===========================================
  
      addArticle() {
        this.$validator.validateAll().then(noErrorOnValidate => {
          if (noErrorOnValidate) {
            axios
              .post("/api/cms/articles", this.$data.article)
              .then(response => {
                this.clear();
                this.handleShowHideModel();
                window.getApp.$emit("APP_UPDATE_ALL_ARTICLES_DATA");
              })
              .catch(err => {
                console.log();
              });
          }
        });
      },
  
      clear() {
        this.article = {};
        this.$validator.reset();
      }
    }
  };
</script>
