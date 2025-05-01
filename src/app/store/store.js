import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./slices/moneySlice";

export const store = configureStore({
  reducer: {
    counter: moneyReducer,
  },
});
