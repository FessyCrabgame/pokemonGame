import { useState } from "react";
import { Land } from "../land/land";
import { Option } from "../option";
import { Upgrades } from "../upgrades/upgrades";

export const Garden = () => {
  const [temp, setTemp] = useState(1.15);
  return (
    <Option wrapperName={"Garden"}>
      <div className="flex justify-between mt-4 pr-4">
        <Land temp={temp} />
        <Upgrades temp={temp} setTemp={setTemp} />
      </div>
    </Option>
  );
};
