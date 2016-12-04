import Vue from 'vue'
import App from './App'
import info from './info'
import about from './About'
import VueRouter from "vue-router";
require('./css/app.css')
require('./css/amazeui.min.css')
require('./fonts/fontawesome-webfont.ttf')
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    components: {
      default: info
    }
  }, {
    path: '/about',
    component: about
  }]
})
new Vue({
  el: '#app',
  render: h => h('app'),
  components: {
    App
  },
  props: ['myMessage']
})
new Vue({
  router: router,
  render: h => h('info'),
  components: {
    info
  }
}).$mount('#info')

new Vue({
  router: router,
  render: h => h('about'),
  components: {
    about
  }
}).$mount('#about')
