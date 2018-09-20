// ===============================================================
// ===============================================================
require('./bootstrap')
  // =============================================================
  // =============================================================
  // ============================= Main Lib ======================
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
  // import VeeValidate from 'vee-validate';
import pt from 'vee-validate/dist/locale/pt_PT'
import VeeValidate, {
  Validator
}
from 'vee-validate'
import VTooltip from 'v-tooltip'



// ========================= Main Components ===================
import App from './components/App.vue'
  // ========================= Import Styles =====================
import 'font-awesome/css/font-awesome.min.css'
// import 'fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// ========================== Suport Libs ========================
import 'babel-polyfill'
// ===============================================================
// Vue.component('acme', Acme)


// ========================= Vue Lib =====================
import router from './_router'
import store from './_store'
import {
  initialize
}
from './_helpers/initialize'
  // ========================= Vue Lib Usage =====================
Validator.localize('pt', pt);

Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.indigo.base, // #E53935
  //   secondary: colors.indigo.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {},
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
})
Vue.use(VueSweetalert2)
Vue.use(VeeValidate)
Vue.use(VTooltip)


initialize(store, router)

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
