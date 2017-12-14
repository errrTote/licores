import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import parallax from 'vue-parallax'

import routes from '@/router/index'

const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)


Vue.use(VueRouter)
Vue.use(parallax)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  parallax
})
