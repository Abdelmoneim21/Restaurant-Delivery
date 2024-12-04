export default function PlaceOrder() {
  return (
    <form>
      <div>
        <p className="title">Delivery information</p>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="street" />
        <div>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div>
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
    </form>
  );
}
