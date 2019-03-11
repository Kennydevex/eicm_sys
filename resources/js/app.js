// ===============================================================
// ===============================================================
require('./bootstrap')
  // =============================================================
  // =============================================================
  // ============================= Main Lib ======================
import Vue from 'vue'
import Eagle from 'eagle.js'
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import pt from 'vee-validate/dist/locale/pt_PT'
import VeeValidate, {
  Validator
}
from 'vee-validate'
import VTooltip from 'v-tooltip'
import * as VueGoogleMaps from 'vue2-google-maps'


// import eagle.js default styles
import 'eagle.js/dist/eagle.css'
// import animate.css for slide transition
import 'animate.css'



//import validateDictionary from './_helpers/api/validateDictionary'

// ========================= Main Components ===================
import App from './components/App.vue'
  // Vue.component(App, require('./components/App.vue'));
  // ========================= Import Styles =====================
import 'font-awesome/css/font-awesome.min.css'
// import 'fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

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


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBeIXKXfwTnjjPaDZhZGAkOYxolWcknt3Q',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})
Vue.use(Eagle)


Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.indigo.base, // #E53935
  //   secondary: colors.indigo.lighten4, // #FFCDD2
  //   succsses: colors.indigo.base // #3F51B5
  //   wearning: colors.indigo.base // #3F51B5
  //   accent: colors.indigo.base // #3F51B5
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


// Vue.mixin({
//   mounted() {
//     console.log('hello from mixin!')
//   }
// })


initialize(store, router)


const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
