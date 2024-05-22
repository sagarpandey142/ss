"use client"

import { configureStore } from "@reduxjs/toolkit"
import signupSlice from "./Features/Counter/signupReducer"
import ProjectSlice from "./Features/ProjectSlice";

export const  store = configureStore({
    reducer:{
        signup: signupSlice,
        ProjectSlice:ProjectSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;