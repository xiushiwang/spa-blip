import Vue from 'vue'
import Router from 'vue-router'

import login from './shared/components/login.vue'
import home from './shared/components/home.vue'
import about from './about.vue'
import product from './product.vue'
import contactUs from './contact-us.vue'
import calculator from './calculator/calculator.vue'
import articles from "@/app/articles";

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
    // {
    //   path: '/testing',
    //   name: 'testing',
    //   component: testing
    // },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/',
      alias: ['/home'],
      name: 'home',
      component: home
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: contactUs
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles
    },
  ]
})
