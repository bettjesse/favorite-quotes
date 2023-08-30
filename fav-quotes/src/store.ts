import { configureStore}from "@reduxjs/toolkit"
import registerModalReducer  from "./slices/registerModalSlice";
import loginModalReducer  from "./slices/loginModalSlice";

 export const store = configureStore({
    reducer:{
        toggleRegisterModal :  registerModalReducer,
        toggleLoginModal: loginModalReducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;