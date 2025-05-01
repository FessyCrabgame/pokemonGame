import { Garden } from "../garden/garden";
import { Hunt } from "../hunt/hunt";
import { MyPokemons } from "../myPokemons/myPokemons";

export const MiddleSection = () => {
  return (
    <div className="w-full gap-5 flex flex-col">
      <MyPokemons />
      <Garden />
      <Hunt />
    </div>
  );
};
