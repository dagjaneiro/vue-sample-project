export default ({ api }) => ({
  async getPosts({ commit }) {
    const posts = await api.getPosts()

    commit('setPosts', posts)
  },

  getPostById({ commit }, id) {
    api.getPostById(id).then(post => {
      commit('setPost', post)
    })
  },

  addPost({ commit }, post) {
    api.addPost(post).then(post => {
      commit('setPost', post)
    })
  }
})
