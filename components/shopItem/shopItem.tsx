import Image from "next/image";
import css from "./shopItem.module.css";
import { WrapperProps } from "./types";
import { addingElement } from "@/app/store/slices/inventorySlice";
import { decrementByAmount } from "@/app/store/slices/moneySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const ShopItem: React.FC<WrapperProps> = ({ item }) => {
  const money = useSelector((state: RootState) => state.money.value);
  const dispatch = useDispatch();
  return (
    <div className={css.shopItem}>
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
      <button
        onClick={() => {
          if (money > item.cost) {
            dispatch(addingElement(item));
            dispatch(decrementByAmount(item.cost));
          }
        }}
        className={css.button}
      >
        Купить за {item.cost}
      </button>
    </div>
  );
};
