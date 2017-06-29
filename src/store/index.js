/**
 * Created by dumeng on 2017/4/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

// const isProductionEnv = process.env.NODE_ENV === 'production'

const state = {
  getInfo: {payload: {}},
  getLogin: {payload: {}},
  getRegister: {payload: {}},
  getOrderInfoList: {payload: {}},
  loginState: 'valid',
  sendMsgCode: {payload: {}},
  getDoctInfoById: {payload:{}}
}

const store = new Vuex.Store({
  state,
  getters: {
    getInfo (state) {
      return state.getInfo
    },
    getLogin (state) {
      return state.getLogin
    },
    getRegister (state) {
      return state.getRegister
    },
    getOrderInfoList (state) {
      return state.getOrderInfoList
    },
    sendMsgCode () {
      return state.sendMsgCode
    },
    getDoctInfoById(){
      return state.getDoctInfoById
    }
  },
  mutations: mutations,
  actions: actions
})

export default store
