<template>
  <v-form v-model="valid">
    <v-subheader class="pa-0">INFORMAÇÕES DO UTILIZADOR</v-subheader>
    <v-layout row wrap>
      <v-flex sm6 xs12>
        <v-text-field
        label="Nome"
        name="first_name"
        placeholder="Seu nome aqui"
        v-model="user.first_name"
        v-validate="'required'"
        data-vv-name="nome"
        :error-messages="errors.collect('nome')"
        required
        ></v-text-field>
      </v-flex>

      <v-flex sm6 xs12>
        <v-text-field
        label="Apelido"
        name="last_name"
        placeholder="Seu apelido aqui"
        v-model="user.last_name"
        v-validate="'required'"
        data-vv-name="apelido"
        :error-messages="errors.collect('apelido')"
        required
        ></v-text-field>
      </v-flex>
      <v-flex sm6 xs12>
        <v-text-field
        label="Utilizador"
        placeholder="Um nome como utilizador"
        name="username"
        v-validate="'required'"
        data-vv-name="utilizador"
        :error-messages="errors.collect('utilizador')"
        v-model="user.username"
        required
        hint="Um nome único para se identificar no sistema"

        ></v-text-field>
      </v-flex>
      <v-flex sm6 xs12>
        <v-text-field
        label="Email"
        placeholder="Um endereço de email válido"
        name="email"
        v-validate="'required|email'"
        data-vv-name="email"
        :error-messages="errors.collect('email')"
        v-model="user.email"
        required
        hint="Deve ter no mínimo 8 caracteres"

        ></v-text-field>
      </v-flex>
      <v-flex sm6 xs12>
        <v-text-field
        label="Palavra Passe"
        name="password"
        placeholder="********"
        v-model="user.password"
        v-validate="'required'"
        data-vv-name="palavra passe"
        :error-messages="errors.collect('palavra passe')"
        required
        :type="show1 ? 'text' : 'password'"
        :append-icon="show1 ? 'visibility_off' : 'visibility'"
        @click:append="show1 = !show1"
        ></v-text-field>
      </v-flex>
      <v-flex sm6 xs12>
        <v-text-field
        label="Confirmacoa da palavra passe"
        name="password_confirmation"
        placeholder="Seu apelido aqui"
        v-model="user.password_confirmation"
        v-validate="'required'"
        data-vv-name="canfirmacao"
        :error-messages="errors.collect('canfirmacao')"
        required
        type="password"
        hint="Certifica-se de inserir palavra passe inserido anteriormente"
        ></v-text-field>
      </v-flex>
      <v-flex sm6 xs12>
        <v-text-field
        label="Phone"
        placeholder="(+238) ###-##-##"
        v-validate="'required'"
        data-vv-name="phone"
        :error-messages="errors.collect('phone')"
        v-model="user.phone_number"
        mask="(+238) ###-##-##"
        required
        hint="Certifica-se de inserir um numero ativo"

        ></v-text-field>

      </v-flex>
      <v-flex sm6 xs12>
        <v-text-field
        label="BI"
        placeholder="######"
        v-validate="'required'"
        data-vv-name="BI"
        :error-messages="errors.collect('BI')"
        v-model="user.identification_card"
        mask="######"
        required
        hint="Insira o seu nº de BI"

        ></v-text-field>

      </v-flex>
      <v-flex sm6 xs12>
        <v-radio-group v-model="user.gender" row>
          <v-radio label="Masculino" value="M"></v-radio>
          <v-radio label="Feminino" value="F"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex sm6 xs12>
        <v-switch
        v-model="user.status"
        label="Ativar"
        :label="user.status ? 'Desativar':'Ativar'"
        color="indigo"
        value
        input-value="true"
        hide-details
        ></v-switch>
      </v-flex>


      <v-flex xs12>
        <div class="form-btn">
          <v-btn outline @click="addUser" color="primary">Guardar</v-btn>
          <v-btn outline @click="clear">Limpar</v-btn>
          <v-btn outline @click="handleShowCreateUserDialog">Sair</v-btn>
        </div>

      </v-flex>
    </v-layout>


  </v-form>
</template>

<script>
// import Countries from '../../../../../_api/source/country'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    show1: false,
    user: {
      first_name: '',
      last_name: '',
      username: '',
      gender: '',
      identification_card: '',
      phone_number: '',
      email: '',
      password: '',
      // password_confirmation: '',
      status: false,
      avatar: 'default.png',
    },


    valid: true,

    dictionary: {
      attributes: {
        email: 'E-mail Address2'
        // custom attributes
      },
      custom: {
        nome: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 10 characters'
          // custom messages
        },

        email: {
          email: () => 'Por favor insira um email válido',
        },
        select: {
          required: 'Select field is required'
        }
      }
    }

  }),
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
            // console.log(response.data)
            this.clear()
          })
          .catch((err) => {console.log(err)})
        }
      });
    },


    clear () {
      this.user = {};
      this.$validator.reset()
    },

    handleShowCreateUserDialog () {
      window.getApp.$emit('APP_SHOW_CREATE_USER_DIALOG');
      this.clear()
    },
  }
};
</script>
