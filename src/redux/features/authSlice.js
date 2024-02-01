import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.status = action.payload.Status; // Use the status from the payload
      state.user = action.payload.Userinfo;
    },
    logout(state, action) {
      state.status = null;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const login =
  ({ customerEmail, customerPassword }) =>
  async (dispatch) => {
    try {
      const queryParams = new URLSearchParams({
        customerEmail,
        customerPassword,
      });
      const response = await axios.post(
        `http://127.0.0.1:3000/user/login?${queryParams.toString()}`,
        null,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { Status, Userinfo } = response.data;
      dispatch(loginSuccess({ Status, Userinfo }));
    } catch (error) {
      dispatch(loginSuccess({ Status: 401, Userinfo: {} }));
      console.log(error.response);
    }
  };

export const deleteToken = () => (dispatch) => {
  dispatch(logout(null));
};

export default authSlice.reducer;
