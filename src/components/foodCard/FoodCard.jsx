import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

export default function FoodCard({
  id,
  description,
  name,
  image,
  price,
  category,
}) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
      id={id}
    >
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center align-middle">
          <h3 className="font-bold text-xl mb-2 text-gray-900">{name}</h3>
          <img src={assets.rating_starts} alt="stars" className="w-[40%]" />
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="flex justify-between">
          <h3 className="px-3 text-xl font-bold text-[#ff623f]">{price} $ </h3>
          <div className="">
            {!cartItems[id] ? (
              <img src={assets.add_icon_white} onClick={() => addToCart(id)} />
            ) : (
              <div className="flex justify-between gap-4 items-center">
                <img
                  src={assets.remove_icon_red}
                  onClick={() => {
                    removeFromCart(id);
                  }}
                />
                <p className="text-xl font-bold">{cartItems[id]}</p>
                <img
                  src={assets.add_icon_green}
                  onClick={() => addToCart(id)}
                />
              </div>
            )}
          </div>
        </div>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
          {category}
        </span>
      </div>
    </div>
  );
}
