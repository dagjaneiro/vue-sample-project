import blog from '../../api/blog'

// initial state
// shape: [{ id, postId, name, email, body }]
const state = {
  comments: []
}

// getters
const getters = {
  getCommentsforPostId: state => postId => {
    return state.comments.filter(p => p.postId.toString() === postId.toString())
  }
}

// actions
const actions = {
  getCommentsforPostId({ commit }, postId) {
    blog.getCommentsforPostId(postId).then(comments => {
      commit('setComments', comments)
    })
  }
}

// mutations
const mutations = {
  setComments(state, comments) {
    state.comments = comments
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
