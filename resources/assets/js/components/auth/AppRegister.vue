<template lang="html">
  <div class="">
    <v-container grid-list-md>
      <v-form ref="form">
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field
            label="Nome"
            required
            v-model="user.first_name"
            >
          </v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field label="Apelido" v-model="user.last_name"></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field label="Utilizador" required v-model="user.username"></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field label="Email" required  hint="Insira um email válido" v-model="user.email"></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-text-field label="Palavra Passe" type="password" required v-model="user.password"></v-text-field>
        </v-flex>

        <v-flex xs12>
          <v-radio-group v-model="user.gender" row>
            <v-radio label="Masculino" value="M"></v-radio>
            <v-radio label="Feminino" value="F"></v-radio>
            <v-radio label="Outros" value="Other"></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12>
          <v-btn color="primary" @click="addUser">Salvar</v-btn>
          <v-btn color="primary" @click="clear">Limpar</v-btn>
        </v-flex>
      </v-layout>
    </v-form>

  </v-container>
  <small>* - Indica campos obrigatório</small>
</div>
</template>

<script>
export default {

  data () {
    return {
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
    }
  },

  methods: {
    addUser(){
      axios.post('/api/auth/register', this.$data.user)
      .then((response) => {console.log(response.data);}).catch((err) => {console.log(err);})
    },
    clear () {
      this.$refs.form.reset()
    }
  }

}
</script>
<style lang="css" scoped>
.container{
  padding: 0;
}
</style>
