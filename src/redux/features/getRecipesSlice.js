import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  recipes: [],
  status: null,
};

const getRecipesSlice = createSlice({
  name: "getRecipes",
  initialState,
  reducers: {
    getRecipesSuccess(state, action) {
      state.recipes = action.payload;
      state.status = "success";
    },
    getRecipesFailure(state) {
      state.status = "failure";
    },
    resetGetRecipesStatus(state) {
      state.status = null;
    },
  },
});

export const { getRecipesSuccess, getRecipesFailure, resetGetRecipesStatus } = getRecipesSlice.actions;

export const getRecipes = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:3000/recipe/list"
    );
    console.log(response);
    if (response.status === 200) {
      dispatch(getRecipesSuccess(response.data));
    } else {
      dispatch(getRecipesFailure());
    }
  } catch (error) {
    console.error("Error:", error);
    dispatch(getRecipesFailure());
  }
};

export default getRecipesSlice.reducer;
