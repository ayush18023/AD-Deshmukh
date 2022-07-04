import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart'
import LoginReducer from './Login'

export default configureStore({
    reducer:{
        cart:cartReducer,
        login:LoginReducer
    }
})