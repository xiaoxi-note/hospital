// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import {AlertPlugin, ToastPlugin, LoadingPlugin} from 'vux'
import vueTap from 'v-tap'
import store from './store'
import VueLocalStorage from 'vue-localstorage'
import base from './base'
base();
Vue.use(VueLocalStorage)
import mixin from './util'
// import './stylus/common.css'
// require('./stylus/common.css')
Vue.use(vueTap)

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

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
