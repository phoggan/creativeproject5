import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Reviews from '@/components/Reviews'
import Selections from '@/components/Selections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
       path: '/Reviews',
       name: 'Reviews',
       component: Reviews
    },
    {
        path: '/Selections',
        name: 'Selections',
        component: Selections
    }
  ]
})
