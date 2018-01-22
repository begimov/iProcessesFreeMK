import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Purchase from '@/components/purchase/Purchase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    }
  ]
})
