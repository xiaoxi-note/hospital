import createMutation from './createMutation'
import * as types from './type'

// mutaions
const getInfo = createMutation(types.GET_INFO, 'getInfo')

export default {
  [getInfo]: getInfo
}
