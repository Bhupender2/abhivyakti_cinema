import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
export const store = configureStore({
  reducer: {
    home:homeSlice // we have to save the homeslice by giving the key and on using redux devtools this wil give initial State:)
  },
});
