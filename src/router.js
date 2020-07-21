import Vue from 'vue'
import Router from 'vue-router'

import login from './components/login.vue'
import home from './components/home.vue'
import about from './components/about.vue'
import product from './components/product'
import calculator from './components/calculator.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    
    {
      path: '/',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
  ]
})
