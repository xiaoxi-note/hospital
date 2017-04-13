
import Vue from 'vue'

const TIMEOUT_MS = 10000
const TIMEOUT_TEXT = '请求超时'

function delayPromise (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export function timeoutPromise (promise, ms) {
  const timeout = delayPromise(ms).then(() => {
    const e = new Error(TIMEOUT_TEXT)
    e.originArgs = 'timeout'
    throw e
  })
  return Promise.race([promise, timeout])
}

function parseJSON (response) {
  return response.json()
}

export const get = (url) => {
  return (params = {}, timeout = TIMEOUT_MS) => {
    if (Array.isArray(params)) {
      [params, timeout] = params
    }
    if (typeof timeout !== 'number') {
      timeout = TIMEOUT_MS
    }
    const req = Vue.http.get(url, {
      timeout,
      params,
      emulateJSON: true
    })
    return timeoutPromise(req, timeout)
      .then(parseJSON)
  }
}

export const post = (url) => {
  return (body = {}, params = {}, timeout = TIMEOUT_MS) => {
    if (Array.isArray(body)) {
      [body, params, timeout] = body
    }
    if (typeof params === 'number') {
      timeout = params
      params = {}
    }
    if (typeof timeout !== 'number') {
      timeout = TIMEOUT_MS
    }

    const req = Vue.http.post(url, body, {
      timeout,
      params,
      emulateJSON: true
    })
    return timeoutPromise(req, timeout)
      .then(parseJSON)
  }
}

export const getInfo = get('/api/getInfo.json')
