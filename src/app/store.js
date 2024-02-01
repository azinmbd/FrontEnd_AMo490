import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice";
import registerReducer from "../redux/features/userRegisterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["omitedPart"],
};
const reducer = combineReducers({
  auth: authReducer,
  userRegister: registerReducer,
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
