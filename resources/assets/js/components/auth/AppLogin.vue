<template lang="html">
  <div>
    <v-container grid-list-md fluid>
      <v-layout wrap>

        <v-flex xs12>
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
        </v-flex>

        <v-flex xs12>
          <v-text-field
          v-model="loginForm.password"
          :rules="[rules.required]"
          required
          :append-icon="e1 ? 'fa-eye' : 'fa-eye-slash'"
          @click:append="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          name="input-10-1"
          label="Palavra passe"
          hint="No m]inimo 8 caractere"
          min="8"
          counter
          ></v-text-field>
        </v-flex>
        <v-btn color="primary" @click="authenticate">Entrar</v-btn>
      </v-layout>
    </v-container>
  </div>
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

  <style lang="css" scoped>
  .container{
    padding: 0;
  }
  </style>
