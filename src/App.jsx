import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";

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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
