"use client";

import { useState } from "react";
import { TagsList } from "../tagsList/tagsList";
import css from "./shop.module.css";
import { ShopItem } from "../shopItem/shopItem";
import { shopItems } from "./shopConsts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { addingElement } from "@/app/store/slices/inventorySlice";
import { decrementByAmount } from "@/app/store/slices/moneySlice";

export const Shop = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const money = useSelector((state: RootState) => state.money.value);
  const dispatch = useDispatch();
  return (
    <div className={css.shop}>
      <p>Shop</p>
      <TagsList selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <div className={css.shopItems}>
        {shopItems.map((shopI, index) => (
          <ShopItem
            onClick={() => {
              if (money > shopI.cost) {
                dispatch(addingElement(shopI));
                dispatch(decrementByAmount(shopI.cost));
              }
            }}
            item={shopI}
            key={index}
          ></ShopItem>
        ))}
      </div>
    </div>
  );
};
