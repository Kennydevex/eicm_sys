<template lang="html">
  <v-layout row wrap>
    <v-dialog
    persistent
    v-model="authModel"
    max-width="640"
    origin="center center"
    >
    <v-card pa-1>
      <v-layout row wrap>
        <v-flex xs8 pa-0>
          <v-card-text>
            <v-card flat>
              <v-card-text>
                <v-tabs
                >
                <v-tabs-slider color="teal darken-4"></v-tabs-slider>
                <v-tab href="#loginTab">
                  Login
                  <!-- <v-icon>fa-sign-in</v-icon> -->
                </v-tab>

                <v-tab href="#registerTab">
                  Registar
                  <!-- <v-icon>fa-user-plus</v-icon> -->
                </v-tab>
                <v-tab-item
                :value="'loginTab'"
                :key="1"
                >
                <v-card flat>
                  <v-card-text>
                    <AppLogin></AppLogin>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item
              :value="'registerTab'"
              :key="2"
              >
              <v-card flat>
                <v-card-text>
                  <AppRegister></AppRegister>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
          block
          @click.native="setAuthModel"
          >
          Fechar
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-card-text>
</v-flex>
<v-flex xs4>


  <v-img
  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
  height="100%"
  ></v-img>

</v-flex>
</v-layout>
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
