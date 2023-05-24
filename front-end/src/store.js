import { configureStore } from "@reduxjs/toolkit";
import { signupApi } from "./Redux/api/signupSlice";
import { courseApi } from "./Redux/api/courseSlice";
import userReducer  from "./Redux/slices/accountSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [signupApi.reducerPath]: signupApi.reducer,
        [courseApi.reducerPath]: courseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signupApi.middleware),
});