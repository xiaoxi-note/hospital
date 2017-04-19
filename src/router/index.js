import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: function(resolve) {
        nextPage('Hello Word')
        require(['../components/Hello'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        nextPage('登录')
        require(['../components/Login'], resolve)
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function(resolve) {
        nextPage('注册')
        require(['../components/Register'], resolve)
      }
    },
    {
      path: '/doctorInfo',
      name: 'doctorInfo',
      component: function(resolve){
        nextPage('医生简介')
        require(['../components/Doctor'], resolve)
      }
    },
    {
      path: '/order',
      name: 'order',
      component: function(resolve) {
        nextPage('预约挂号')
        require(['../components/Order'], resolve)
      }
    }
  ]
})

let nextPage = function (titleStr) {
  debugger
   document.title = titleStr
}
router.beforeEach((to, from, next) => {
  console.log('ssss')
  next()
})

export default router
