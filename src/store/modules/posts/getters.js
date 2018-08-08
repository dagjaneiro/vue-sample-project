export default {
  posts: state => {
    return state.posts
  },

  getPostById: state => id => {
    return state.posts.find(p => p.id.toString() === id.toString())
  },

  postsCount: (state, getters) => {
    return getters.posts.length
  }
}
