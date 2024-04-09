import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchResults: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.searchResults = action.payload;
    },
    searchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetSearchResults: (state) => {
      state.searchResults = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  searchRequest,
  searchSuccess,
  searchFailure,
  resetSearchResults,
} = searchSlice.actions;

export const searchRecipes = (keyword) => async (dispatch) => {
  dispatch(searchRequest());
  try {
    const response = await axios.get(
      `http://127.0.0.1:3000/recipe/search?keyword=${keyword}`
    );
    dispatch(searchSuccess(response.data));
  } catch (error) {
    dispatch(searchFailure(error.message));
  }
};

export default searchSlice.reducer;
