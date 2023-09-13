import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user";


const store = configureStore({
  reducer: {
    userStore: userReducer
  },
});

export default store;

