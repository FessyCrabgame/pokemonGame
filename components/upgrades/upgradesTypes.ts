export interface UpgradesProps {
  temp: number;
  setTemp: (temp: number) => void;
  lockedBlocks: number[];
  setLockedBlocks: (lockedBlocks: number[]) => void;
}
