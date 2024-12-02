import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodCard from "../foodCard/FoodCard";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext); // Ensure food_list is destructured properly.

  return (
    <div className="p-6 w-[80%] m-auto">
      <h1 className="text-3xl font-bold mb-6">Top Dishes Near You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {food_list.map((item, index) => {
          console.log(category, item.category);
          if (category === "All" || category === item.category) {
            return (
              <FoodCard
                key={index}
                item={item}
                name={item.name}
                id={item._id}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
