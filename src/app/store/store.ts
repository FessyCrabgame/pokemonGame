import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./slices/moneySlice";
import inventoryReducer from "./slices/inventorySlice";

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    inventory: inventoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
