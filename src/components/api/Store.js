import { configureStore } from "@reduxjs/toolkit";
import { GetSlice } from "./GetSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from './authSlice';

const Store = configureStore({
  reducer: {
    [GetSlice.reducerPath]: GetSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GetSlice.middleware),
});

setupListeners(Store.dispatch);

export default Store;
