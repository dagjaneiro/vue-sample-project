import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import comments from './modules/comments'
import * as blog from '@/api/blog'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    posts: posts({ api: blog }),
    comments: comments({ api: blog })
  },
  strict: debug
})
