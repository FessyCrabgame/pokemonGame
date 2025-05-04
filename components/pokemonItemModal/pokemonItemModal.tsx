import { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { Statistics } from "../statistics/statistics";
import { Eating } from "../eating/eating";
import { PokemonProps } from "../pokemonItem/typesPokemonItem";
import css from "./pokemonItemModal.module.css";

export const PokemonItemModal = forwardRef<HTMLDivElement, PokemonProps>(
  ({ item }, ref) => {
    const [categorie, setCategorie] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    // Делает внутренний modalRef доступным извне
    useImperativeHandle(ref, () => modalRef.current!);

    return (
      <div className={css.backdrop}>
        <div ref={modalRef} className={css.modal}>
          <p className={css.title}>Управление покемоном {item.name}</p>
          <span className={css.separatorFull}></span>
          <div className={css.content}>
            <div className={css.tabs}>
              <p
                onClick={() => setCategorie(1)}
                className={`${css.tab} ${categorie === 1 ? css.tabActive : ""}`}
              >
                Накормить
              </p>
              <p
                onClick={() => setCategorie(0)}
                className={`${css.tab} ${categorie === 0 ? css.tabActive : ""}`}
              >
                Статистика
              </p>
            </div>
            <div className={css.underlineContainer}>
              <span className={css.line} style={{ width: "191px" }}></span>
              <span
                className={`${css.line} ${
                  categorie === 1 ? css.lineActive : ""
                }`}
                style={{ width: "81px" }}
              ></span>
              <span className={css.line} style={{ width: "32px" }}></span>
              <span
                className={`${css.line} ${
                  categorie === 0 ? css.lineActive : ""
                }`}
                style={{ width: "78px" }}
              ></span>
              <span className={css.line} style={{ width: "171px" }}></span>
            </div>
            {categorie === 0 ? (
              <Statistics item={item} />
            ) : (
              <Eating item={item} />
            )}
            <span className={`${css.separatorFull} ${css.mtSpacing}`}></span>
          </div>
        </div>
      </div>
    );
  }
);

PokemonItemModal.displayName = "PokemonItemModal";
