import { FETCH_ALL_POST, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST }  from '../constants/POST'

import * as api from '~/api/postsApi'

export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({ type: FETCH_ALL_POST, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const createPost = (post) => async(dispatch) => {
    try {
        const { data } =  await api.createPost(post)
        dispatch({ type: CREATE_POST, payload: data });

    } catch (error) {
        console.log(error.message);
    }
  }



  export const updatePost = (id, post) => async(dispatch) => {
    try {
        const { data } =  await api.updatePost(id, post)
        dispatch({
            type: UPDATE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error.message);
    }
  }

  
  export const deletePost = (id, accessToken) => async(dispatch) => {
    try {
      const token =  {
        headers: {
         Authorization: `Bearer ${accessToken}`      
       }
      }
        const { data } =  await api.deletePost(id, token)
        dispatch({
            type: DELETE_POST,
            payload: id
            
        })
    } catch (error) {
        console.log(error.message);
    }
  }

  export const likePost = (id, accessToken) => async(dispatch) => {
    try {
        const token =  {
         headers: {
          Authorization: `Bearer ${accessToken}`      
        }
      }
        const { data } =  await api.likePost( id, token)
        dispatch({
            type: LIKE_POST,
            payload: data
            
        })
    } catch (error) {
        console.log(error.message);
    }
  }

