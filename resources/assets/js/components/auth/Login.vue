<template lang="html">
  <div class="back">


    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
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
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import AppLogin from './AppLogin.vue'
import AppRegister from './AppRegister.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    AppLogin,
    AppRegister,
  }
}
</script>

<style lang="css">
.back {
  background-image:  url(/images/app/articles/loginback.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
  background-size: cover;
}
#inspire {
  background: none;
}
</style>
