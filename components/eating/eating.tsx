import { RootState } from "@/app/store/store";
import { PokemonProps } from "../pokemonItem/typesPokemonItem";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { deletingElement } from "@/app/store/slices/inventorySlice";
import { increaseWeight } from "@/app/store/slices/pokemonsSlice";
import css from "./eating.module.css";

export const Eating: React.FC<PokemonProps> = ({ item }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state: RootState) => state.inventory.value);
  const berries = inventory.filter((el) => el.name.includes("Ягода"));

  const handleEat = (itemId: number, weightIncrease?: number) => {
    if (weightIncrease !== undefined) {
      dispatch(
        increaseWeight({
          id: item.id,
          weight: weightIncrease,
        })
      );
      dispatch(deletingElement({ id: itemId }));
    } else {
      console.error("Вес ягоды не задан!");
    }
  };

  return (
    <div className={css.wrapper}>
      {berries.length === 0 ? (
        <p className={css.noBerries}>Вы не купили ягоды</p>
      ) : (
        <div className={css.berriesSection}>
          <div className={css.berryGrid}>
            {berries.map((el, index) => (
              <div className={css.berryCard} key={index}>
                <div className={css.cardInner}>
                  <Image
                    src={`/images/${el.image}`}
                    className={css.image}
                    alt="Ягода"
                    width={59}
                    height={59}
                    priority
                  />
                  <div className={css.berryInfo}>
                    <p className={css.berryName}>{el.name}</p>
                    <p>
                      Накорми ей покемона для увеличения веса на {el.weight} кг
                    </p>
                  </div>
                </div>
                <button
                  className={css.feedButton}
                  onClick={() =>
                    el.id !== undefined && el.weight !== undefined
                      ? handleEat(el.id, el.weight)
                      : console.error("Ошибка: нет id или веса")
                  }
                >
                  Накормить
                </button>
              </div>
            ))}
          </div>
          <div className={css.scrollbarWrapper}>
            <div className={css.scrollbar}></div>
          </div>
        </div>
      )}
    </div>
  );
};
