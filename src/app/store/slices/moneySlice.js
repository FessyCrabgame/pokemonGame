import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      if (state.value > action.payload) {
        state.value -= action.payload;
      }
    },
  },
});

export const { decrementByAmount, incrementByAmount } = moneySlice.actions;
export default moneySlice.reducer;
