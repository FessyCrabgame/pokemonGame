import css from "./grayBlock.module.css";
import { GrayBlockProps } from "./types/grayBlock";

export const GrayBlock = ({ white = false }: GrayBlockProps) => {
  return <div className={white ? css.whiteBlock : css.grayBlock}></div>;
};
