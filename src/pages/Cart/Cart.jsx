import { useContext, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";

export default function Cart() {
  const { cartItems, food_list, addToCart, removeFromCart } =
    useContext(StoreContext);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const deliveryFee = 2.0;

  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id]) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  const total = subtotal + deliveryFee - discount;

  const handleApplyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setDiscount(10);
    } else {
      alert("Invalid promo code");
      setDiscount(0);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>
      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <div className="hidden md:grid md:grid-cols-6 text-center font-semibold border-b pb-3 mb-4">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-6 text-center items-center py-4 border-b gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
                <p className="text-sm md:text-base">{item.name}</p>
                <p className="hidden md:block text-sm md:text-base">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => removeFromCart(item._id)}
                  >
                    -
                  </button>
                  <p>{cartItems[item._id]}</p>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded"
                    onClick={() => addToCart(item._id)}
                  >
                    +
                  </button>
                </div>
                <p className="hidden md:block text-sm md:text-base">
                  ${(item.price * cartItems[item._id]).toFixed(2)}
                </p>
                <button
                  className="text-red-500 font-bold"
                  onClick={() => removeFromCart(item._id)}
                >
                  x
                </button>
              </div>
            );
          }
          return null;
        })}
        <div className="mt-6 md:w-[70%] md:m-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center mt-8">
            Cart Totals
          </h2>
          <div className="flex justify-between items-center mb-2">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Delivery Fee:</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          {discount > 0 && (
            <div className="flex justify-between items-center mb-2 text-green-500 font-bold">
              <p>Discount:</p>
              <p>- ${discount.toFixed(2)}</p>
            </div>
          )}
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="my-6">
            <p className="font-semibold mb-2">Have a Promo Code?</p>
            <div className="flex">
              <input
                type="text"
                className="border rounded-l px-4 py-2 flex-grow"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600"
                onClick={handleApplyPromoCode}
              >
                Apply
              </button>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded mt-4 w-full hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
