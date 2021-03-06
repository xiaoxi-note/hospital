import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path     : '/',
      name     : 'hello',
      component: resolve => {
        nextPage('Hello Word')
        require(['../components/Hello'], resolve)
      }
    },
    {
      path     : '/login',
      name     : 'login',
      component: resolve => {
        nextPage('登录')
        require(['../components/Login'], resolve)
      }
    },
    {
      path     : '/register',
      name     : 'register',
      component: resolve => {
        nextPage('注册')
        require(['../components/Register'], resolve)
      }
    },
    {
      path     : '/forgetPwd',
      name     : 'forgetPwd',
      component: resolve => {
        nextPage('忘记密码')
        require(['../components/ForgetPwd'], resolve)
      }
    },
    {
      path     : '/doctorFocus',
      name     : 'doctorFocus',
      component: resolve => {
        nextPage('名医关注')
        require(['../components/DoctorFocus'], resolve)
      }
    },
    {
      path     : '/doctorInfo',
      name     : 'doctorInfo',
      component: resolve => {
        nextPage('医生简介')
        require(['../components/DoctorInfo'], resolve)
      }
    },
    {
      path     : '/doctorMsg',
      name     : 'doctorMsg',
      component: resolve => {
        nextPage('医生预约信息')
        require(['../components/DoctorMsg'], resolve)
      }
    },
    {
      path     : '/order',
      name     : 'order',
      component: resolve => {
        nextPage('预约挂号')
        require(['../components/Order'], resolve)
      }
    },
    {
      path     : '/orderInfo',
      name     : 'orderInfo',
      component: resolve => {
        nextPage('预约信息')
        require(['../components/OrderInfo'], resolve)
      }
    },
    {
      path     : '/myorder',
      name     : 'myorder',
      component: resolve => {
        nextPage('我的预约')
        require(['../components/Myorder'], resolve)
      }
    },
    {
      path     : '/myorderinfo',
      name     : 'myorderinfo',
      component: resolve => {
        nextPage('我的预约情况')
        require(['../components/MyorderInfo'], resolve)
      }
    },
    {
      path     : '/tinypharmacy',
      name     : 'tinypharmacy',
      component: resolve => {
        nextPage('微药房')
        require(['../components/TinyPharmacy'], resolve)
      }
    },
    {
      path     : '/takedrug',
      name     : 'takedrug',
      component: resolve => {
        nextPage('我要抓药')
        require(['../components/Takedrug'], resolve)
      }
    },
    {
      path     : '/searchprogress',
      name     : 'searchprogress',
      component: resolve => {
        nextPage('查看进度')
        require(['../components/SearchProgress'], resolve)
      }
    },
    {
      path     : '/progressDetail',
      name     : 'progressDetail',
      component: resolve => {
        nextPage('查看进度')
        require(['../components/ProgressDetail'], resolve)
      }
    },
    {
      path     : '/changedrug',
      name     : 'changedrug',
      component: resolve => {
        nextPage('我要转方')
        require(['../components/ChangeDrug'], resolve)
      }
    },
    {
      path     : '/accountdoctor',
      name     : 'accountdoctor',
      component: resolve => {
        nextPage('我的账户')
        require(['../components/AccountDoctor'], resolve)
      }
    },
    {
      path     : '/tinysickroom',
      name     : 'tinysickroom',
      component: resolve => {
        nextPage('微病房')
        require(['../components/TinySickRoom'], resolve)
      }
    },
    {
      path     : '/sickcase',
      name     : 'sickcase',
      component: resolve => {
        nextPage('病案管理')
        require(['../components/SickCase'], resolve)
      }
    },
    {
      path     : '/completedrug',
      name     : 'completedrug',
      component: resolve => {
        nextPage('已开处方')
        require(['../components/CompleteDrug'], resolve)
      }
    },
    {
      path     : '/Contacts',
      name     : 'Contacts',
      component: resolve => {
        nextPage('常用联系人')
        require(['../components/Contacts'], resolve)
      }
    },
    {
      path     : '/ContactsAdd',
      name     : 'ContactAdd',
      component: resolve => {
        nextPage('增加常用联系人')
        require(['../components/ContactAdd'], resolve)
      }
    },
    {
      path     : '/ContactEdit',
      name     : 'ContactEdit',
      component: resolve => {
        nextPage('增加常用联系人')
        require(['../components/ContactAdd'], resolve)
      }
    },
    {
      path     : '/patientPrivateMsg',
      name     : 'patientPrivateMsg',
      component: resolve => {
        nextPage('输入疾病信息')
        require(['../components/patientPrivateMsg'], resolve)
      }
    },
    {
      path     : '/editPwd',
      name     : 'editPwd',
      component: resolve => {
        nextPage('修改密码')
        require(['../components/PwdEdit'], resolve)
      }
    },
    {
      path     : '/drugInfo',
      name     : 'drugInfo',
      component: resolve => {
        nextPage('药方详情确认')
        require(['../components/drugInfo'], resolve)
      }
    },
    {
      path     : '/drugList',
      name     : 'drugList',
      component: resolve => {
        nextPage('药方列表')
        require(['../components/drugList'], resolve)
      }
    },
    {
      path     : '/DoctorAll',
      name     : 'DoctorAll',
      component: resolve => {
        nextPage('名医推荐')
        require(['../components/DoctorAll'], resolve)
      }
    },
    {
      path     : '/drugDetail',
      name     : 'drugDetail',
      component: resolve => {
        nextPage('药方详情')
        require(['../components/drugDetail'], resolve)
      }
    }
  ]
})

let nextPage = function (titleStr) {
  document.title = titleStr
}

router.beforeEach((to, from, next) => {
  if (to.name == 'login' && from.name != 'register' && !!from.name) {
    localStorage.setItem('before_login', from.name);
    localStorage.setItem('before_query', encodeURIComponent(JSON.stringify(from.query)));
  }
  else if (from.name != 'register') {
    localStorage.setItem('before_login', '')
    localStorage.setItem('before_query', '');
  }
  Vue.$vux.loading.show({text: 'Loading'})
  next()
})
router.afterEach((route) => {
  Vue.$vux.loading.hide()
})


export default router
