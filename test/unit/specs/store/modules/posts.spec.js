import createStore from '@/store/modules/posts'
import * as api from '../../../mocks/api/blog'
import posts from '../../../fixtures/posts'

// Alternative to injecting the API
/*
  const injector = require('inject-loader!../../../../../src/store/modules/posts')

  const store = injector({
    '../../api/blog': api
  }).default
*/

describe('Posts store', () => {
  let store
  let commit

  beforeEach(() => {
    commit = sinon.spy()
    store = createStore({ api })
  })

  describe('#actions', () => {
    describe('.getPosts', () => {
      it('fetches the posts from the api and commits them to the store', async () => {
        await store.actions.getPosts({ commit })

        expect(commit).to.have.been.calledWith('setPosts', posts)
      })
    })

    describe('.getPostById', () => {
      it('fetches the posts from the api and commits them to the store', async () => {
        await store.actions.getPostById({ commit }, 1)

        expect(commit).to.have.been.calledWith('setPost', posts[0])
      })
    })
  })

  describe('#mutations', () => {
    let state

    beforeEach(() => {
      state = {
        posts: []
      }
    })

    describe('.setPosts', () => {
      it('sets the posts store with the posts provided', async () => {
        store.mutations.setPosts(state, posts)

        expect(state.posts).to.equal(posts)
      })
    })

    describe('.setPost', () => {
      it('adds the post to the posts store', async () => {
        await store.mutations.setPost(state, posts[0])

        expect(state.posts).to.contain(posts[0])
      })
    })
  })

  describe('#getters', () => {
    let state

    beforeEach(() => {
      state = {
        posts
      }
    })

    describe('.posts', () => {
      it('returns the posts in the store', () => {
        const storePosts = store.getters.posts(state)

        expect(storePosts).to.deep.equal(posts)
      })
    })

    describe('.getPostById', () => {
      it('returns a post by id', () => {
        const storePost = store.getters.getPostById(state)(posts[0].id)

        expect(storePost).to.equal(posts[0])
      })
    })

    describe('.postsCount', () => {
      it('returns the number of posts in the store', async () => {
        const postsGetter = { posts }
        const count = store.getters.postsCount(null, postsGetter)

        expect(count).to.equal(posts.length)
      })
    })
  })
})
