export interface ItemProps {
  id?: number;
  image: string;
  name: string;
  description: string;
  weight?: number;
  chance?: number;
  size: number;
  cost: number;
}

export interface PokemonItem {
  id: number;
  image: string;
  name: string;
  weight: number;
  money: number;
  moneySum: number;
  age: number;
}

export interface GardenProps {
  id?: number;
  image: string;
  name: string;
  description: string;
  weight?: number;
  chance?: number;
  size: number;
  cost: number;
  time: number;
}
