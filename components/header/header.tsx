import { useDispatch, useSelector } from "react-redux";
import css from "./header.module.css";
import Image from "next/image";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { incrementByAmount } from "@/app/store/slices/moneySlice";
import { increasingEarnedMoney } from "@/app/store/slices/pokemonsSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const money = useSelector((state: RootState) => state.money.value);
  const pokemons = useSelector((state: RootState) => state.pokemons.value);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        incrementByAmount(pokemons.reduce((acum, el) => (acum += el.money), 0))
      );
      dispatch(increasingEarnedMoney());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, pokemons]);
  return (
    <header className={css.header}>
      <div className={css.mainHeaderDiv}>
        <Image
          width={149}
          height={54}
          src={"/images/image 1.png"}
          alt={"Pokemon"}
        />
        <span className={css.span}></span>
        <Image
          width={153}
          height={54}
          src={"/images/Clicker-12-14-2023 (3) 1.png"}
          alt={"Game"}
        />
      </div>
      <div className={css.moneyDiv}>
        <Image
          width={32}
          height={32}
          src={"/images/image 2 (1).png"}
          alt={"Coin"}
        />
        <p className={css.moneyP}>{money}</p>
      </div>
    </header>
  );
};
