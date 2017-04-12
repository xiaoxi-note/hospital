import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: (resolve) => {
        require(['../components/Hello'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => {
        require(['../components/Login'], resolve)
      }
    }
  ]
})
