// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import {AlertPlugin, ToastPlugin} from 'vux'
import vueTap from 'v-tap'
import store from './store'

import mixin from './util'
Vue.use(vueTap)

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

Vue.use(resource)

Vue.mixin(mixin)

// TODO VUEX DEMO

// TODO PHONE-MSG DEMO
// TODO IMG-CODE DEMO
// TODO WECHAT PAY DEMO

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store: store
})
