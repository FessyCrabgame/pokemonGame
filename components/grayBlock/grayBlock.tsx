import css from "./grayBlock.module.css";
import { GrayBlockProps } from "./types/grayBlock";

export const GrayBlock = ({
  white = false,
  index,
  isOver = false,
  onDragOver,
  onDrop,
  onDragLeave,
}: GrayBlockProps) => {
  return (
    <div
      className={`${white ? css.whiteBlock : css.grayBlock} ${
        isOver ? css.allowDrop : ""
      }`}
      onDragOver={(e) => {
        if (onDragOver && index !== undefined) onDragOver(e, index);
      }}
      onDrop={(e) => {
        if (onDrop && index !== undefined) onDrop(e, index);
      }}
      onDragLeave={() => {
        if (onDragLeave) onDragLeave();
      }}
    ></div>
  );
};
