// ===============================================================
// ===============================================================
require('./bootstrap')
  // =============================================================
  // =============================================================
  // ============================= Main Lib ======================
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAlertify from "vue-alertify"
import VueSweetalert2 from 'vue-sweetalert2';


// ========================= Vue Lib =====================
import router from './_router'
import store from './_store'
import {
  initialize
}
from './_helpers/reset'
  // ========================= Vue Lib Usage =====================
Vue.use(Vuetify)
Vue.use(VueAlertify);
Vue.use(VueSweetalert2);


// ========================= Main Components ===================
import App from './components/App.vue'
  // ========================= Import Styles =====================
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'font-awesome/css/font-awesome.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// ========================== Suport Libs ========================
import 'babel-polyfill'
// ===============================================================
// Vue.component('acme', Acme)

initialize(store, router)

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
