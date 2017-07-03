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
const sexData = [{key: '0', value: '男'}, {key: '1', value: '女'}];
Vue.use(VueLocalStorage)

// import './stylus/common.css'
// require('./stylus/common.css')
Vue.use(vueTap)

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false

Vue.use(resource)

Vue.mixin({
  methods: {
    post (opt) {
      this.$http.get(opt.url).then(response => {
        opt.success(response.body)
      }, response => {
        opt.err && opt.err('')
      })
    },
    get (opt) {
      this.$http.get(opt.url).then(response => {
        opt.success(response.body)
      }, response => {
        // opt.error('')
      })
    },
    getSex (value) {
      var result = null;
      [].forEach.call(sexData, (item) => {
        if (item.key == value) {
          result = item
        }
      })
      return result.value;
    },
    getAge(birthday){
      var birthDate = new Date(birthday);
      var yearNum   = (new Date()).getFullYear();
      return yearNum - birthDate.getFullYear() + 1;
    },
    getPhone (yearStr) {
      var result     = [];
      var phoneArray = yearStr.split('');
      [].forEach.call(phoneArray, (item, index) => {
        if (index > 2 && index < 7) {
          result.push('*')
        } else {
          result.push(item)
        }
      })
      return result.join('');
    }
  },
  data(){
    return {
      sexList: sexData
    }
  },
  created () {
    if (!this.$localStorage.get('token')) {
      this.$router.replace({name: 'login'})
    }
  }
})

// TODO VUEX DEMO

// TODO PHONE-MSG DEMO
// TODO IMG-CODE DEMO
// TODO WECHAT PAY DEMO

/* eslint-disable no-new */
new Vue({
  el        : '#app',
  router,
  template  : '<App/>',
  components: {App},
  store     : store
})
