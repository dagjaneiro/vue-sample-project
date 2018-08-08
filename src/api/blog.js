import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

export const addPost = post => axios.post(`${url}/posts`, post)
export const getPosts = () => axios.get(`${url}/posts`).then(r => r.data)
export const getPostById = id =>
  axios.get(`${url}/posts/${id}`).then(r => r.data)

export const getCommentsforPostId = postId =>
  axios.get(`${url}/comments?postId=${postId}`).then(r => r.data)
