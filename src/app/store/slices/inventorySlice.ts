import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "./types";

interface InventoryState {
  value: ItemProps[];
}

const initialState: InventoryState = {
  value: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addingElement: (state, action: PayloadAction<ItemProps>) => {
      state.value.push(action.payload);
    },
    deletingElement: (state, action: PayloadAction<{ id: number }>) => {
      state.value.filter((el) => el.id != action.payload.id);
    },
  },
});

export const { addingElement, deletingElement } = inventorySlice.actions;
export default inventorySlice.reducer;
