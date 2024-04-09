import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const recipeInfoSlice = createSlice({
  name: "recipeInfo",
  initialState,
  reducers: {
    getRecipeStart(state) {
      state.isLoading = true;
    },
    getRecipeSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    getRecipeFailure(state, action) {
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getRecipeStart, getRecipeSuccess, getRecipeFailure } =
  recipeInfoSlice.actions;

  export const getRecipe = (id) => async (dispatch) => {
    try {
      dispatch(getRecipeStart()); 
  
      const response = await axios.get(`http://127.0.0.1:3000/recipe/${id}`);
      
      dispatch(getRecipeSuccess(response.data)); 
    } catch (error) {
      dispatch(getRecipeFailure(error.message)); 
    }
  };

export default recipeInfoSlice.reducer;
