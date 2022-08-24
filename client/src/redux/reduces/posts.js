import { FETCH_ALL_POST, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST} from '../constants/POST'



const postsReducer = (posts = [], action) => {
    console.log("state: ", posts);
    console.log('Action: ', action);
    let newState
    switch(action.type) {
        case FETCH_ALL_POST:
            // return action.payload
            return action.payload
        case CREATE_POST: 
        { 
            // const newPost = [...posts]
            // newPost.push(action.payload)
            return [...posts, action.payload]
        }   
       
        
        case UPDATE_POST:
            return posts.map( post => (post._id === action.payload._id) ? action.payload : post)
        case DELETE_POST:
            // return posts.filter( post => post._id !== action.payload._id)
            return posts.filter( post => post._id !== action.payload)
        case LIKE_POST:
            return posts.map(post => (post._id === action.payload._id ? action.payload : post) ) 
        default:
            return posts;
    } 

    console.log('new state: ', newState)

}


export default postsReducer