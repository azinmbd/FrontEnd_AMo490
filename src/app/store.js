import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice";
import registerReducer from "../redux/features/userRegisterSlice";
import logoutReducer from "../redux/features/logoutSlice";
import recipesRecucer from "../redux/features/getRecipesSlice";
import recipeInfoReducer from "../redux/features/getRecipeInfoSlice";
import userRecipesReducer from "../redux/features/userRecipesSlice";
import chatGptRecucer from "../redux/features/chatGptSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // whitelist: ["auth"],
  blacklist: ["chatGpt"],
};
const reducer = combineReducers({
  auth: authReducer,
  userRegister: registerReducer,
  userLogout: logoutReducer,
  allRecipes: recipesRecucer,
  recipeInfo: recipeInfoReducer,
  userRecipes: userRecipesReducer,
  chatGpt: chatGptRecucer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
