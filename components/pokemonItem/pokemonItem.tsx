import { PokemonProps } from "./typesPokemonItem";
import Image from "next/image";
import css from "./pokemonItem.module.css";
import { PokemonItemModal } from "../pokemonItemModal/pokemonItemModal";
import { useEffect, useRef, useState } from "react";

export const PokemonItem: React.FC<PokemonProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);
  return (
    <div className={css.pokemonItem}>
      <div className={css.name}>
        <p className={css.bold}>{item.name}</p>
        <Image
          width={20}
          height={20}
          onClick={() => setIsModalOpen(true)}
          src={`/images/Vector (5).png`}
          alt={"settings"}
          className="max-w-5 max-h-5 cursor-pointer"
        />
      </div>
      <Image
        width={141}
        height={141}
        src={`/images/${item.image}`}
        alt={"pokemonItem"}
      />
      <div className={css.mainInfo}>
        <div className={css.bold}>
          <p>Вес</p>
          <p>Денег/сек</p>
        </div>
        <div className={css.addInfo}>
          <p>{item.weight}</p>
          <p>{item.money}</p>
        </div>
      </div>
      {isModalOpen && <PokemonItemModal ref={modalRef} item={item} />}
    </div>
  );
};
