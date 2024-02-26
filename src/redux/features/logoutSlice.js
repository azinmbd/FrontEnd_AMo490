import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    logoutSuccess(state) {
      state.status = "success";
    },
    logoutFailure(state) {
      state.status = "failure";
    },
    resetLogoutStatus(state) {
      state.status = null;
    },
  },
});

export const { logoutSuccess, logoutFailure, resetLogoutStatus } = logoutSlice.actions;

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
    if (response.status === 200) {
      dispatch(logoutSuccess());
    } else {
      dispatch(logoutFailure());
    }
  } catch (error) {
    console.error("Error:", error);
    dispatch(logoutFailure());
  }
};

export default logoutSlice.reducer;
