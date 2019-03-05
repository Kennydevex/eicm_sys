<template lang="html">
  <v-container grid-list-md fluid>
    <v-form ref="form">
      <v-layout wrap row>
        <v-flex xs12>
          <v-card flat>
            <v-card-title primary-title>
              <v-layout align-center justify-center>
                <v-icon size="45" color="primary">input</v-icon>
              </v-layout>
            </v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-alert
                  :value="loginError"
                  color="error"
                  icon="warning"
                  outline
                  dismissible
                  transition="scale-transition"
                  >
                  {{loginError}}
                </v-alert>
              </v-flex>
            </v-layout>
            <v-layout row wrap>

              <v-flex xs12>
                <v-text-field
                v-model="loginForm.email"
                label="Email"
                required
                append-icon="fa fa-user"
                type="email"
                autofocus
                clearable
                hint="Insira o seu email de registo"
                v-validate="'required|email'"
                data-vv-name="email"
                :error-messages="errors.collect('email')"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                v-model="loginForm.password"
                :append-icon="e1 ? 'fa-eye' : 'fa-eye-slash'"
                @click:append="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                name="input-10-1"
                label="Palavra passe"
                hint="Insira a sua palavra passe"
                counter
                v-validate="'required'"
                data-vv-name="password"
                :error-messages="errors.collect('password')"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-checkbox
                v-model="loginForm.remember_token"
                label="Continuar ativo"
                ></v-checkbox>
              </v-flex>
              <v-flex xs12>
                <a href="#">Esqueci-me da palavra passe</a>
              </v-flex>
            </v-layout>

          </v-card-text>

          <v-card-actions>
            <v-flex xs12 right>
              <v-btn
              color="primary"
              small
              flat
              @click="authenticate"
              :loading="sending"
              :disabled="sending"
              >Entrar</v-btn>
              <v-btn
              @click="clear"
              flat
              small
              >Limpar</v-btn>

              <!-- <v-btn
              @click="handleShowHideAuthModel"
              color="error"
              flat
              small
              >Fechar</v-btn> -->
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
import {login} from '../../_helpers/auth'
import {clearForm} from '../../_mixins/ClearForm'
import {appFlashAlert} from '../../_mixins/AppFlashAlert'
// import {handleModels} from '../../_mixins/HandleModels'

export default {
  mixins: [clearForm, appFlashAlert],
  data: () => ({
    sending: false,
    loginForm: {
      email: '',
      password: '',
      remember_token: false,
    },
    e1: true,
    dictionary: validateDictionary,

  }),

  mounted() {
    this.$validator.localize('pt', this.dictionary)
  },

  computed: {
    loginError: function () {
      return this.$store.getters.authError
    }
  },

  methods:{
    authenticate(){
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          this.sending = true;
          this.$store.dispatch('login')
          login(this.$data.loginForm).then((response) => {
            this.$store.commit('loginSuccess', response)
            this.$router.push({path: '/dashboard'})
            this.sending = false;
            this.clear()
          }).catch((error) => {
            this.$store.commit('loginFailed', {error})
            this.sending = false;

          })
        }
      });
    },
  },
}
</script>

<style lang="css" scoped>
.container{
  padding: 0;
}
</style>
