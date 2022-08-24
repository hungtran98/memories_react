import axios from "axios"
const URL = 'http://localhost:3001/posts/'  

export const fetchPosts = () => axios.get(URL);
export const createPost = (post) => axios.post(URL, post)
export const updatePost = (id, post) => axios.put(`${URL}/${id}`, post)
export const deletePost = (id) => axios.delete(`${URL}/${id}`)
export const likePost = (id, token) => axios.patch(`${URL}/${id}/likepost`, token)