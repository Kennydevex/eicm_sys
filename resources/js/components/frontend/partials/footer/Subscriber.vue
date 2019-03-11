<template>
  <v-flex xs12 sm4 pa-3>
    <h3 class="pb-3">SUBSCRIÇÃO</h3>

    <v-divider></v-divider>
    <v-card color="transparent" flat>
      <!-- <v-card-title primary-title>Subscreva-se para receber novidades em promeira mão!</v-card-title> -->
      <v-card-text>


        <v-form ref="form">
          <v-layout row wrap>

            <v-flex xs12>
              <v-text-field
              v-model="subscriber.email"
              color="primary"
              name="email"
              id="app_subscribe"
              placeholder="Insira seu email aqui"
              hint="Subscreva-se para receber novidades em promeira mão!"
              append-outer-icon="fa-send"
              @click:append-outer="subscribe()"
              box
              reverse
              clearable
              v-validate="'required|email'"
              data-vv-as="email"
              :error-messages="errors.collect('email')"
              ></v-text-field>
            </v-flex>


          </v-layout>
        </v-form>

      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
import {clearForm} from '../../../../_mixins/ClearForm'
import validateDictionary from "../../../../_helpers/api/validateDictionary"
import {appFlashAlert} from '../../../../_mixins/AppFlashAlert'



export default {
  mixins: [appFlashAlert, clearForm],
  name: "",
  data: () => ({
    subscriber: {
      email: ''
    },

    dictionary: validateDictionary,

  }),

  methods: {
    subscribe() {
      this.$validator.validateAll().then(noErrorOnValidate => {
        if (noErrorOnValidate) {
          axios
          .post("/api/front/subscribe", this.$data.subscriber)
          .then(response => {
            this.clear()
            this.handleShowHideModel()
          })
          .catch(err => {
            console.log()
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
