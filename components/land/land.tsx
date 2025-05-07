import { useDispatch, useSelector } from "react-redux";
import css from "./land.module.css";
import { RootState } from "@/app/store/store";
import { GrayBlock } from "../grayBlock/grayBlock";
import Image from "next/image";
import { useEffect } from "react";
import { decreasingTime } from "@/app/store/slices/gardenSlice";
import { LandProps } from "./landTypes";

export const Land: React.FC<LandProps> = ({ temp, lockedBlocks }) => {
  const garden = useSelector((state: RootState) => state.garden.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(decreasingTime({ time: 1 * temp }));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, temp]);
  return (
    <div>
      <div className={css.imagesDiv}>
        {garden
          .filter(
            (el) =>
              el.id !== undefined &&
              el.id % 7 != 5 &&
              el.id % 7 != 6 &&
              Math.floor(el.id / 7) < 5
          )
          .map((el, index) => (
            <div
              className="absolute"
              style={{
                top: `${3 + (el.id ? Math.floor(el.id / 7) : 0) * 60}px`,
                left: `${4 + (el.id ? el.id % 7 : 0) * 60}px`,
              }}
              key={index}
            >
              <Image
                className={`z-5 absolute `}
                width={48 * el.size + 12 * (el.size - 1)}
                height={48 * el.size + 12 * (el.size - 1)}
                src={`/images/${el.image}`}
                alt={"photo"}
              />
              <div className="text-center mt-12 ml-1 text-xs bg-black/40 text-white">
                {Math.ceil(el.time / 60)} мин
              </div>
            </div>
          ))}
      </div>
      <div className={css.containersGrayDiv}>
        {garden
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
            length: 49,
          },
          (_, index) => (
            <GrayBlock white={lockedBlocks.includes(index)} key={index} />
          )
        )}
      </div>
    </div>
  );
};
