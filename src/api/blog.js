import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

const addPost = post => axios.post(`${url}/posts`, post)
const getPosts = () => axios.get(`${url}/posts`).then(r => r.data)
const getPostById = id => axios.get(`${url}/posts/${id}`).then(r => r.data)

const getCommentsforPostId = postId =>
  axios.get(`${url}/comments?postId=${postId}`).then(r => r.data)

export default {
  addPost,
  getPosts,
  getPostById,
  getCommentsforPostId
}
