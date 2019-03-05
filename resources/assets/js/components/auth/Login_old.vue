<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  v-model="loginForm.email"
                  :rules="[rules.required, rules.email]"
                  label="Email"
                  required
                  append-icon="fa fa-user"
                  type="email"
                  autofocus
                  clearable
                  ></v-text-field>
                  <v-text-field
                  v-model="loginForm.password"
                  :rules="[rules.required]"
                  required
                  :append-icon="e1 ? 'fa-eye' : 'fa-eye-slash'"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  name="input-10-1"
                  label="Palavra passe"
                  hint="No m]inimo 8 caractere"
                  min="8"
                  counter
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn color="primary" type="submit" form="check-login-form">Entrar</v-btn> -->
                <v-btn color="primary" @click="authenticate">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {login} from '../../_helpers/auth'
export default {
  data: () => ({
    loginForm: {
      email: '',
      password: ''
    },
    error: null,
    rules: {
      required: (value) => !!value || 'Required.',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      }
    },
    drawer: null,
    e1: true,
  }),

  methods:{
    authenticate(){
      this.$store.dispatch('login')
      login(this.$data.loginForm).then((response) => {
        this.$store.commit('loginSuccess', response)
        this.$router.push({path: '/dashboard'})
      }).catch((error) => {
        this.$store.commit('loginFailed', {error})
        this.errorAlert(this.loginError)
      })
    },

    errorAlert(message){
      // this.$alertify.error(message)
      this.$swal(message,
  'That thing is still around?',
  'question');
    }
  },
  computed: {
    loginError: function () {
      return this.$store.getters.authError
    }
  }
}
</script>
