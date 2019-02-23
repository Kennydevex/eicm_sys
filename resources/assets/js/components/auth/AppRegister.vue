<template lang="html">
  <v-container grid-list-md>
    <v-form ref="form">
      <v-layout wrap row>
        <v-flex xs12>
          <v-card flat>
            <v-card-title primary-title>
              Registe uma conta no sistema
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>

                <v-flex xs12 sm6>
                  <v-text-field
                  name="first_name"
                  label="Nome"
                  v-model="user.first_name"
                  v-validate="'required|alpha'"
                  data-vv-name="first_name"
                  :error-messages="errors.collect('first_name')"
                  >
                </v-text-field>
              </v-flex>

              <v-flex xs12 sm6>
                <v-text-field
                name="last_name"
                label="Apelido"
                v-model="user.last_name"
                v-validate="'required|alpha'"
                data-vv-name="last_name"
                :error-messages="errors.collect('last_name')"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm4>
                <v-text-field
                name="username"
                label="Utilizador"
                v-model="user.username"
                v-validate="'required|alpha_dash'"
                data-vv-name="username"
                :error-messages="errors.collect('username')"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm8>
                <v-text-field
                name="email"
                label="Email"
                hint="Insira um email válido"
                v-model="user.email"
                v-validate="'required|email'"
                data-vv-name="email"
                :error-messages="errors.collect('email')"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm6>
                <v-text-field
                name="password"
                label="Palavra Passe"
                type="password"
                v-model="user.password"
                v-validate="'required|min:8'"
                data-vv-name="password"
                :error-messages="errors.collect('password')"
                ref="password"
                ></v-text-field>
              </v-flex>

              <v-flex xs12 sm6>
                <v-text-field
                name="password_confirmation"
                label="Confirmação da Palavra Passe"
                type="password"
                v-model="user.password_confirmation"
                v-validate="'required|confirmed:password'"
                data-vv-name="password_confirmation"
                :error-messages="errors.collect('password_confirmation')"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-radio-group v-model="user.gender" row>
                  <v-radio label="Masculino" value="1"></v-radio>
                  <v-radio label="Feminino" value="2"></v-radio>
                </v-radio-group>
              </v-flex>
              <small>Por favor, preencha todos os campos</small>

            </v-layout>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-flex xs12 right>
              <v-btn
              color="primary"
              small
              flat
              @click="addUser"
              :loading="sending"
              :disabled="sending"
              >Enviar</v-btn>
              <v-btn
              @click="clear"
              flat
              small
              >Limpar</v-btn>
              <v-btn
              color="error"
              flat
              small
              @click="handleShowHideAuthModel"
              >Fechar</v-btn>
            </v-flex>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-form>

</v-container>
</template>

<script>
import validateDictionary from '../../_helpers/api/validateDictionary'
import {clearForm} from '../../_mixins/ClearForm'
import {appFlashAlert} from '../../_mixins/AppFlashAlert'
import {handleModels} from '../../_mixins/HandleModels'

export default {
mixins: [clearForm, appFlashAlert, handleModels],
  data () {
    return {
      sending: false,
      user: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        gender: '',
        identification_card: '',
        phone_number: '',
        status: false,
        avatar: 'default.png',
      },
      dictionary: validateDictionary,
    }
  },
  mounted() {
    // Para utilizar mensagens de valida;\oes personalizadas
    this.$validator.localize('pt', this.dictionary)
  },

  methods: {
    addUser(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          this.sending = true;
          axios.post('/api/auth/register', this.$data.user)
          .then((response) => {
            this.sending = false;
            this.clear()
            this.showToastAlert('success', 'Dados enviados para o servidor, aguarde a ativação da conta')

          })
          .catch((err) => {
            this.sending = false;
          })
        }
      });
    },


}
}
</script>
<style lang="css" scoped>
.container{
  padding: 0;
}
</style>
