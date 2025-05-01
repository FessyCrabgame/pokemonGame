"use client";

import { Provider } from "react-redux";
import { Header } from "../../components/header/header";
import { Inventory } from "../../components/inventory/inventory";
import { MiddleSection } from "../../components/middleSection/middleSection";
import { Shop } from "../../components/shop/shop";
import { store } from "./store/store";

export default function Home() {
  return (
    <div className="p-4">
      <Provider store={store}>
        <Header />
        <div className="flex mt-5 gap-5 w-full">
          <Inventory />
          <MiddleSection />
          <Shop />
        </div>
      </Provider>
    </div>
  );
}
