export default ({ api }) => ({
  getCommentsforPostId({ commit }, postId) {
    api.getCommentsforPostId(postId).then(comments => {
      commit('setComments', comments)
    })
  }
})
