import { useSelector } from "react-redux";
import css from "./header.module.css";
import Image from "next/image";
import { RootState } from "@/app/store/store";

export const Header = () => {
  const money = useSelector((state: RootState) => state.money.value);
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
        <p>{money}</p>
      </div>
    </header>
  );
};
