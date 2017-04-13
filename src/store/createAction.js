import _ from 'lodash'

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function actionWith (commit, type, payload) {
  if (isPromise(payload)) {
    payload.then((data) => {
      commit(type, data)
    }).catch((error) => {
      if (!(error instanceof Error)) {
        const e = new Error(error)
        e.originArgs = error
        error = e
      }
      commit(type, error)
    })
  } else {
    commit(type, payload)
  }
}

export default function createAction ({type, payloadCreator}) {
  const actionCreator = ({commit, dispatch, state}, args) => {
    // override by a promise
    if (_.isFunction(payloadCreator) && !isPromise(args)) {
      actionWith(commit, type)

      const result = payloadCreator(args)
      actionWith(commit, type, result)
    } else {
      actionWith(commit, type, args)
    }
  }

  actionCreator.toString = () => type.toString()
  return actionCreator
}
