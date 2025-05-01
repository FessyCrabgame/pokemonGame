import Image from "next/image";
import css from "./grayBlock.module.css";
import { GrayBlockProps } from "./types/grayBlock";

export const GrayBlock: React.FC<GrayBlockProps> = ({
  image,
  width,
  height,
}) => {
  return (
    <div className={css.grayBlock}>
      {image && (
        <Image
          src={`/images/${image}`}
          width={width}
          height={height}
          alt={"Image"}
        />
      )}
    </div>
  );
};
