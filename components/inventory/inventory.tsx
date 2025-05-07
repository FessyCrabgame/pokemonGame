import { useSelector } from "react-redux";
import { useMemo } from "react";
import Image from "next/image";
import { RootState } from "@/app/store/store";
import { GrayBlock } from "../grayBlock/grayBlock";
import css from "./inventory.module.css";
import {
  calculatePositionedItems,
  useInventoryDragAndDrop,
} from "./inventoryFunctions";

export const Inventory = () => {
  const inventory = useSelector((state: RootState) => state.inventory.value);

  const positionedItems = useMemo(
    () => calculatePositionedItems(inventory),
    [inventory]
  );
  const {
    dragOver,
    positioned,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useInventoryDragAndDrop(inventory, positionedItems);

  return (
    <div className={css.inventory}>
      <p onClick={() => console.log(inventory)} className={css.inventoryP}>
        Inventory
      </p>

      <div className={css.grayBlocks}>
        {Array.from({ length: 45 }).map((_, index) => {
          const isOver = dragOver === index;
          return (
            <GrayBlock
              key={index}
              index={index}
              isOver={isOver}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
            />
          );
        })}
      </div>

      <div className={css.imagesDiv}>
        {positioned.map((el, index) => (
          <div
            key={index}
            style={{
              top: `${189 + Math.floor(el.finalId / 5) * 60}px`,
              left: `${32 + (el.finalId % 5) * 60}px`,
            }}
            className={`absolute z-10`}
          >
            <Image
              draggable
              onDragStart={(e) => handleDragStart(e, el)}
              width={48 * el.size + 12 * (el.size - 1)}
              height={48 * el.size + 12 * (el.size - 1)}
              src={`/images/${el.image}`}
              alt="item"
            />
          </div>
        ))}
      </div>

      <div className={css.containersGrayDiv}>
        {positioned
          .filter((el) => el.size > 1)
          .map((el, index) => (
            <div
              style={{
                top: `${Math.floor(el.finalId / 5) * 60}px`,
                left: `${(el.finalId % 5) * 60}px`,
                width: `${48 * el.size + 12 * (el.size - 1)}px`,
                height: `${48 * el.size + 12 * (el.size - 1)}px`,
              }}
              className={`absolute ${css.grayBlock}`}
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
};
