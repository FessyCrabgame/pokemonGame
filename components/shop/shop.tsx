"use client";

import { useState } from "react";
import { TagsList } from "../tagsList/tagsList";
import css from "./shop.module.css";

export const Shop = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  return (
    <div className={css.shop}>
      <p>Shop</p>
      <TagsList selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
    </div>
  );
};
