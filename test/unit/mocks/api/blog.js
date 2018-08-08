import posts from '../../fixtures/posts'
import comments from '../../fixtures/comments'

export const getPosts = async () => posts
export const getPostById = async id => posts.find(p => p.id === id)

export const getCommentsforPostId = async postId => comments
