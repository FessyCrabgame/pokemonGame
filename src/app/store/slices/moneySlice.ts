import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoneyState {
  value: number;
}

const initialState: MoneyState = {
  value: 0,
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value > action.payload) {
        state.value -= action.payload;
      }
    },
  },
});

export const { decrementByAmount, incrementByAmount } = moneySlice.actions;
export default moneySlice.reducer;
