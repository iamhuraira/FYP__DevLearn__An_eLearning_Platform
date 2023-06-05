import { configureStore } from "@reduxjs/toolkit";

import { courseApi } from "./Redux/api/courseSlice";
import userReducer from "./Redux/slices/accountSlice";
import courseReducer from "./Redux/slices/courseSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  // [signupApi.reducerPath]: signupApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
});

const persistedReducers = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducers,
  // reducer: {
  //     // user: userReducer,
  //     // [signupApi.reducerPath]: signupApi.reducer,
  //     // [courseApi.reducerPath]: courseApi.reducer,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(courseApi.middleware)
});
