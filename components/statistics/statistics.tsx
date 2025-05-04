import { useState } from "react";
import { PokemonProps } from "../pokemonItem/typesPokemonItem";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  deletingPokemon,
  renamePokemon,
} from "@/app/store/slices/pokemonsSlice";
import css from "./statistics.module.css";

export const Statistics: React.FC<PokemonProps> = ({ item }) => {
  const [nickname, setNickname] = useState(item.name);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (nickname.trim()) {
      dispatch(renamePokemon({ id: item.id, name: nickname }));
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deletingPokemon({ id }));
  };

  return (
    <div className={css.statisticsWrapper}>
      <div className={css.leftBlock}>
        <Image
          src="/images/image 6.png"
          alt="Спрайт покемона"
          width={143}
          height={143}
          priority
        />
        <button
          className={css.deleteButton}
          onClick={() => handleDelete(item.id)}
        >
          Удалить покемона
        </button>
      </div>
      <div className={css.rightBlock}>
        <div className={css.infoRow}>
          <div className={css.labels}>
            <p>Вид</p>
            <p>Вес</p>
            <p>Суммарно заработано</p>
            <p>Денег/сек</p>
            <p>Возраст</p>
          </div>
          <div className={css.values}>
            <p>{item.name}</p>
            <p>{item.weight.toFixed(1)} кг</p>
            <p>{item.moneySum}</p>
            <p>{item.money}</p>
            <p>{item.age}</p>
          </div>
        </div>
        <div className={css.nicknameSection}>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Псевдоним покемона"
            className={css.input}
          />
          <button className={css.saveButton} onClick={handleSave}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
