import { useLocation } from "react-router-dom";
import { usePrice } from "../../Context/PriceContext";
import Swal from "sweetalert2";

export default function PlaceOrder() {
  const location = useLocation();
  //   const { subtotal, deliveryFee, total } = location.state || {
  //     subtotal: 0,
  //     deliveryFee: 0,
  //     total: 0,
  //   };
  const { priceData } = usePrice();
  const { subtotal, deliveryFee, total } = priceData;

  const handlePayment = () => {
    Swal.fire({
      title: "Payment Successful!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF5733",
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Place Your Order
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Street"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="State"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Country"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border rounded p-2 w-full col-span-1 md:col-span-2"
            />
          </form>
        </div>

        {/* Cart Totals */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Cart Totals</h2>
          <div className="flex justify-between items-center mb-2">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Delivery Fee:</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button
            onClick={handlePayment}
            className="bg-orange-500 text-white px-6 py-3 rounded mt-4 w-full hover:bg-orange-600"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
