import { useSelector } from "react-redux";
import { Option } from "../option";
import { RootState } from "@/app/store/store";
import { PokemonItem } from "../pokemonItem/pokemonItem";
import css from "./myPokemons.module.css";

export const MyPokemons = () => {
  const pokemons = useSelector((state: RootState) => state.pokemons.value);
  return (
    <Option wrapperName={"MyPokemons"}>
      <div className={css.pokemons}>
        {pokemons.map((el, index) => (
          <PokemonItem item={el} key={index}></PokemonItem>
        ))}
      </div>
    </Option>
  );
};
