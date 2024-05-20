"use client";

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import signupSlice from "./Features/Counter/signupReducer";

// Configuration object for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'data', 'skill', 'desc'], // List of state keys to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, signupSlice);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    signup: persistedReducer,
  },
});

// Create a persistor
export const persistor = persistStore(store);

// Export types for the state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
