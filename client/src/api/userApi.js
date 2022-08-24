import axios from "axios"
const URLLogin = 'http://localhost:3001/login'  
const URLSignUp = 'http://localhost:3001/register'

export const login = (user) => axios.post(URLLogin, user)