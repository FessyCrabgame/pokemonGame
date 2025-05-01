import { Header } from "../../components/header/header";
import { Inventory } from "../../components/inventory/inventory";

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <div className="flex">
        <Inventory />
      </div>
    </div>
  );
}
