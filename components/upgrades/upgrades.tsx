import { decrementByAmount } from "@/app/store/slices/moneySlice";
import { RootState } from "@/app/store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Upgrades.module.css";
import { UpgradesProps } from "./upgradesTypes";

export const Upgrades: React.FC<UpgradesProps> = ({ temp, setTemp }) => {
  const money = useSelector((state: RootState) => state.money.value);
  const dispatch = useDispatch();

  const handlePurchase = (price: number, callback: () => void) => {
    if (money >= price) {
      dispatch(decrementByAmount(price));
      callback();
    } else {
      console.log("Мало денег");
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Увеличить площадь грядки</p>
      <div className={styles.upgradeRow}>
        <button
          onClick={() => handlePurchase(10, () => console.log(1))}
          className={styles.button}
        >
          Купить
        </button>
        <div className={styles.price}>
          <Image
            src="/images/image 2 (1).png"
            alt="Монета"
            width={32}
            height={32}
            className={styles.coin}
            priority
          />
          <p>10</p>
        </div>
      </div>

      <p className={styles.title}>Ускорить рост на 2%/ч на 2 ч</p>
      <div className={styles.upgradeRow}>
        <button
          onClick={() => handlePurchase(20, () => setTemp(temp + 0.02))}
          className={styles.button}
        >
          Купить
        </button>
        <div className={styles.price}>
          <Image
            src="/images/image 2 (1).png"
            alt="Монета"
            width={32}
            height={32}
            className={styles.coin}
            priority
          />
          <p>20</p>
        </div>
      </div>

      <p className={styles.title}>Ускорить рост на 5%/ч на 2 ч</p>
      <div className={styles.upgradeRow}>
        <button
          onClick={() => handlePurchase(50, () => setTemp(temp + 0.05))}
          className={styles.button}
        >
          Купить
        </button>
        <div className={styles.price}>
          <Image
            src="/images/image 2 (1).png"
            alt="Монета"
            width={32}
            height={32}
            className={styles.coin}
            priority
          />
          <p>30</p>
        </div>
      </div>

      <div className={styles.growthStats}>
        <p>Скорость роста</p>
        <p>{Math.round((temp - 1) * 100)}%</p>
      </div>
    </div>
  );
};
