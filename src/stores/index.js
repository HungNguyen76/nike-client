import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user";
import { categoryReducer } from "./slices/category";
import { productReducer } from "./slices/product";


const store = configureStore({
  reducer: {
    userStore: userReducer,
    categoryStore: categoryReducer,
    productStore: productReducer,
  },
});

export default store;

