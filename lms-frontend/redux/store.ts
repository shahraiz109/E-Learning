"use client";
import { configureStore } from "@reduxjs/toolkit";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// call refresh token on every page reload

const initializeApp = async() => {
  await store.dispatch(apiSlice.endpoints.refreshToken.initiate({},{forceRefetch: true}))
  await store.dispatch(apiSlice.endpoints.loadUser.initiate({},{forceRefetch: true}))

}

initializeApp();