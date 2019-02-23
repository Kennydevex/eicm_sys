<template lang="html">
  <v-layout row wrap>
    <v-dialog persistent v-model="authModel" max-width="640" origin="center center">
      <v-card flat>
        <v-flex xs12 pa-0>
          <v-card-text>
            <v-tabs>
              <v-tabs-slider color="teal darken-4"></v-tabs-slider>
              <!-- =================================== -->
              <v-tab href="#loginTab">
                Entrar
              </v-tab>

              <v-tab href="#registerTab">
                Registar
              </v-tab>
              <!-- =================================== -->

              <!-- =================================== -->
              <v-tab-item :value="'loginTab'" :key="1">
                <AppLogin></AppLogin>
              </v-tab-item>

              <v-tab-item :value="'registerTab'" :key="2">
                <AppRegister></AppRegister>
              </v-tab-item>
              <!-- =================================== -->
            </v-tabs>
          </v-card-text>
        </v-flex>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import AppLogin from './AppLogin.vue'
import AppRegister from './AppRegister.vue'
export default {
  data () {
    return {
      authModel: false
    }
  },

  created: function () {
    window.getApp.$on('APP_SHOW_AUTH_MODEL', () => {
      this.setAuthModel()
    });

  },

  methods: {
    setAuthModel: function () {
      this.authModel = !this.authModel

    }
  },
  components: {
    AppLogin,
    AppRegister,
  }
}
</script>

<style lang="css">
</style>
