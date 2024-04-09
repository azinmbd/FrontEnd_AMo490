import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  responseData: null,
};

const chatGptSlice = createSlice({
  name: "chatGpt",
  initialState,
  reducers: {
    chatGptStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    chatGptSuccess(state, action) {
      state.isLoading = false;
      state.responseData = action.payload;
    },
    chatGptFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { chatGptStart, chatGptSuccess, chatGptFailure } =
  chatGptSlice.actions;

export const fetchChatGptResponse = (prompt) => async (dispatch) => {
  try {
    dispatch(chatGptStart());
    const response = await axios.post("http://127.0.0.1:3000/recipe/chatgpt", {
      prompt,
    });
    console.log(response);
    dispatch(chatGptSuccess(response.data));
  } catch (error) {
    dispatch(chatGptFailure(error.message));
  }
};

export default chatGptSlice.reducer;
