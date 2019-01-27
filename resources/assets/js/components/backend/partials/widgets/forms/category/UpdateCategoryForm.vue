<template lang="html">
  <v-dialog
  v-model="showEditModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="headline grey">Atualizar Categoria</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Categoria"
            name="name"
            v-model="category_data.name"
            v-validate="'required'"
            data-vv-name="name"
            :error-messages="errors.collect('name')"
            required
            hint="Idendificador único da categoria"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
            label="Descrição da categoria"
            name="description"
            hint="Escreva aqui uma pequena descrição desta categoria"
            v-model="category_data.description"
            solo>
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
    @click="showEditModel = false"
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
@click="updateCategory"
outline
>
Alterar
</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  props: ['category'],
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      category_id: '',
      category_data: {
        id: '',
        name: '',
        description: '',
      },
      showEditModel: false,
      valid: true,
      dictionary: {
        custom: {
          name: {
            required: () => 'Campo de prenchimento obrigatório',
          },

          rotulo: {
            required: () => 'Campo de prenchimento obrigatório',
          },
        }
      }
    }
  },

  mounted () {
    this.$validator.localize('pt', this.dictionary)
  },

  created () {
    window.getApp.$on('APP_CATEGORY_UPDATE_DIALOG', (category) => {
      this.showEditModel = (!this.showEditModel)
      this.category_data.id = category.id
      this.category_data.name = category.name
      this.category_data.description = category.description
    });
  },

  methods: {
    clear () {
      this.category_data.name=''
      this.category_data.description=''
      this.$validator.reset()
    },

    updateCategory(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios.put('/api/helpers/categories/'+this.category_data.id, this.$data.category_data)
          .then((response) => {
            window.getApp.$emit("APP_UPDATE_ALL_CATEGORIES_DATA");
            this.clear()
            this.showEditModel = (!this.showEditModel)
            this.showToastAlert('success', 'Operação efetuada com sucesso!')
          })
          .catch((err) => {console.log()})
        }
      });
    },

    showToastAlert (type, msg) {
      this.$swal({
        title: msg,
        // title: 'Operação bem sucedida <i class="fa fa-arrow-right"></i>!',
        type: type,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000
      }
    )
  },

  }
}
</script>

<style lang="css">
</style>
