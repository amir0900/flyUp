import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import flyPage from '@/components/flyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: login
    },
    {
      path: '/flyPage',
      name: 'flyPage',
      component: flyPage
    }
  ],
  mode:'history',
})
