// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import "./assets/css/iconfont.css"
import "./assets/css/1px.css"
import "./assets/css/reset.css"
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
