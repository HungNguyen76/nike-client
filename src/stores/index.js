//createStore  của redux core
// Redux toolkit: khởi tạo store sử dụng configureStore

//b1> khởi tạo store
//b2> reducers
//b3> dispatch
//b4> actions

import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./slices/user.slice";

const store = configureStore({
  reducer: {
    userLoginStore: userLoginSlice,
  },
});
export default store;
