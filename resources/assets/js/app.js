// ===============================================================
// ===============================================================
require('./bootstrap')
  // =============================================================
  // =============================================================
  // ============================= Main Lib ======================
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAlertify from "vue-alertify"
import VueSweetalert2 from 'vue-sweetalert2'

// ========================= Main Components ===================
import App from './components/App.vue'
  // ========================= Import Styles =====================
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.min.css'
// import 'fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
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
Vue.use(VueAlertify);
Vue.use(VueSweetalert2);

initialize(store, router)

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
