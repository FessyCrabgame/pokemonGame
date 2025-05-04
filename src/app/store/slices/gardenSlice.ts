import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GardenProps } from "./types";
import { gardenDefault } from "./consts";

interface InventoryState {
  value: GardenProps[];
}

const initialState: InventoryState = {
  value: gardenDefault,
};

const gardenSlice = createSlice({
  name: "garden",
  initialState,
  reducers: {
    addingFruit: (state, action: PayloadAction<GardenProps>) => {
      state.value.push({
        id:
          (state.value.length % 5) + action.payload.size > 5
            ? Math.ceil((state.value.length + 1) / 5) * 5
            : state.value.length,
        ...action.payload,
      });
    },
    deletingFruit: (state, action: PayloadAction<{ id: number }>) => {
      state.value = state.value.filter((el) => el.id != action.payload.id);
    },
    decreasingTime: (state, action: PayloadAction<{ time: number }>) => {
      state.value = state.value.map((el) => {
        return { ...el, time: el.time - action.payload.time };
      });
    },
  },
});

export const { addingFruit, deletingFruit, decreasingTime } =
  gardenSlice.actions;
export default gardenSlice.reducer;
