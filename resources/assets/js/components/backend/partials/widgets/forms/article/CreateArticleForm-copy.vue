<template lang="html">
  <v-dialog v-model="showCreateModel" full-width="true" persistent>
    <v-card>
      <v-card-title class="headline grey">Criar Artigos</v-card-title>
  
      <v-card-text>
        <v-form v-model="valid">
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field label="* Título" name="name" v-model="article.title" v-validate="'required'" data-vv-name="title" :error-messages="errors.collect('title')" required></v-text-field>
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
  
          <v-layout row wrap>
            <v-flex xs12>
              <quill-editor class="quill" :content="content" :options="editorOption" v-model="teste">
              </quill-editor>
            </v-flex>
          </v-layout>
  
          <v-layout row wrap>
            <v-subheader>Publicação de artigo</v-subheader>
          </v-layout>
  
  
          <v-layout row wrap>
  
            <!-- <v-flex xs12 d-flex>
                          <v-select
                          :items="entities"
                          v-model="article.entity"
                          item-text="name"
                          item-value="id"
                          label="Entidade"
                          prepend-icon="fa-folder"
                          no-data-text="Sem entidade registado"
                          ></v-select>
                        </v-flex> -->
  
  
            <v-flex xs12>
              <v-subheader class="pa-0">Estado da publicação publicação</v-subheader>
              <v-switch label="Ativo" v-model="article.status"></v-switch>
            </v-flex>
  
            <v-flex xs12>
              <v-subheader class="pa-0">Relevancia da publicação</v-subheader>
              <v-radio-group v-model="article.featuring" row>
                <v-radio label="Destacado" value="1"></v-radio>
                <v-radio label="Pendente" value="2"></v-radio>
                <v-radio label="Normal" value="3"></v-radio>
              </v-radio-group>
            </v-flex>
  
  
  
            <v-flex xs12 sm6>
              <v-menu :close-on-content-click="false" v-model="showStartDateMenu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                <v-text-field slot="activator" v-model="article.start" label="Iniciar publicação em:" prepend-icon="event" readonly></v-text-field>
                <v-date-picker locale="pt-pt" v-model="article.start" @input="showStartDateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
  
  
            <v-flex xs12 sm6>
              <v-menu :close-on-content-click="false" v-model="showEndDateMenu" :nudge-right="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
                <v-text-field slot="activator" v-model="article.end" label="Terminar publicação em:" prepend-icon="event" readonly></v-text-field>
                <v-date-picker locale="pt-pt" v-model="article.end" @input="showEndDateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>
  
  
          </v-layout>
        </v-form>
      </v-card-text>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="red" flat="flat" @click="showCreateModel = false" outline>
          Sair
        </v-btn>
  
        <v-btn color="blue" flat="flat" @click="clear" outline>
          Limpar
        </v-btn>
  
        <v-btn color="green darken-1" flat="flat" outline @click="addArticle">
          Registar
        </v-btn>
        </v-flex>
  
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";
  import {
    quillEditor
  } from "vue-quill-editor";
  
  export default {
    $_veeValidate: {
      validator: "new"
    },
    data() {
      return {
        content: "Desenvolva o conteúdo do artigo aqui...",
        editorOption: {},
        showStartDateMenu: false,
        showEndDateMenu: false,
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
  
        showCreateModel: false,
        valid: true,
        dictionary: {
          custom: {
            title: {
              required: () => "Campo de prenchimento obrigatório"
            }
          }
        }
      };
    },
  
    mounted() {
      this.$validator.localize("pt", this.dictionary);
    },
  
    created() {
      window.getApp.$on("APP_ARTICLE_CREATE_DIALOG", () => {
        this.handleShowHideModel();
      });
    },
  
    computed: {
      categories: function() {
        return this.$store.getters.categories;
      },
      tags: function() {
        return this.$store.getters.tags;
      }
    },
  
    components: {
      quillEditor,
    },
  
    methods: {
      handleShowHideModel: function() {
        this.showCreateModel = !this.showCreateModel;
      },
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

<style lang="stylus" scoped>
.quill {
  height: 320px;
}
</style>
