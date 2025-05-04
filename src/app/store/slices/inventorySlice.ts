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
      console.log(1);

      state.value.push({
        id:
          (state.value.length % 5) + action.payload.size > 5
            ? Math.ceil((state.value.length + 1) / 5) * 5
            : state.value.length,
        ...action.payload,
      });
    },
    deletingElement: (state, action: PayloadAction<{ id: number }>) => {
      state.value = state.value.filter((el) => el.id != action.payload.id);
    },
  },
});

export const { addingElement, deletingElement } = inventorySlice.actions;
export default inventorySlice.reducer;
