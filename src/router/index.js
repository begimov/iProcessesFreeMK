import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Plan from '@/components/plan/Plan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
