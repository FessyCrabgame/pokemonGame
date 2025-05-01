import { Header } from "../../components/header/header";
import { Inventory } from "../../components/inventory/inventory";
import { MiddleSection } from "../../components/middleSection/middleSection";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <div className="flex mt-5 gap-5 w-full">
        <Inventory />
        <MiddleSection />
      </div>
    </div>
  );
}
