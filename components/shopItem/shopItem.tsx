import Image from "next/image";
import css from "./shopItem.module.css";
import { WrapperProps } from "./types";

export const ShopItem: React.FC<WrapperProps> = ({ item }) => {
  return (
    <div onClick={() => {}} className={css.shopItem}>
      <div className={css.imageDiv}>
        <Image
          src={`/images/${item.image}`}
          width={59}
          height={59}
          alt={"Image"}
          className={css.image}
        />
        <div>
          <p className={css.name}>{item.name}</p>
          <p>{item.description}</p>
        </div>
      </div>
      <button className={css.button}>Купить за {item.cost}</button>
    </div>
  );
};
