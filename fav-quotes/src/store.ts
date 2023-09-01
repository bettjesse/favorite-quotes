import { configureStore}from "@reduxjs/toolkit"
import registerModalReducer  from "./slices/registerModalSlice";
import loginModalReducer  from "./slices/loginModalSlice";
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice";
 export const store = configureStore({
    reducer:{
        toggleRegisterModal :  registerModalReducer,
        toggleLoginModal: loginModalReducer,
        auth:authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat( apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;