import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  user: null,
  token: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.status = "Successful";
      state.user = action.payload.data.users;
      state.token = action.payload.data.refreshToken;
      state.userId = action.payload.data.users._id;
    },
    loginFailure(state) {
      state.status = "failed";
      state.user = null;
      state.token = null;
      state.userId = null;
    },
    logoutSuccess(state) {
      state.status = null;
      state.user = null;
      state.token = null;
      state.userId = null;
    },
    logoutFailure(state) {
      state.status = "logout_failed";
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  resetAuthStatus,
} = authSlice.actions;

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    console.log(email, password);
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.data.statusCode === 200 && response.data.success) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
      console.error("Error:", error);
    }
  };

export const logout = (refreshToken, userId) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/user/logout",
      {
        refreshToken: refreshToken,
        userId: userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (response.data.statusCode === 200 && response.data.success) {
      console.log("loggedout");
      dispatch(logoutSuccess());
    } else {
      dispatch(logoutFailure());
    }
  } catch (error) {
    dispatch(logoutFailure());
    console.error("Error:", error);
  }
};

export default authSlice.reducer;
