import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'
import Detail from '@/views/detail/Detail.vue'
import City from '@/views/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props:true
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
