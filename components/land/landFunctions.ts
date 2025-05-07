import { GardenProps } from "@/app/store/slices/types";

export const getFilteredGarden = (garden: GardenProps[]): GardenProps[] => {
  return garden.filter(
    (el) =>
      el.id !== undefined &&
      el.id % 7 !== 5 &&
      el.id % 7 !== 6 &&
      Math.floor(el.id / 7) < 5
  );
};
