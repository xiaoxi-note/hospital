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
  getInfo                   : {payload: {}},
  getLogin                  : {payload: {}},
  getRegister               : {payload: {}},
  getOrderInfoList          : {payload: {}},
  loginState                : 'valid',
  sendMsgCode               : {payload: {}},
  getDoctInfoById           : {payload: {}},
  orderInfoByStartDate      : {payload: {}},
  getContacts               : {payload: {}},
  getCity                   : {payload: {}},
  addContact                : {payload: {}},
  orderInfoWidthDateByDoctId: {payload: {}},
  createOrder               : {payload: {}},
  getOrderHistory           : {payload: {}},
  getUserInfo               : {payload: {}},
  getContact                : {payload: {}},
  updateContactById         : {payload: {}},
  cancelOrder               : {payload: {}},
  editPwd                   : {payload: {}},
  addFollow                 : {payload: {}},
  deleteFollow              : {payload: {}},
  getFollow                 : {payload: {}}
}

const store = new Vuex.Store({
  state,
  getters  : {
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
    },
    orderInfoByStartDate(){
      return state.orderInfoByStartDate
    },
    getContacts(){
      return state.getContacts
    },
    getCity(){
      return state.getCity
    },
    addContact(){
      return state.addContact
    },
    orderInfoWidthDateByDoctId(){
      return state.orderInfoWidthDateByDoctId
    },
    createOrder(){
      return state.createOrder
    },
    getOrderHistory(){
      return state.getOrderHistory
    },
    getUserInfo(){
      return state.getUserInfo
    },
    getContact(){
      return state.getContact
    },
    updateContactById(){
      return state.updateContactById
    },
    cancelOrder(){
      return state.cancelOrder
    },
    editPwd(){
      return state.editPwd
    },
    addFollow(){
      return state.addFollow
    },
    addFollow(){
      return state.addFollow
    },
    getFollow(){
      return state.getFollow
    },
    deleteFollow(){
      return state.deleteFollow
    }
  },
  mutations: mutations,
  actions  : actions
})

export default store
