import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// initial state
// shape: [{ id, userId, title, body }]
const state = {
  posts: []
}

export default ({ api }) => ({
  state,
  getters,
  actions: actions({ api }),
  mutations
})
