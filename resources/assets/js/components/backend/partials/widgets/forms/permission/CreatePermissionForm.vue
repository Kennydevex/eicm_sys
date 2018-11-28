<template lang="html">
  <v-dialog
  v-model="showCreateModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title class="headline grey">Criar Permissão</v-card-title>

    <v-card-text>
      <v-form v-model="valid">
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
            label="* Nome da Permisssão"
            name="name"
            v-model="permission.name"
            v-validate="'required'"
            data-vv-name="name"
            :error-messages="errors.collect('name')"
            required
            hint="Idendificador único da permissão"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
            label="* Rótulo"
            name="display_name"
            hint="Nome de apresentação da permissão"
            v-model="permission.display_name"
            required
            v-validate="'required'"
            data-vv-name="rotulo"
            :error-messages="errors.collect('rotulo')"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
            label="Descrição da permissão"
            name="description"
            hint="Escreva aqui uma pequena descrição desta permissão"
            v-model="permission.description"
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
@click="addPermission"
>
Registar
</v-btn>


<v-overflow-btn
:items="dropdown_icon"
label="Guardar"
segmented
target="#dropdown-example"
></v-overflow-btn>
</v-flex>

</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],


      permission: {
        name: '',
        display_name: '',
        description: '',
      },
      showCreateModel: false,
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
    window.getApp.$on('APP_PERMISSION_CREATE_DIALOG', () => {
      this.handleShowHideModel()
    });
  },



  methods: {

    handleShowHideModel: function() {
      this.showCreateModel =!this.showCreateModel
    },
    addPermission(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios.post('/api/sys/permissions', this.$data.permission)
          .then((response) => {
            this.clear()
            this.handleShowHideModel()
            window.getApp.$emit('APP_UPDATE_ALL_PERMISSTIONS_DATA')

          })
          .catch((err) => {console.log()})
        }
      });
    },

    clear () {
      this.permission = {};
      this.$validator.reset()
    },

  }

}
</script>

<style lang="css">
</style>
