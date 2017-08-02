import Vue from 'vue'

const TIMEOUT_MS   = 10000
const TIMEOUT_TEXT = '请求超时'

function delayPromise(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export function timeoutPromise(promise, ms) {
  const timeout = delayPromise(ms).then(() => {
    const e      = new Error(TIMEOUT_TEXT)
    e.originArgs = 'timeout'
    throw e
  })
  return Promise.race([promise, timeout])
}

function parseJSON(response) {
  return response.json()
}

function getCommParams() {
  return {
    token: Vue.localStorage.get('token')
  }
}

export const get  = (url) => {
  return (params = {}, timeout = TIMEOUT_MS) => {
    if (Array.isArray(params)) {
      [params, timeout] = params
    }
    params = Object.assign(getCommParams(), params)
    if (typeof timeout !== 'number') {
      timeout = TIMEOUT_MS
    }
    const req = Vue.http.get(urlBase + url, {
      timeout,
      params,
      emulateJSON: true
    })
    return timeoutPromise(req, timeout)
      .then(parseJSON)
  }
}
const urlBase     = ''
export const post = (url) => {
  return (body = {}, params = {}, timeout = TIMEOUT_MS) => {
    if (Array.isArray(body)) {
      [body, params, timeout] = body
    }
    if (typeof params === 'number') {
      timeout = params
      params  = {}
    }
    params = Object.assign(getCommParams(), params)
    if (typeof timeout !== 'number') {
      timeout = TIMEOUT_MS
    }

    const req = Vue.http.post(urlBase + url, body, {
      timeout,
      params,
      emulateJSON: true
    })
    return timeoutPromise(req, timeout)
      .then(parseJSON)
  }
}

export const getInfo                    = get('/api/getInfo.json')
export const getLogin                   = post('/api/login')
export const getRegister                = post('/api/registerPatient')
export const getOrderInfoList           = post('/api/getOrderInfoList')
export const sendMsgCode                = post('/api/sendMsgCode')
export const getDoctInfoById            = post('/api/getDoctInfoById')
export const orderInfoByStartDate       = post('/api/orderInfoByStartDate')
export const getContacts                = post('/api/getContacts')
export const getCity                    = post('/api/getCity')
export const addContact                 = post('/api/addContact')
export const orderInfoWidthDateByDoctId = post('/api/orderInfoWidthDateByDoctId')
export const createOrder                = post('/api/createOrder')
export const getOrderHistory            = post('/api/getOrderHistory')
export const getUserInfo                = post('/api/getUserInfo')
export const getContact                 = post('/api/getContact')
export const updateContactById          = post('/api/updateContactById')
export const cancelOrder                = post('/api/cancelOrder')
export const editPwd                    = post('/api/editPwd')
export const addFollow                  = post('/api/addFollow')
export const deleteFollow               = post('/api/deleteFollow')
export const getFollow                  = post('/api/getFollow')
export const resetPwd                   = post('/api/resetPwd')
export const addDrugInfo                = post('/api/addDrugInfo')
export const getDrugInfoList            = get('/api/getDrugInfoList')
export const getDrugInfo                = get('/api/getDrugInfo')
