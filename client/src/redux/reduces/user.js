import { LOGIN } from "../constants/Auth";

// const initState = {
//     user: {},
//     isLogin: false
// }

const userReducer = ( initState = {user: {}, isLogin: false}, action ) => {

    switch(action.type) {
        case LOGIN: 
            const newState = {...initState, isLogin: true, user: action.payload }
            return  newState
        default:
            return initState
    }
}

export default userReducer