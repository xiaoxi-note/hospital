import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: resolve => {
        nextPage('Hello Word')
        require(['../components/Hello'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        nextPage('登录')
        require(['../components/Login'], resolve)
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => {
        nextPage('注册')
        require(['../components/Register'], resolve)
      }
    },
    {
      path: '/doctorInfo',
      name: 'doctorInfo',
      component: resolve => {
        nextPage('医生简介')
        require(['../components/DoctorInfo'], resolve)
      }
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => {
        nextPage('预约挂号')
        require(['../components/Order'], resolve)
      }
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: resolve => {
        nextPage('预约信息')
        require(['../components/OrderInfo'], resolve)
      }
    }
  ]
})

let nextPage = function (titleStr) {
  document.title = titleStr
}
router.beforeEach((to, from, next) => {
  console.log('ssss')
  next()
})

export default router
