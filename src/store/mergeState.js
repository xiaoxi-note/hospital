import _ from 'lodash'

export function customizer (objValue, srcValue) {
  if (Array.isArray(objValue) || Array.isArray(srcValue)) {
    return srcValue
  } else if (_.isPlainObject(objValue) &&
    !(_.isEqual(Object.keys(objValue), Object.keys(srcValue)))) {
    return srcValue
  } else {
    return undefined
  }
}

export default function mergeState (state, statePath, newState) {
  const diff = customizer(state[statePath], newState)
  if (diff) {
    state[statePath] = newState
  } else {
    _.mergeWith(state[statePath], newState, customizer)
  }
}

