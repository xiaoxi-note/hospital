import createMutation from './createMutation'
import * as types from './type'

// mutaions
const getInfo                    = createMutation(types.GET_INFO, 'getInfo')
const getLogin                   = createMutation(types.GET_LOGIN, 'getLogin')
const getRegister                = createMutation(types.GET_REGISTER, 'getRegister')
const getOrderInfoList           = createMutation(types.GET_ORDERINFOLIST, 'getOrderInfoList')
const sendMsgCode                = createMutation(types.GET_SENDMSGCODE, 'sendMsgCode')
const getDoctInfoById            = createMutation(types.GET_DOCTINFOBYID, 'getDoctInfoById')
const orderInfoByStartDate       = createMutation(types.GET_ORDERINFOBYSTARTDATE, 'orderInfoByStartDate')
const getContacts                = createMutation(types.GET_CONTACTS, 'getContacts')
const getCity                    = createMutation(types.GET_CITY, 'getCity')
const addContact                 = createMutation(types.ADDCONTACT, 'addContact')
const orderInfoWidthDateByDoctId = createMutation(types.ORDERINFOWIDTHDATEBYDOCTID, 'orderInfoWidthDateByDoctId')
const createOrder                = createMutation(types.CREATEORDER, 'createOrder')
const getOrderHistory            = createMutation(types.GETORDERHISTORY, 'getOrderHistory')
const getUserInfo                = createMutation(types.GETUSERINFO, 'getUserInfo')
const getContact                 = createMutation(types.GETCONTACT, 'getContact')
const updateContactById          = createMutation(types.UPDATECONTACTBYID, 'updateContactById')
const cancelOrder                = createMutation(types.CANCELORDER, 'cancelOrder')
const editPwd                    = createMutation(types.EDITPWD, 'editPwd')
const addFollow                  = createMutation(types.ADDFOLLOW, 'addFollow')
const deleteFollow               = createMutation(types.DELETEFOLLOW, 'deleteFollow')

export default {
  [getInfo]                   : getInfo,
  [getLogin]                  : getLogin,
  [getRegister]               : getRegister,
  [getOrderInfoList]          : getOrderInfoList,
  [sendMsgCode]               : sendMsgCode,
  [getDoctInfoById]           : getDoctInfoById,
  [orderInfoByStartDate]      : orderInfoByStartDate,
  [getCity]                   : getCity,
  [addContact]                : addContact,
  [getContacts]               : getContacts,
  [orderInfoWidthDateByDoctId]: orderInfoWidthDateByDoctId,
  [createOrder]               : createOrder,
  [getOrderHistory]           : getOrderHistory,
  [getUserInfo]               : getUserInfo,
  [getContact]                : getContact,
  [updateContactById]         : updateContactById,
  [cancelOrder]               : cancelOrder,
  [addFollow]                 : addFollow,
  [deleteFollow]              : deleteFollow
}
