//layouts 
//import { HeaderOnly } from '~/layouts'

import Home from '~/pages/Home'
import SignUp from '~/components/SignUp';
import Login from '~/components/Login';
import HeaderOnly from '~/layouts/HeaderOnly';
import DefaultLayout from '~/layouts/DefaultLayout';


//public routes
const publicRoutes = [
    { path: '/', component: DefaultLayout},
    { path: '/Login', component: Login, layout: HeaderOnly},
    { path: '/SignUp', component: SignUp, layout: HeaderOnly}
]


export {publicRoutes}