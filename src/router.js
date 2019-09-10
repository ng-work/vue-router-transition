import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{index:0},
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      meta:{index:1},
      component: Demo
    }
  ]
})
