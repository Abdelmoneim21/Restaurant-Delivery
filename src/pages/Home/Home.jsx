import AppLoad from "../../components/AppLoad/AppLoad";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Header/Header";
import { useState } from "react";
export default function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppLoad />
    </div>
  );
}
