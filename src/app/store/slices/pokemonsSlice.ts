import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonItem } from "./types";
import { pokemonsDefault } from "./consts";

interface PokemonState {
  value: PokemonItem[];
}

const initialState: PokemonState = {
  value: pokemonsDefault,
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addingPokemon: (state, action: PayloadAction<PokemonItem>) => {
      state.value.push({
        id: state.value.length,
        image: action.payload.image,
        name: action.payload.name,
        weight: action.payload.weight,
        money: action.payload.money,
        moneySum: action.payload.moneySum,
        age: action.payload.age,
      });
    },
    deletingPokemon: (state, action: PayloadAction<{ id: number }>) => {
      state.value = state.value.filter((el) => el.id != action.payload.id);
    },
    renamePokemon: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const { id, name } = action.payload;
      state.value = state.value.map((el) =>
        el.id === id ? { ...el, name } : el
      );
    },
    increaseWeight: (
      state,
      action: PayloadAction<{ id: number; weight: number }>
    ) => {
      state.value = state.value.map((el) =>
        el.id === action.payload.id
          ? { ...el, weight: el.weight + action.payload.weight }
          : el
      );
    },
  },
});

export const { addingPokemon, deletingPokemon, renamePokemon, increaseWeight } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
