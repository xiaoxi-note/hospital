import createAction from './createAction'
import * as api from './api'
import * as types from './type'

export const getInfo                    = createAction({
  type          : types.GET_INFO,
  payloadCreator: api.getInfo
})
export const getLogin                   = createAction({
  type          : types.GET_LOGIN,
  payloadCreator: api.getLogin
})
export const getRegister                = createAction({
  type          : types.GET_REGISTER,
  payloadCreator: api.getRegister
})
export const getOrderInfoList           = createAction({
  type          : types.GET_ORDERINFOLIST,
  payloadCreator: api.getOrderInfoList
})
export const sendMsgCode                = createAction({
  type          : types.GET_SENDMSGCODE,
  payloadCreator: api.sendMsgCode
})
export const getDoctInfoById            = createAction({
  type          : types.GET_DOCTINFOBYID,
  payloadCreator: api.getDoctInfoById
})
export const orderInfoByStartDate       = createAction({
  type          : types.GET_ORDERINFOBYSTARTDATE,
  payloadCreator: api.orderInfoByStartDate
})
export const getContacts                = createAction({
  type          : types.GET_CONTACTS,
  payloadCreator: api.getContacts
})
export const getCity                    = createAction({
  type          : types.GET_CITY,
  payloadCreator: api.getCity
})
export const addContact                 = createAction({
  type          : types.ADDCONTACT,
  payloadCreator: api.addContact
})
export const orderInfoWidthDateByDoctId = createAction({
  type          : types.ORDERINFOWIDTHDATEBYDOCTID,
  payloadCreator: api.orderInfoWidthDateByDoctId
})
export const createOrder                = createAction({
  type          : types.CREATEORDER,
  payloadCreator: api.createOrder
})
export const getOrderHistory            = createAction({
  type          : types.GETORDERHISTORY,
  payloadCreator: api.getOrderHistory
})
export const getUserInfo                = createAction({
  type          : types.GETUSERINFO,
  payloadCreator: api.getUserInfo
})
export const getContact                 = createAction({
  type          : types.GETCONTACT,
  payloadCreator: api.getContact
})
export const updateContactById          = createAction({
  type          : types.UPDATECONTACTBYID,
  payloadCreator: api.updateContactById
})
export const cancelOrder                = createAction({
  type          : types.CANCELORDER,
  payloadCreator: api.cancelOrder
})
export const editPwd                    = createAction({
  type          : types.EDITPWD,
  payloadCreator: api.editPwd
})
export const addFollow                  = createAction({
  type          : types.ADDFOLLOW,
  payloadCreator: api.addFollow
})
export const deleteFollow               = createAction({
  type          : types.DELETEFOLLOW,
  payloadCreator: api.deleteFollow
})
export const getFollow                  = createAction({
  type          : types.GETFOLLOW,
  payloadCreator: api.getFollow
})
export const resetPwd                   = createAction({
  type          : types.RESETPWD,
  payloadCreator: api.resetPwd
})
export const addDrugInfo                = createAction({
  type          : types.ADDDRUGINFO,
  payloadCreator: api.addDrugInfo
})
export const getDrugInfoList            = createAction({
  type          : types.GETDRUGINFOLIST,
  payloadCreator: api.getDrugInfoList
})
export const getDrugInfo                = createAction({
  type          : types.GETDRUGINFO,
  payloadCreator: api.getDrugInfo
})
export const getAllDoctor               = createAction({
  type          : types.GETALLDOCTOR,
  payloadCreator: api.getAllDoctor
})
export const getDrugDetail              = createAction({
  type          : types.GETDRUGDETAIL,
  payloadCreator: api.getDrugDetail
})
export default {
  [getInfo]                   : getInfo,
  [getLogin]                  : getLogin,
  [getRegister]               : getRegister,
  [getOrderInfoList]          : getOrderInfoList,
  [sendMsgCode]               : sendMsgCode,
  [getDoctInfoById]           : getDoctInfoById,
  [orderInfoByStartDate]      : orderInfoByStartDate,
  [getContacts]               : getContacts,
  [getCity]                   : getCity,
  [addContact]                : addContact,
  [orderInfoWidthDateByDoctId]: orderInfoWidthDateByDoctId,
  [createOrder]               : createOrder,
  [getOrderHistory]           : getOrderHistory,
  [getUserInfo]               : getUserInfo,
  [getContact]                : getContact,
  [updateContactById]         : updateContactById,
  [cancelOrder]               : cancelOrder,
  [addFollow]                 : addFollow,
  [deleteFollow]              : deleteFollow,
  [getFollow]                 : getFollow,
  [resetPwd]                  : resetPwd,
  [addDrugInfo]               : addDrugInfo,
  [getDrugInfoList]           : getDrugInfoList,
  [getDrugInfo]               : getDrugInfo,
  [getAllDoctor]              : getAllDoctor,
  [getDrugDetail]             : getDrugDetail
}
