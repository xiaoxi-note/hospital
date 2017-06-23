import createMutation from './createMutation'
import * as types from './type'

// mutaions
const getInfo = createMutation(types.GET_INFO, 'getInfo')
const getLogin = createMutation(types.GET_LOGIN, 'getLogin')
const getRegister = createMutation(types.GET_REGISTER, 'getRegister')
const getOrderInfoList = createMutation(types.GET_ORDERINFOLIST, 'getOrderInfoList')

export default {
  [getInfo]: getInfo,
  [getLogin]: getLogin,
  [getRegister]: getRegister,
  [getOrderInfoList]: getOrderInfoList
}
