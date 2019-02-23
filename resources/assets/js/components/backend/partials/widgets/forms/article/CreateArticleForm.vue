<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat tile>
          <v-card-title primary-title class="grey lighten-3">
            <h3>
              <i class="fa fa-file-text-o"></i> Criar nova publicação
            </h3>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-layout row wrap>
                <v-flex xs10>
                  <v-text-field name="title" v-model="article.title" label="Titulo do artigo" id="cmd_title_field" v-validate="'required'" data-vv-name="title" :error-messages="errors.collect('title')"></v-text-field>
                </v-flex>

                <v-flex xs2>
                  <v-layout row>
                    <v-flex xs12>
                      <span v-show="errors.has('image_file')" class="red--text">{{ errors.first('image_file') }}</span>
                      <v-btn color="primary" block raised @click="onSelectFile">Caregar Imagem</v-btn>
                      <input type="file" style="display: none" ref="defaultFileInput" @change="onFileSelected" name="image_file" v-validate="'required|image'" data-vv-as="image_file" :error-messages="errors.collect('image_file')">


                      <div v-if="tempImagePreview && !errors.has('image_file')">
                        <v-menu v-model="coverPreviewDialog" :close-on-content-click="false" :nudge-width="200" offset-x>
                          <a href="#" slot="activator">Previsualizar <v-chip color="light-green lighten-3">{{tempImageName}}</v-chip></a>

                          <v-card>
                            <v-img :aspect-ratio="16/9" :src="tempImagePreview"></v-img>

                            <v-card-actions>
                              <v-btn color="primary" flat @click="onSelectFile" small>Substituir</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-menu>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex xs12>
                  <v-textarea label="Resumo da publicação" auto-grow clearable counter="200" rows="2" name="summary" hint="Escreva aqui um breve resumo da publicação" v-validate="'required|max:200|min:20'" data-vv-name="summary" :error-messages="errors.collect('summary')"
                  outline v-model="article.summary"></v-textarea>
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
                    <v-select name="category" :items="articleCategories" v-model="article.category" item-text="name" item-value="id" label="Categoria" prepend-icon="fa-folder" no-data-text="Sem categoria registado" v-validate="'required'" data-vv-name="category" :error-messages="errors.collect('category')"></v-select>
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
                      <v-switch :label="article.featuring ?  'Notícia em destaque':'Notícia simples'" v-model="article.featuring"></v-switch>
                    </v-flex>
                  </v-flex>
                </v-flex>

                <v-subheader>Definir data de publicação do artigo</v-subheader>

                <input style="display:none" name="start_field_target" ref="startLimit" v-model="startLimit" type="text">
                <input style="display:none" name="end_field_target" ref="endStart" v-model="endStart" type="text">
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
                    min-width="290px">
                    <v-text-field
                    name="start"
                    slot="activator"
                    :value="formattingStartDate"
                    label="Data início da publicação"
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

                <v-flex xs6>
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
                  label="Data término da publicação"
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
import quillEditorTemplate from "../../../../../../_helpers/api/quillEditorTemplate";
import validateDictionary from "../../../../../../_helpers/api/validateDictionary";
import {categoriesTags} from '../../../../../../_mixins/CategoriesTags'
import {appFlashAlert} from '../../../../../../_mixins/AppFlashAlert'
import {clearForm} from '../../../../../../_mixins/ClearForm'
import {formattingDate} from '../../../../../../_mixins/FormattingDate'
import {article} from '../../../../../../_mixins/Article'

export default {
  mixins: [categoriesTags, appFlashAlert, clearForm, formattingDate, article],
  components: {
    VueEditor
  },

  data() {
    return {
      tempImagePreview: "",
      tempImagePreview: "",
      tempImageName: "",
      imageLoaded: false,
      startDateMenu: false,
      endDateMenu: false,

      coverPreviewDialog: false,

      article: {
        title: "",
        summary: "",
        content: "",
        status: false,
        featuring: 0,
        start: new Date().toISOString().substr(0, 10),
        end: new Date().toISOString().substr(0, 10),
        user: "",
        category: "",
        tags: "",
        image: null
      },

      valid: true,
      customToolbar: quillEditorTemplate,
      dictionary: validateDictionary,
    };
  },

  mounted() {
    // Para utilizar mensagens de valida;\oes personalizadas
    this.$validator.localize('pt', this.dictionary)
  },

  created() {
    this.getArticleCategories()
    this.getTags()
  },


  methods: {
    //Handdle article cover file
    onSelectFile() {
      this.coverPreviewDialog = false
      this.$refs.defaultFileInput.click()
    },

    onFileSelected(event) {
      const file = event.target.files[0]
      this.tempImageName = event.target.files[0].name

      this.readFile(file)
      //================================================
      // var formData = new FormData()
      // formData.append("imageFile", file)
      // this.article.image = formData
    },

    readFile(image) {
      let fileReader = new FileReader()
      fileReader.readAsDataURL(image)
      fileReader.onload = event => {
        this.tempImagePreview = event.target.result
        this.article.image = event.target.result
      };
    },
    //===========================================

    addArticle() {
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios
          .post("/api/cms/articles", this.$data.article)
          .then(response => {
            this.tempImagePreview = ''
            this.clear()
            this.showToastAlert('success', 'Suceco de mixins')
            this.handleShowHideModel()
            window.getApp.$emit("APP_UPDATE_ALL_ARTICLES_DATA")
          })
          .catch(err => {
            console.log()
          })
        }
      })
    },


  }
};
</script>

<style lang="stylus" scoped>
a {
  text-decoration-line: none;
  text-transform: uppercase;
  color: black;
}
</style>
