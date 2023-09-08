import api from "@api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const login = createAsyncThunk("login", async (inforLogin) => {
  let res = await api.user.findAllUser();
  return {
    users: res.data,
    inforLogin: inforLogin,
  };
});
const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    loading: false,
    userInfor: [],
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(login.fulfilled, (state, action) => {
      let user = action.payload.users.find(
        (user) => user.userName === action.payload.inforLogin.userName
      );
      if (!user) {
        alert("Không tìm thấy người dùng");
      } else {
        if (user.password !== action.payload.inforLogin.password) {
          alert("Mật khẩu không chính xác! Vui lòng nhập lại");
        } else {
          state.userInfor = user;
        }
      }
    });
  },
});
export const userLoginActions = {
  ...userLoginSlice.actions,
  login,
};
export default userLoginSlice.reducer;
