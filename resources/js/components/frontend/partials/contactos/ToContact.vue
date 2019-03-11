<template>
  <v-card color="white" flat ml-5>
    <v-card-text>
      <v-form ref="form">
        <!-- ================================================= -->
        <v-container grid-list-xl fluid>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
              :disabled="!!currentUser"
              color="purple darken-2"
              label="Nome"
              v-model="messageInfo.name"
              name="name"
              v-validate="'required'"
              data-vv-name="name"
              :error-messages="errors.collect('name')"
              >
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
            :disabled="!!currentUser"
            color="blue darken-2"
            label="Email"
            v-model="messageInfo.from"
            name="email"
            v-validate="'required|email'"
            data-vv-name="email"
            :error-messages="errors.collect('email')"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <p>Para:</p>
            <v-radio-group v-model="messageInfo.to" row>
              <v-radio label="Direção" value="director@gmail.com"></v-radio>
              <v-radio label="Sub-Direção" value="subdiretor@gmail.com"></v-radio>
              <v-radio label="Secretaria" value="sec@gmail.com"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs12 sm6>
          <v-select
          ref="subject"
          v-validate="'required'"
          data-vv-name="subject"
          :error-messages="errors.collect('subject')"
          name="subject"
          :items="subjects"
          v-model="messageInfo.subject"
          label="Escolha um assunto"
          chips
          deletable-chips
          ></v-select>
        </v-flex>
        <template v-if="messageInfo.subject=='Outros'">
          <v-flex xs12>
            <v-text-field
            color="blue darken-2"
            label="Assunto"
            v-model="messageInfo.otherSubject"
            name="otherSubject"
            hint="Especifíque o seu assunto..."
            v-validate.immediate="'required_if:subject,Outros'"
            data-vv-name="otherSubject"
            :error-messages="errors.collect('otherSubject')"
            ></v-text-field>

          </v-flex>

        </template>
        <v-flex xs12>
          <v-textarea
          outline
          label="Escreva aqui a sua mensagem"
          v-model="messageInfo.content"
          name="message"
          v-validate="'required'"
          data-vv-name="message"
          :error-messages="errors.collect('message')"
          hint="Por favor seja claro e direto com a sua mensagem..."
          ></v-textarea>
        </v-flex>
        <v-flex xs12 pa-1>
          <v-btn outline color="primary" @click="sendMessage()">Enviar</v-btn>
        </v-flex>

      </v-layout>
    </v-container>
    <!-- ================================================= -->
  </v-form>
</v-card-text>
</v-card>
</template>
<script>
import validateDictionary from '../../../../_helpers/api/validateDictionary'
import {appFlashAlert} from '../../../../_mixins/AppFlashAlert'
import {clearForm} from '../../../../_mixins/ClearForm'
export default {
  mixins: [appFlashAlert, clearForm],
  data () {
    return {
subjects: ['Matricula', 'Aulas', 'Pautas', 'Propínas', 'Provas', 'Cursos', 'Formação Profossional', 'Outros'],
      messageInfo: {
        name: '',
        from: '',
        to: '',
        subject:'',
        otherSubject:'',
        content: '',
      },
      dictionary: validateDictionary,

    }
  },
  mounted() {
    // Para utilizar mensagens de valida;\oes personalizadas
    this.$validator.localize('pt', this.dictionary)
  },


  computed: {

    currentUser: function() {
      return this.$store.getters.currentUser;
    },

  },

  created() {
    this.setContactFields()
  },

  methods: {
    setContactFields(){
      if (this.currentUser) {
        this.messageInfo.name = this.currentUser.username
        this.messageInfo.from = this.currentUser.email
      }
    },

    teste(){
      console.log('testndo porra');
    },
    sendMessage() {
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios
          .post("/api/services/send_messages", this.$data.messageInfo)
          .then(response => {
            this.clear()
            this.showToastAlert('success', 'Mensagem enviada com sucesso. A escola agradece a sua consideração')
          })
          .catch(err => {
            console.log()
          })
        }
      })
    },
  }
}
</script>
