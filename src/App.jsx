import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
import AppLoad from "./components/AppLoad/AppLoad";
import Contact from "./components/Contact/Contact";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  const [ShowLogin, setShoweLogin] = useState(false);
  return (
    <>
      <div className="App">
        {ShowLogin ? <Login setShoweLogin={setShoweLogin} /> : <></>}
        <Navbar setShoweLogin={setShoweLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mobile" element={<AppLoad />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
