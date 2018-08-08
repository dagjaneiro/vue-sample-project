export default {
  getCommentsforPostId: state => postId => {
    return state.comments.filter(p => p.postId.toString() === postId.toString())
  }
}
