import { useState } from "react";
import { Land } from "../land/land";
import { Option } from "../option";
import { Upgrades } from "../upgrades/upgrades";
import { lockedBlocks } from "./gardenConsts";

export const Garden = () => {
  const [temp, setTemp] = useState(1.15);
  const [lockedBlock, setLockedBlock] = useState<number[]>(lockedBlocks);
  return (
    <Option wrapperName={"Garden"}>
      <div className="flex justify-between mt-4 pr-4">
        <Land lockedBlocks={lockedBlock} temp={temp} />
        <Upgrades
          lockedBlocks={lockedBlock}
          setLockedBlocks={setLockedBlock}
          temp={temp}
          setTemp={setTemp}
        />
      </div>
    </Option>
  );
};
