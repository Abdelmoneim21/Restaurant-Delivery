import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodCard from "../foodCard/FoodCard";

export default function FoodDisplay() {
  const { food_list } = useContext(StoreContext); // Ensure food_list is destructured properly.

  return (
    <div className="p-6 w-[80%] m-auto">
      <h1 className="text-3xl font-bold mb-6">Top Dishes Near You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {food_list.map((item, index) => (
          <div key={index}>
            <FoodCard
              item={item}
              name={item.name}
              id={item.id}
              description={item.description}
              price={item.price}
              image={item.image}
              category={item.category}
            />{" "}
            {/* Pass the item as a prop to FoodCard */}
          </div>
        ))}
      </div>
    </div>
  );
}
