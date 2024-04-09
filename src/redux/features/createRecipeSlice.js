import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
};

const addRecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    addRecipeStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addRecipeSuccess(state) {
      state.isLoading = false;
    },
    addRecipeFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addRecipeStart, addRecipeSuccess, addRecipeFailure } =
  addRecipeSlice.actions;

export const addRecipe = (formData) => async (dispatch) => {
  try {
    dispatch(addRecipeStart());
    const response = await axios.post(
      "http://127.0.0.1:3000/recipe/create",
      formData
    );
    dispatch(addRecipeSuccess());
  } catch (error) {
    dispatch(addRecipeFailure(error.message));
  }
};

export default addRecipeSlice.reducer;
