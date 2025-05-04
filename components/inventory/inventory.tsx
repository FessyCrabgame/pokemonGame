import { RootState } from "@/app/store/store";
import { GrayBlock } from "../grayBlock/grayBlock";
import css from "./inventory.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";

export const Inventory = () => {
  const inventory = useSelector((state: RootState) => state.inventory.value);
  return (
    <div className={css.inventory}>
      <p onClick={() => console.log(inventory)} className={css.inventoryP}>
        Inventory
      </p>
      <div className={css.imagesDiv}>
        {inventory.map((el, index) => (
          <Image
            key={index}
            style={{
              top: `${177 + (el.id ? Math.floor(el.id / 5) : 0) * 60}px`,
              left: `${32 + (el.id ? el.id % 5 : 0) * 60}px`,
            }}
            className={`z-5 absolute `}
            width={48 * el.size + 12 * (el.size - 1)}
            height={48 * el.size + 12 * (el.size - 1)}
            src={`/images/${el.image}`}
            alt={"photo"}
          />
        ))}
      </div>
      <div className={css.containersGrayDiv}>
        {inventory
          .filter((el) => el.size > 1)
          .map((el, index) => (
            <div
              style={{
                top: `${(el.id ? Math.floor(el.id / 5) : 0) * 60}px`,
                left: `${(el.id ? el.id % 5 : 0) * 60}px`,
                width: `${48 * el.size + 12 * (el.size - 1)}px`,
                height: `${48 * el.size + 12 * (el.size - 1)}px`,
              }}
              className={`absolute ${css.grayBlock}`}
              key={index}
            ></div>
          ))}
      </div>
      <div className={css.grayBlocks}>
        {Array.from(
          {
            length: 45,
          },
          (_, index) => (
            <GrayBlock key={index} />
          )
        )}
      </div>
    </div>
  );
};
