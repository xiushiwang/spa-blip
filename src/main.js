import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material-design-icons/styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueWow from "vue-wow";


import router from '../src/app/router';

library.add(faPlus, faArrowRight, faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueWow)

new Vue({
  router,               // Add this line
  render: h => h(App),
}).$mount('#app')
