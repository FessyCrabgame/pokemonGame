interface ItemProps {
  image: string;
  name: string;
  description: string;
  weight?: number;
  chance?: number;
  size: number;
  cost: number;
}

export interface WrapperProps {
  item: ItemProps;
  onClick?: () => void;
}
