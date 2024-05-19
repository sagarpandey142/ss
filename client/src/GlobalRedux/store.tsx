"use client"

import { configureStore } from "@reduxjs/toolkit"
import signupSlice from "./Features/Counter/signupReducer"

export const store = configureStore({
    reducer:{
        signup: signupSlice
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;