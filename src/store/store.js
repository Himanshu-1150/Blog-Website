import { configureStore } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
