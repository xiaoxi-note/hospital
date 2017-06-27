
import createAction from './createAction'
import * as api from './api'
import * as types from './type'

export const getInfo = createAction({
  type: types.GET_INFO,
  payloadCreator: api.getInfo
})
export const getLogin = createAction({
  type: types.GET_LOGIN,
  payloadCreator: api.getLogin
})
export const getRegister = createAction({
  type: types.GET_REGISTER,
  payloadCreator: api.getRegister
})
export const getOrderInfoList = createAction({
  type: types.GET_ORDERINFOLIST,
  payloadCreator: api.getOrderInfoList
})
export const sendMsgCode = createAction({
  type: types.GET_SENDMSGCODE,
  payloadCreator: api.sendMsgCode
})
export default {
  [getInfo]: getInfo,
  [getLogin]: getLogin,
  [getRegister]: getRegister,
  [getOrderInfoList]: getOrderInfoList,
  [sendMsgCode]: sendMsgCode
}
