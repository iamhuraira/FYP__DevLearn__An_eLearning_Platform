import { configureStore } from "@reduxjs/toolkit";
import { signupApi } from "./Redux/api/signupSlice";

export const store = configureStore({
    reducer: {
        [signupApi.reducerPath]: signupApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signupApi.middleware),
});