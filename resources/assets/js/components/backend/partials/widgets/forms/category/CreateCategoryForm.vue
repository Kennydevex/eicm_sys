<template lang="html">
  <v-dialog
  v-model="showCreateModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="headline grey">Criar Categorias</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Categoria"
            name="name"
            v-model="category.name"
            v-validate="'required'"
            data-vv-name="name"
            :error-messages="errors.collect('name')"
            required
            hint="Idendificador único da categoria"
            ></v-text-field>
          </v-flex>

           <!-- <v-flex xs12 d-flex>
            <v-select
            :items="entities"
            v-model="category.entity"
            item-text="name"
            item-value="id"
            label="Entidade"
            prepend-icon="fa-folder"
            no-data-text="Sem entidade registado"
            ></v-select>
          </v-flex> -->

          <v-flex xs12>
            <v-textarea
            label="Descrição da categoria"
            name="description"
            hint="Escreva aqui uma pequena descrição desta categoria"
            v-model="category.description"
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
color="green darken-1"
flat="flat"
outline
@click="addCategory"
>
Registar
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
      category: {
        name: "",
        description: "",
        // entity: ""
      },
      showCreateModel: false,
      valid: true,
      dictionary: {
        custom: {
          name: {
            required: () => "Campo de prenchimento obrigatório"
          },
          entity: {
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
    this.getEntities();
    window.getApp.$on("APP_CATEGORY_CREATE_DIALOG", () => {
      this.handleShowHideModel();
    });
  },

  computed: {
    entities: function() {
      return this.$store.getters.entities;
    }
  },

  methods: {
    getEntities: function() {
      if (this.entities.length) {
        return;
      }
      this.getUpdatedEntities();
    },

    getUpdatedEntities: function() {
      this.$store.dispatch("getEntities");
    },

    handleShowHideModel: function() {
      this.showCreateModel = !this.showCreateModel;
    },
    addCategory() {
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios
            .post("/api/helpers/categories", this.$data.category)
            .then(response => {
              this.clear();
              this.handleShowHideModel();
              window.getApp.$emit("APP_UPDATE_ALL_CATEGORIES_DATA");
            })
            .catch(err => {
              console.log();
            });
        }
      });
    },

    clear() {
      this.category = {};
      this.$validator.reset();
    }
  }
};
</script>

<style lang="css">
</style>
