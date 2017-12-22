import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/home',
      name: 'Home',
      component: Root
    },
    {
      path: '/page/*',
      name: 'Page',
      component: Root
    },
    {
      path: '/article/*',
      name: 'Article',
      component: Root
    }
  ]
})
