
import createAction from './createAction'
import * as api from './api'
import * as types from './type'

console.log(types.GET_INFO)
export const getInfo = createAction({
  type: types.GET_INFO,
  payloadCreator: api.getInfo
})

export default {
  [getInfo]: getInfo
}
