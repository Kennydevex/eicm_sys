<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field name="name" label="label" id="id"></v-text-field>
          </v-flex>
        </v-layout>
  
        <v-layout row wrap>
          <v-flex xs12>
                <v-layout row wrap>
                  <v-flex xs12>
                      <quill-editor class="quill" :content="content" :options="editorOption" v-model="teste">
                      </quill-editor>
  
                  </v-flex>
                </v-layout>
  
          </v-flex>
        </v-layout>
  
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field name="name" label="label" id="id"></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import "quill/dist/quill.core.css";
  import "quill/dist/quill.snow.css";
  import "quill/dist/quill.bubble.css";
  import {
    quillEditor
  } from "vue-quill-editor";
  export default {
  
    data() {
      return {
        content: "Desenvolva o conteúdo do artigo aqui...",
        editorOption: {},
      }
    },
  
    components: {
      quillEditor,
    },
  
  }
</script>

<style lang="stylus" scoped>
.quill {
}

.editor_card {
}
</style>