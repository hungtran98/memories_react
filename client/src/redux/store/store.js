
import postsReducer from '../reduces/posts'
import userReducer from '../reduces/user'

import { combineReducers } from '@reduxjs/toolkit'

import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  }

  const reducers = combineReducers({
   posts: postsReducer, 
   user: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer: persistedReducer


    // {
    //     posts: postsReducer,
    //     user: userReducer,
    // }
})

export const persistor = persistStore(store)
    
export default store

