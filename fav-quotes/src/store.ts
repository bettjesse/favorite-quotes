import { configureStore}from "@reduxjs/toolkit"
import registerModalReducer  from "./slices/registerModalSlice";

 export const store = configureStore({
    reducer:{
        toggleRegisterModal :  registerModalReducer

    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;