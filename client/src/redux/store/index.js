import { configureStore } from "@reduxjs/toolkit";
import getData from "../slice/dataSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    getData: getData,
  },
  middleware: [thunk],
});
