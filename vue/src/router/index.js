import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Questions from '@/components/Questions'
import API from '@/components/API'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/api',
      name: 'API',
      component: API
    }
  ]
})
