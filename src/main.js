import Vue from 'vue'
import App from './App'
import info from './info'
require ('./css/app.css')
require ('./css/amazeui.min.css')
require ('./fonts/fontawesome-webfont.ttf')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  props: ['myMessage']
})
new Vue({
  el:'#info',
  template:'<info/>',
  components:{
    info
  }
})
