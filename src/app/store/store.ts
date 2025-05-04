import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./slices/moneySlice";
import inventoryReducer from "./slices/inventorySlice";
import pokemonSlice from "./slices/pokemonsSlice";
import gardenSlice from "./slices/gardenSlice";

export const store = configureStore({
  reducer: {
    money: moneyReducer,
    inventory: inventoryReducer,
    pokemons: pokemonSlice,
    garden: gardenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
