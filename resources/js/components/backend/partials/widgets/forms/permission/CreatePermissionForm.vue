<template lang="html">
  <v-dialog
  v-model="showCreateModel"
  max-width="640px"
  persistent
  >
  <v-card>
    <v-card-title>
      <span class="headline"><v-icon>lock_open</v-icon> Criar permissão</span>
    </v-card-title>

    <v-card-text>
      <v-form ref="form">
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
            outline>
          </v-textarea>
        </v-flex>

      </v-layout>
    </v-form>
  </v-card-text>

  <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn
    color="primary"
    flat="flat"

    @click="addPermission"
    >
    Guardar
  </v-btn>


  <v-btn
  color="warning"
  flat="flat"
  @click="clear"

  >
  Limpar
</v-btn>
<v-btn
color="error"
flat="flat"
@click="showCreateModel = false"

>
Sair
</v-btn>



</v-flex>

</v-card-actions>
</v-card>
</v-dialog>
</template>

<script>
import validateDictionary from '../../../../../../_helpers/api/validateDictionary'
import {clearForm} from '../../../../../../_mixins/ClearForm'
import {appFlashAlert} from '../../../../../../_mixins/AppFlashAlert'
import {handleModels} from '../../../../../../_mixins/HandleModels'
export default {
  mixins: [clearForm, appFlashAlert, handleModels],

  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {

      permission: {
        name: '',
        display_name: '',
        description: '',
      },
      showCreateModel: false,
      dictionary: validateDictionary,
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
            this.showToastAlert('success', 'Permissão criada com sucesso')
            this.handleShowHideModel()
            window.getApp.$emit('APP_UPDATE_ALL_PERMISSTIONS_DATA')
            window.getApp.$emit('APP_UPDATE_ALL_ROLE_DATA')


          })
          .catch((err) => {console.log()})
        }
      });
    },


  }

}
</script>

<style lang="css">
</style>
