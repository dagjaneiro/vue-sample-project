import blog from '../../api/blog'

// initial state
// shape: [{ id, userId, title, body }]
const state = {
  posts: []
}

// getters
const getters = {
  posts: state => {
    return state.posts.map(p => ({
      id: p.id,
      userId: p.userId,
      title: p.title
    }))
  },

  getPostById: state => id => {
    return state.posts.find(p => p.id.toString() === id)
  },

  postsCount: (state, getters) => {
    return getters.posts.length
  }
}

// actions
const actions = {
  getPosts({ commit }) {
    blog.getPosts().then(posts => {
      commit('setPosts', posts)
    })
  },

  getPostById({ commit }, id) {
    blog.getPostById(id).then(post => {
      commit('setPost', post)
    })
  },

  addPost({ commit }, post) {
    blog.addPost(post).then(post => {
      commit('setPost', post)
    })
  }
}

// mutations
const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setPost(state, post) {
    state.posts = [post]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
