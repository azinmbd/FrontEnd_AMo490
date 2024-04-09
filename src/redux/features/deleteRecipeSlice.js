import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
};

const deleteRecipeSlice = createSlice({
  name: "deleteRecipe",
  initialState,
  reducers: {
    deleteRecipeStart(state) {
      state.status = "loading";
      state.error = null;
    },
    deleteRecipeSuccess(state) {
      state.status = "succeeded";
      state.error = null;
    },
    deleteRecipeFailure(state, action) {
      state.status = "failed";
      state.error = action.payload.message;
    },
  },
});

export const { deleteRecipeStart, deleteRecipeSuccess, deleteRecipeFailure } =
  deleteRecipeSlice.actions;

  
  export const deleteRecipe = (id) => async (dispatch) => {
      try {
          dispatch(deleteRecipeStart());
          const response = await axios.delete(`http://127.0.0.1:3000/recipe/remove/${id}`);
          dispatch(deleteRecipeSuccess(response.data));
        } catch (error) {
            const errorMessage =
            error.response?.data?.message || "Failed to delete recipe.";
            dispatch(deleteRecipeFailure({ message: errorMessage }));
        }
    };
    
    
export default deleteRecipeSlice.reducer;