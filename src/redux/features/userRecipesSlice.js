import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userRecipes: [],
  status: null,
};

const userRecipesSlice = createSlice({
  name: "userRecipes",
  initialState,
  reducers: {
    getUserRecipesSuccess(state, action) {
      state.userRecipes = action.payload;
      state.status = "success";
    },
    getUserRecipesFailure(state) {
      state.status = "failure";
    },
    resetGetUserRecipesStatus(state) {
      state.status = null;
    },
  },
});

export const {
  getUserRecipesSuccess,
  getUserRecipesFailure,
  resetGetUserRecipesStatus,
} = userRecipesSlice.actions;

export const getUserRecipes = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3000/user/${id}`);
    if (response.status === 200) {
      dispatch(getUserRecipesSuccess(response.data.user)); 
    } else {
      dispatch(getUserRecipesFailure());
    }
  } catch (error) {
    console.error("Error:", error);
    dispatch(getUserRecipesFailure());
  }
};


export default userRecipesSlice.reducer;
