import { combineReducers } from 'redux'
import postsReducer  from '~/redux/reduces'
import userReducer from './user'

export const reducers = combineReducers({
    postsReducer, userReducer
})

