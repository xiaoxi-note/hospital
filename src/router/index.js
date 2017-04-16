import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

let router = new Router({
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
    },
    {
      path: '/register',
      name: '注册',
      component: (resolve) => {
        require(['../components/Register'], resolve)
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('ssss')
  document.title = to.name
  next()
})

export default router
