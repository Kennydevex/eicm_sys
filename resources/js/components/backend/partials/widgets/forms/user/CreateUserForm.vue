<template>
  <v-layout row justify-center>
    <v-card>
      <v-card-title>
        <span class="headline"><v-icon>person_add</v-icon> Registo</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form">
            <v-layout wrap>

              <v-flex xs12 sm6 md4>
                <v-text-field
                label="Nome*"
                name="first_name"
                v-model="user.first_name"
                v-validate="'required|alpha'"
                data-vv-name="first_name"
                :error-messages="errors.collect('first_name')"
                required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                label="Apelido*"
                name="last_name"
                v-model="user.last_name"
                v-validate="'required|alpha'"
                data-vv-name="last_name"
                :error-messages="errors.collect('last_name')"
                required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                label="Utilizador*"
                name="username"
                v-validate="'required'"
                data-vv-name="username"
                :error-messages="errors.collect('username')"
                v-model="user.username"
                required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                label="Email*"
                name="email"
                v-validate="'required|email'"
                data-vv-name="email"
                :error-messages="errors.collect('email')"
                v-model="user.email"
                required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                label="Phone"
                v-model="user.phone_number"
                mask="###-##-##"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                label="Palavra Passe*"
                name="password"
                v-model="user.password"
                v-validate="'required|min:8'"
                data-vv-name="password"
                :error-messages="errors.collect('password')"
                :type="showPass ? 'text' : 'password'"
                :append-icon="showPass ? 'visibility_off' : 'visibility'"
                @click:append="showPass = !showPass"
                required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                label="Confirmacão da palavra passe"
                name="password_confirmation"
                v-model="user.password_confirmation"
                v-validate="'required'"
                data-vv-name="password_confirmation"
                :error-messages="errors.collect('password_confirmation')"
                type="password"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                label="BI/CNI"
                placeholder="######"
                v-validate="'required'"
                data-vv-name="BI"
                :error-messages="errors.collect('BI')"
                v-model="user.identification_card"
                hint="Insira o seu nº de BI ou CNI"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <p>Sexo do utilizador</p>
                <v-radio-group v-model="user.gender" row>
                  <v-radio label="Masculino" value="1"></v-radio>
                  <v-radio label="Feminino" value="0"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12>
                <p>Ativação da conta</p>
                <v-switch
                v-model="user.status"
                :label="user.status ? 'Ativo':'Inativo'"
                color="indigo"
                value
                input-value="true"
                hide-details
                ></v-switch>
              </v-flex>

              <v-layout row wrap>
                <v-divider></v-divider>
                <v-flex xs12>
                  <v-subheader>Funções e Permissões</v-subheader>

                </v-flex>
                <v-flex xs12>
                  <v-select
                  name="roles"
                  :items="roles"
                  v-model="user.roles"
                  item-text="display_name"
                  item-value="id"
                  label="Função de utilizador"
                  prepend-icon="assignment_ind"
                  no-data-text="Nenhuma função registada"
                  chips
                  multiple
                  deletable-chips
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-select
                  name="permissions"
                  :items="permissions"
                  v-model="user.permissions"
                  item-text="display_name"
                  item-value="id"
                  label="Permissão de utilizador"
                  prepend-icon="lock_open"
                  no-data-text="Nenhuma permissão registada"
                  chips
                  multiple
                  deletable-chips
                  ></v-select>
                </v-flex>

              </v-layout>


            </v-layout>
          </v-form>
        </v-container>
        <small>*Campos de preenchimento obrigatório</small>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="addUser" color="primary">Guardar</v-btn>
        <v-btn flat @click="clear" color="warning">Limpar</v-btn>
        <v-btn flat @click="handleShowCreateUserDialog" color="error">Sair</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script>
import validateDictionary from '../../../../../../_helpers/api/validateDictionary'
import {clearForm} from '../../../../../../_mixins/ClearForm'
import {appFlashAlert} from '../../../../../../_mixins/AppFlashAlert'
import {handleModels} from '../../../../../../_mixins/HandleModels'
import {rolesPermissions} from '../../../../../../_mixins/RolesPermissions'

export default {
  mixins: [clearForm, appFlashAlert, handleModels, rolesPermissions],
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    showPass: false,
    user: {
      first_name: '',
      last_name: '',
      username: '',
      gender: '',
      identification_card: '',
      phone_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      status: false,
      avatar: 'default.png',
      roles: "",
      permissions: "",
    },
    dictionary: validateDictionary,

    dialog: false
  }),
  created () {
    this.getPermissions()
    this.getRoles()
  },
  mounted () {
    // Para utilizar mensagens de valida;\oes personalizadas
    this.$validator.localize('pt', this.dictionary)
  },
  methods: {
    addUser(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios.post('/api/auth/register', this.$data.user)
          .then((response) => {
            window.getApp.$emit("APP_UPDATE_ALL_USERS_DATA");
            this.clear()
          })
          .catch((err) => {console.log(err)})
        }
      });
    },


  }
}
</script>
