import { GrayBlock } from "../grayBlock/grayBlock";
import css from "./inventory.module.css";

export const Inventory = () => {
  return (
    <div className={css.inventory}>
      <p>Inventory</p>
      <div className={css.grayBlocks}>
        {Array.from({ length: 45 }, (_, i) => i).map((el, index) => (
          <GrayBlock key={index} image={null} width={48} height={48} />
        ))}
      </div>
    </div>
  );
};
