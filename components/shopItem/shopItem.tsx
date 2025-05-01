import Image from "next/image";
import css from "./shopItem.module.css";

interface WrapperProps {
  image: string;
  name: string;
  desciption: string;
  weight: number;
  chance: number;
  size: number;
  cost: number;
}

export const TagsList: React.FC<WrapperProps> = ({
  image,
  name,
  desciption,
  ///weight,
  ///chance,
  ///size,
  cost,
}) => {
  return (
    <div className={css.shopItem}>
      <div className={css.imageDiv}>
        <Image src={`/images/${image}`} width={59} height={59} alt={"Image"} />
        <div>
          <p className={css.name}>{name}</p>
          <p>{desciption}</p>
        </div>
      </div>
      <button className={css.button}>Купить за {cost}</button>
    </div>
  );
};
