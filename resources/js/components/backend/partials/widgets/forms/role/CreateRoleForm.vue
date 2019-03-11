<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>

    <v-dialog
    v-model="showCreateModel"
    max-width="700px"
    persistent
    >
    <v-card>
      <v-card-title>
        <span class="headline"><v-icon>assignment_ind</v-icon> Criar função</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
              label="* Nome da Função"
              name="name"
              v-model="role.name"
              v-validate="'required'"
              data-vv-name="name"
              :error-messages="errors.collect('name')"
              required
              hint="Idendificador único da função"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
              label="* Rótulo"
              name="display_name"
              hint="Nome de apresentação da função"
              v-model="role.display_name"
              required
              v-validate="'required'"
              data-vv-name="display_name"
              :error-messages="errors.collect('display_name')"
              ></v-text-field>
            </v-flex>

            <v-flex xs12 d-flex>
              <v-select
              :disabled="!permissions.length"
              :items="permissions"
              v-model="role.permissions"
              item-text="display_name"
              item-value="id"
              multiple
              label="Associar permissões"
              chips
              deletable-chips
              prepend-icon="lock_open"
              hide-selected
              no-data-text="Nenhuma permissão registada"
              ></v-select>

            </v-flex>
            <v-flex xs12 v-if="!permissions.length">
              <span>Nenhuma permissão criada</span><v-btn @click="openCreatePermisssionDialog" flat color="primary">Criar uma?</v-btn>
            </v-flex>

            <v-flex xs12>
              <v-textarea
              label="Descrição da função"
              name="description"
              hint="Escreva aqui uma pequena descrição desta função"
              v-model="role.description"
              outline
              >
            </v-textarea>
          </v-flex>




        </v-layout>
      </v-form>
      <small>*Campos de preenchimento obrigatório</small>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" flat small :to="{name: 'permissions'}">Ver Permissões</v-btn>
      <v-btn v-if="permissions.length" color="primary" flat small @click="openCreatePermisssionDialog">Criar Permissões</v-btn>

      <v-spacer></v-spacer>
      <v-btn
      color="primary"
      flat="flat"

      @click="addrole"
      >
      Registar
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
<v-layout row justify-center>
  <create-permission-form></create-permission-form>
</v-layout>
</v-container>
</template>

<script>
import validateDictionary from '../../../../../../_helpers/api/validateDictionary'
import {clearForm} from '../../../../../../_mixins/ClearForm'
import {appFlashAlert} from '../../../../../../_mixins/AppFlashAlert'
import {rolesPermissions} from '../../../../../../_mixins/RolesPermissions'
import CreatePermissionForm from '../permission/CreatePermissionForm'

import {handleModels} from '../../../../../../_mixins/HandleModels'

export default {
  mixins: [clearForm, appFlashAlert, rolesPermissions, handleModels],
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {

      role: {
        name: '',
        display_name: '',
        description: '',
        permissions: []
      },
      showCreateModel: false,
      valid: true,
      dictionary: validateDictionary,
    }
  },

  mounted () {
    this.$validator.localize('pt', this.dictionary)
  },

  created () {
    this.getPermissions()
    window.getApp.$on('APP_ROLE_CREATE_DIALOG', () => {
      this.handleShowHideModel()
    })
  },

  computed: {
    permissions: function () {
      return this.$store.getters.permissions
    },
  },

  components: {
    CreatePermissionForm
  },

  methods: {

    handleShowHideModel: function () {
      this.showCreateModel =!this.showCreateModel
    },

    openCreatePermisssionDialog(){
      this.handleToggleCreatePermissionDialog()
      this.handleShowHideModel()
    },


    addrole(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios.post('/api/sys/roles', this.$data.role)
          .then((response) => {
            this.showToastAlert('success', 'Função criada com sucesso')

            this.clear()
            this.handleShowHideModel()
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
