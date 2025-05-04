"use client";

import { useState } from "react";
import { TagsList } from "../tagsList/tagsList";
import css from "./shop.module.css";
import { ShopItem } from "../shopItem/shopItem";
import { shopItems } from "./shopConsts";

export const Shop = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className={css.shop}>
      <p>Shop</p>
      <TagsList selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <div className={css.shopItems}>
        {shopItems.map((shopI, index) => (
          <ShopItem item={shopI} key={index}></ShopItem>
        ))}
      </div>
    </div>
  );
};
