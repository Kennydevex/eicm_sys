<template lang="html">
  <v-dialog
  v-model="showCreateModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="headline grey">Criar Marcador</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Marcador"
            name="name"
            v-model="tag.name"
            v-validate="'required'"
            data-vv-name="name"
            :error-messages="errors.collect('name')"
            required
            hint="Idendificador único da entidade"
            ></v-text-field>
          </v-flex>


          <v-flex xs12>
            <v-textarea
            label="Descrição da entidade"
            name="description"
            hint="Escreva aqui uma pequena descrição desta entidade"
            v-model="tag.description"
            v-validate="'required'"
            data-vv-name="description"
            :error-messages="errors.collect('description')"
            outline>
          </v-textarea>
        </v-flex>
      </v-layout>
    </v-form>
  </v-card-text>

  <v-card-actions>
    <v-spacer></v-spacer>

    <v-btn
    color="red"
    flat="flat"
    @click="showCreateModel = false"
    outline
    >
    Sair
  </v-btn>

  <v-btn
  color="blue"
  flat="flat"
  @click="clear"
  outline
  >
  Limpar
</v-btn>

<v-btn
:loading="sending"
:disabled="sending"
color="green darken-1"
flat="flat"
outline
@click="addTag"

>
Registar
<span slot="loader">Enviando...</span>
</v-btn>

</v-flex>

</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },

  data() {
    return {
      sending: false,
      tag: {
        name: "",
        description: "",
      },
      showCreateModel: false,
      valid: true,
      dictionary: {
        custom: {
          name: {
            required: () => "Campo de prenchimento obrigatório"
          },
          description: {
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
    window.getApp.$on("APP_TAG_CREATE_DIALOG", () => {
      this.showCreateModel = !this.showCreateModel;
    });
  },

  methods: {
    addTag() {
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          this.sending = true;
          axios
            .post("/api/cms/tags", this.$data.tag)
            .then(response => {
              this.sending = false;

              this.clear();
              window.getApp.$emit("APP_UPDATE_ALL_TAGS_DATA");
            })
            .catch(err => {
              this.sending = false;
            });
        }
      });
    },

    clear() {
      this.tag = {};
      this.$validator.reset();
    }
  }
};
</script>

<style lang="css">
</style>
