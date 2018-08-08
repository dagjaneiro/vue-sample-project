import axios from 'axios'
import posts from '../../fixtures/posts'
import comments from '../../fixtures/comments'

const injector = require('inject-loader!@/api/blog')
const blog = injector({ axios })

describe('blog API', () => {
  let stub

  beforeEach(() => {
    stub = sinon.stub(axios, 'get')
    stub.resolves({ data: posts })
  })

  afterEach(() => {
    stub.restore()
  })

  describe('.getPosts', () => {
    it('makes the request to the correct endpoint', () => {
      blog.getPosts()

      expect(stub).to.have.been.calledWith(
        'https://jsonplaceholder.typicode.com/posts'
      )
    })

    it('returns the blog posts', done => {
      const blogPosts = blog.getPosts()

      expect(blogPosts)
        .to.eventually.equal(posts)
        .notify(done)
    })
  })

  describe('.getPostById', () => {
    beforeEach(() => {
      stub.resolves({ data: posts[0] })
    })

    it('makes the request to the correct endpoint', () => {
      blog.getPostById(1)

      expect(stub).to.have.been.calledWith(
        'https://jsonplaceholder.typicode.com/posts/1'
      )
    })

    it('returns the blog post', done => {
      const blogPosts = blog.getPosts()

      expect(blogPosts)
        .to.eventually.equal(posts[0])
        .notify(done)
    })
  })

  describe('.getCommentsById', () => {
    beforeEach(() => {
      stub.resolves({ data: comments })
    })

    it('makes the request to the correct endpoint', () => {
      blog.getCommentsforPostId(1)

      expect(stub).to.have.been.calledWith(
        'https://jsonplaceholder.typicode.com/comments?postId=1'
      )
    })

    it('returns the comments for the blog post', done => {
      const postComments = blog.getCommentsforPostId(1)

      expect(postComments)
        .to.eventually.equal(comments)
        .notify(done)
    })
  })
})
