import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material-design-icons/styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faArrowRight, faCoffee, faMapMarkerAlt, faMapMarker, faSearch, faLink, faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faLinkedinIn, faTwitter, faFacebookMessenger, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons"

import VueWow from "vue-wow";

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


import router from '../src/app/router';

import VueDropdown from 'vue-dynamic-dropdown'
// var VueDropdown = require('vue-dynamic-dropdown');

import * as VueGoogleMaps from "vue2-google-maps";

import VTooltip from 'v-tooltip'

import vuescroll from 'vuescroll';
import "vuescroll/dist/vuescroll.css";

library.add(
    faPlus, faArrowRight, faCoffee, faMapMarkerAlt, faMapMarker, faSearch, faLink, faBolt,
    faLinkedin, faLinkedinIn ,faTwitter, faFacebookMessenger, faInstagram, faMedium,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-dropdown', VueDropdown);

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueWow)
Vue.use(VueFormWizard)
Vue.use(VueGoogleMaps, {
  load: {
    key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VTooltip)
Vue.use(vuescroll)

new Vue({
  router,               // Add this line
  render: h => h(App),
}).$mount('#app')

// You can set global config here.
Vue.use(vuescroll, {
  ops: {
    // The global config
  },
  name: 'myScroll' // customize component name, default -> vueScroll
});

/**
 * or
 */
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};



//https://binarcode.github.io/vue-form-wizard/#/ --> documentation on how to use the wizard