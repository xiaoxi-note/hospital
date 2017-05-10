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
      path: '/doctorFocus',
      name: 'doctorFocus',
      component: resolve => {
        nextPage('名医关注')
        require(['../components/DoctorFocus'], resolve)
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
      path: '/doctorMsg',
      name: 'doctorMsg',
      component: resolve => {
        nextPage('医生预约信息')
        require(['../components/DoctorMsg'], resolve)
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
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: resolve => {
        nextPage('我的预约')
        require(['../components/Myorder'], resolve)
      }
    },
    {
      path: '/myorderinfo',
      name: 'myorderinfo',
      component: resolve => {
        nextPage('我的预约情况')
        require(['../components/MyorderInfo'], resolve)
      }
    },
    {
      path: '/tinypharmacy',
      name: 'tinypharmacy',
      component: resolve => {
        nextPage('微药房')
        require(['../components/TinyPharmacy'], resolve)
      }
    },
    {
      path: '/takedrug',
      name: 'takedrug',
      component: resolve => {
        nextPage('我要抓药')
        require(['../components/Takedrug'], resolve)
      }
    },
    {
      path: '/searchprogress',
      name: 'searchprogress',
      component: resolve => {
        nextPage('查看进度')
        require(['../components/SearchProgress'], resolve)
      }
    },
    {
      path: '/progressDetail',
      name: 'progressDetail',
      component: resolve => {
        nextPage('查看进度')
        require(['../components/ProgressDetail'], resolve)
      }
    },
    {
      path: '/changedrug',
      name: 'changedrug',
      component: resolve => {
        nextPage('我要转方')
        require(['../components/ChangeDrug'], resolve)
      }
    },
    {
      path: '/accountdoctor',
      name: 'accountdoctor',
      component: resolve => {
        nextPage('我的账户')
        require(['../components/AccountDoctor'], resolve)
      }
    },
    {
      path: '/tinysickroom',
      name: 'tinysickroom',
      component: resolve => {
        nextPage('微病房')
        require(['../components/TinySickRoom'], resolve)
      }
    },
    {
      path: '/sickcase',
      name: 'sickcase',
      component: resolve => {
        nextPage('病案管理')
        require(['../components/SickCase'], resolve)
      }
    },
    {
      path: '/completedrug',
      name: 'completedrug',
      component: resolve => {
        nextPage('已开处方')
        require(['../components/CompleteDrug'], resolve)
      }
    }
  ]
})

let nextPage = function (titleStr) {
  document.title = titleStr
}

router.beforeEach((to, from, next) => {
  console.log(this)
  Vue.$vux.loading.show({text: 'Loading'})
  next()
})
router.afterEach((route) => {
  Vue.$vux.loading.hide()
})


export default router
