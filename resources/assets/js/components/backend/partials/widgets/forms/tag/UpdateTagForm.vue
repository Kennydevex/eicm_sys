<template lang="html">
  <v-dialog
  v-model="showEditModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="headline grey">Atualizar Entidade</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Entidade"
            name="name"
            v-model="tag_data.name"
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
            v-model="tag_data.description"
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
:loading="sending"
:disabled="sending"
color="green darken-1"
flat="flat"
@click="updateTag"
outline
>
Alterar
<span slot="loader">Enviando...</span>
</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  props: ['tag'],
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      sending: false,
      tag_data: {
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

        }
      }
    }
  },

  mounted () {
    this.$validator.localize('pt', this.dictionary)
  },

  created () {
    window.getApp.$on('APP_TAG_UPDATE_DIALOG', (tag) => {
      this.showEditModel = (!this.showEditModel)
      this.tag_data.id = tag.id
      this.tag_data.name = tag.name
      this.tag_data.description = tag.description
    });
  },

  methods: {
    clear () {
      this.tag_data.name=''
      this.tag_data.description=''
      this.$validator.reset()
    },

    updateTag(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          this.sending= true

          axios.put('/api/helpers/tags/'+this.tag_data.id, this.$data.tag_data)
          .then((response) => {
            window.getApp.$emit('APP_UPDATE_ALL_TAGS_DATA')
            this.sending= false
            this.clear()
            this.showEditModel = (!this.showEditModel)
            this.showToastAlert('success', 'Operação efetuada com sucesso <i class="fa fa-arrow-right"></i>!')
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
