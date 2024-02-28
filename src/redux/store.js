import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
