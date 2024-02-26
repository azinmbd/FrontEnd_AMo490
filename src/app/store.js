import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice";
import registerReducer from "../redux/features/userRegisterSlice";
import logoutReducer from "../redux/features/logoutSlice";
import recipesRecucer from "../redux/features/getRecipesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};
const reducer = combineReducers({
  auth: authReducer,
  userRegister: registerReducer,
  userLogout: logoutReducer,
  allRecipes: recipesRecucer,
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
