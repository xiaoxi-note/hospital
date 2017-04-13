/*
 * // create a mutation
 * const loadOrderStatus = createMutation({
 *   type: types.FETCH_ORDER_STATUS,
 *   statePath: 'orderStatus',
 * })
 */

import _ from 'lodash'
// import mergeState from './mergeState'

export default function createMutation (type, statePath) {
  if (_.isObject(type)) {
    const opts = type
    type = opts.type
    statePath = opts.statePath
  }
  const mutationCreator = (state, payload) => {
    if (!state[statePath]) return
    const newState = {}
    if (!(payload === null || payload === undefined)) {
      Object.assign(newState, state[statePath])
      newState.payload = payload
      if (payload instanceof Error) {
        newState.status = 'fail'
      } else {
        newState.status = 'success'
        parseInt(payload.errno) === 101 && (state.loginState = 'invalid')
      }
    } else {
      // prevent override payload
      if (state[statePath].hasOwnProperty('status')) {
        state[statePath].status = 'pending'
      } else {
        Object.assign(newState, state[statePath])
        newState.status = 'pending'
      }
    }
    state[statePath] = newState
  }
  mutationCreator.toString = () => type.toString()
  return mutationCreator
}
