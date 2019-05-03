import Vue from 'vue'


import App from './App.vue'
import Buefy from 'buefy'

import 'buefy/dist/buefy.css'


import Router from 'vue-router'
import Home from '@/components/Home';
import Accessibility from '@/components/Accessibility';

Vue.use(Buefy);
Vue.config.productionTip = false

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/accessibility',
      name: 'Accessibility',
      component: Accessibility
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
