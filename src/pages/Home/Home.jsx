import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <ExploreMenu />
      <FoodDisplay />
    </div>
  );
}
