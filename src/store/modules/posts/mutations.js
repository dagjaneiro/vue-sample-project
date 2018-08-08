import { union } from 'lodash'

export default {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.posts = union(state.posts, [post])
  }
}
