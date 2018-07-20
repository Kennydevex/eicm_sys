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
                centered
                icons-and-text
                >
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab href="#loginTab">
                  <v-icon>fa fa-sign-in fa-2x</v-icon>
                </v-tab>

                <v-tab href="#registerTab">
                  <v-icon>fa fa-user-plus fa-2x</v-icon>
                </v-tab>


                <v-tab-item
                :id="'loginTab'"
                :key="1"
                >
                <v-card flat>
                  <v-card-text>
                    <AppLogin></AppLogin>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item
              :id="'registerTab'"
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
        <v-card-actions>
          <v-btn
          color="green darken-1"
          flat="flat"
          @click.native="setAuthModel"
          >
          Disagree
        </v-btn>

        <v-btn
        color="green darken-1"
        flat="flat"
        @click.native="setAuthModel"
        >
        Agree
      </v-btn>
    </v-card-actions>
  </v-card>
</v-card-text>
</v-flex>
<v-flex xs4>
  <v-card-media
  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
  height="100%"
  ></v-card-media>

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
  props: ['authModel'],

  methods: {
    setAuthModel: function () {
      this.$emit('setAuthModel')
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
