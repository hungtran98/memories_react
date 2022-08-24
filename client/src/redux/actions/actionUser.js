import { LOGIN }  from '../constants/Auth'

import * as api from '~/api/userApi'



export const login = (user, navigate) => async (dispatch) => {
    try {
      const { data } = await api.login(user);
  
      dispatch({ type: LOGIN, payload: data });
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  };